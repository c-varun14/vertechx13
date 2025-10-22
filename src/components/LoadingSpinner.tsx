import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#faefca]">
      <div className="flex flex-col items-center space-y-4 p-6 bg-[#faefca] rounded-xl">
        <Image
          src="/assets/loading.gif"
          alt="Loading..."
          className="w-[15rem] h-[15rem] object-contain"
          width={100}
          height={100}
        />
        <p className="text-[#5F4A37] font-medium text-sm">Loading...</p>
      </div>
    </div>
  );
}
