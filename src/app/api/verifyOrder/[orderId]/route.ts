import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma"; // Adjust the import path as needed

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  const { orderId } = await context.params;
  const registrationId = req.nextUrl.searchParams.get("registrationId");

  try {
    const order = await razorpay.orders.fetch(orderId);

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    const payments = await razorpay.orders.fetchPayments(orderId);
    const paid = payments.items.some(
      (payment) => payment.status === "captured"
    );

    const firstPayment = payments.items[0];

    if (registrationId && firstPayment && paid && !firstPayment.refund_status) {
      await prisma.registration.update({
        where: { id: registrationId },
        data: { paymentId: firstPayment.id },
      });
    }

    return NextResponse.json(
      {
        status: paid ? "paid" : "unpaid",
        payment_id: firstPayment?.id ?? null,
        refund_status: firstPayment?.refund_status ?? null,
      },

      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying order:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
