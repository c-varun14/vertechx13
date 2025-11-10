import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  ArrowLeft,
  Check,
  AlertCircle,
  CreditCard,
  Users,
  Ticket,
  MapPin,
} from "lucide-react";
import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getEventDetailsById } from "@/lib/eventsData";
import { TicketDownload } from "@/components/TicketDownload";

const getPaymentStatus = (paymentId: string | null) => {
  // if (!registration.paymentAmount) return "FREE";
  if (paymentId) return "PAID";
  return "PENDING";
};

const getPaymentStatusBadge = (paymentId: string | null) => {
  const status = getPaymentStatus(paymentId);

  switch (status) {
    case "PAID":
      return (
        <div className="flex items-center px-2.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
          <Check className="h-3 w-3 mr-1" />
          Paid
        </div>
      );
    case "PENDING":
      return (
        <div className="flex items-center px-2.5 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
          <AlertCircle className="h-3 w-3 mr-1" />
          Pending
        </div>
      );
    // case "FREE":
    //   return (
    //     <div className="flex items-center px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
    //       <Check className="h-3 w-3 mr-1" />
    //       Free
    //     </div>
    //   );
    default:
      return (
        <div className="flex items-center px-2.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
          Unknown
        </div>
      );
  }
};
const RegistrationDetailsPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  if (!session?.user.email || !session.user.id)
    return redirect(
      `/api/auth/signin?callbackUrl=${
        process.env.BASE_URL || "http://localhost:3000"
      }/profile/details/${id}`
    );
  const registration = await prisma.registration.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
    include: {
      teamMembers: true,
    },
  });
  if (!registration)
    return (
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 bg-card/80 backdrop-blur-sm border border-border shadow-lg rounded-xl">
        <div className="bg-primary/10 rounded-full p-4 mb-4">
          <AlertCircle className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Registration Not Found
        </h2>
        <p className="text-base mb-6">
          The registration you&apos;re looking for doesn&apos;t exist or may
          have been deleted.
        </p>
        <Link
          href="/profile"
          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Back to Profile
        </Link>
      </div>
    );
  const eventDetails = getEventDetailsById(registration?.eventId);
  if (!eventDetails?.event)
    return (
      <p>
        It seems like the event you have register for doesn&apos;t not exist.
        Reach out to the coordinators for any discrepancies
      </p>
    );
  const event = eventDetails.event;
  const qrCodeDataURL = await QRCode.toDataURL(registration.id, {
    width: 150,
    margin: 1,
    color: {
      dark: "#0f131dff",
      light: "#ffffff00",
    },
  });
  return (
    <div className="min-h-screen bg-contain bg-center bg-[url('/assets/AndroidBackground.png')] md:bg-[url('/assets/Background.png')] bg-fixed text-foreground scroll-smooth">
      <div className="max-w-6xl mx-auto px-4 py-6 mt-4 lg:mt-8 sm:py-8">
        {/* Back Button */}
        <Link
          href={"/profile"}
          className="flex items-center text-foreground hover:text-foreground/80 mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span className="text-sm font-medium">Back to Profile</span>
        </Link>

        <div className="space-y-6">
          {/* Event Header with Title and Status */}
          <div className="bg-card/80 backdrop-blur-sm border border-border shadow-lg rounded-xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 relative rounded overflow-hidden flex-shrink-0 bg-primary/10">
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-primary text-xl sm:text-2xl font-bold">
                        {event.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-0">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
                    {event.name}
                  </h1>
                  <p className="text-sm text-muted-foreground mb-1">
                    {eventDetails.club}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getPaymentStatusBadge(registration.paymentId)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-border shadow-lg rounded-xl overflow-hidden">
            {/* Event Info */}
            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-bold mb-3">Event Details</h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Date & Time
                    </p>
                    <p className="text-sm font-medium">{event.date_time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Venue
                    </p>
                    <p className="text-sm font-medium">{event.venue}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">
                    Description
                  </p>
                  <p className="text-sm">{event.description}</p>
                </div>

                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">
                    Team Size
                  </p>
                  <p className="text-sm">
                    {event.minTeamMembers === event.maxTeamMembers
                      ? event.maxTeamMembers == 1
                        ? "Solo event"
                        : `${event.minTeamMembers} team members`
                      : `${event.minTeamMembers} - ${event.maxTeamMembers} team members`}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Details Card */}
          <div className="bg-card/80 backdrop-blur-sm border border-border shadow-lg rounded-xl p-4 sm:p-5">
            <h2 className="text-xl font-bold mb-6">Registration Details</h2>

            {/* Payment Details */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-lg font-medium">Payment Details</h3>
              </div>

              <div className="bg-primary/5 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Amount</p>
                    <p className="text-lg font-medium">
                      ₹{registration.paymentAmount}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Status</p>
                    <div className="flex items-center">
                      {getPaymentStatus(registration.paymentId) === "PAID" ? (
                        <div className="flex items-center text-emerald-700">
                          <Check className="h-4 w-4 mr-1" />
                          <span className="font-medium">Paid</span>
                        </div>
                      ) : getPaymentStatus(registration.paymentId) ===
                        "PENDING" ? (
                        <div className="flex items-center text-amber-700">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span className="font-medium">Pending</span>
                        </div>
                      ) : (
                        <div className="flex items-center text-blue-700">
                          <Check className="h-4 w-4 mr-1" />
                          <span className="font-medium">Free</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {registration.paymentId && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">
                      Payment ID
                    </p>
                    <p className="text-sm font-medium">
                      {registration.paymentId}
                    </p>
                  </div>
                )}

                {getPaymentStatus(registration.paymentId) === "PENDING" && (
                  <div className="mt-4">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                      {getPaymentStatus(registration.paymentId) === "PENDING"
                        ? "Complete Payment"
                        : "Retry Payment"}
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4"></div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-medium">Team Lead Details</h3>
              </div>

              <div className="bg-primary/5 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Name</p>
                    <p className="flex items-center">{registration.name}</p>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-1">USN</p>
                    <div className="flex items-center">{registration.usn}</div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Phone No
                    </p>
                    <div className="flex items-center">
                      {registration.phone}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">
                      College
                    </p>
                    <div className="flex items-center">
                      {registration.collegeName}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Participants */}
            {registration.teamMembers.length != 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium">
                    Team Members ({registration.teamMembers.length})
                  </h3>
                </div>

                <div className="space-y-3">
                  {registration.teamMembers.map((participant) => (
                    <div
                      key={participant.id}
                      className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5">
                        {participant.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold truncate">
                            {participant.name}
                          </h4>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 truncate">
                          USN: {participant.usn}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          College: {participant.collegeName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Event Ticket */}
            {getPaymentStatus(registration.paymentId) === "PAID" && (
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <Ticket className="h-5 w-5 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Event Ticket</h3>
                </div>

                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <div className="bg-card rounded-lg border border-border shadow-sm">
                      <div className="w-32 h-32 bg-foreground/90 flex items-center justify-center">
                        <Image
                          src={qrCodeDataURL}
                          alt="QR-Code"
                          height={100}
                          width={100}
                        />
                      </div>
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <p className="text-sm mb-3">
                        Present this QR code at the venue entrance for check-in
                      </p>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                        <TicketDownload
                          event={event}
                          registration={registration}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationDetailsPage;
