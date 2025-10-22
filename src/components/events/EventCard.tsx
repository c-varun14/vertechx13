// import { Event } from "@/types/event";

// export default function EventCard({ event }: { event: Event }) {
//   return (
//     <div
//       className="relative w-full max-w-4xl mx-auto rounded-2xl bg-cover bg-center shadow-xl border border-[#e0c68a] overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
//       style={{ backgroundImage: `url(/assets/clubs/mega-bg.png)` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#6e4a12]/40 to-black/70" />
//       <div className="relative z-10 p-6 px-3 text-white space-y-6">
//         {/* Title */}
//         <h2 className="w-fit mx-auto rounded-xl bg-gradient-to-r from-[#ffe9b0] to-[#e0c68a] px-5 py-2 text-xl sm:text-2xl font-extrabold text-[#6e4a12] shadow border-2 border-[#6e4a12]">
//           {event.name}
//         </h2>

//         {/* Date & Venue */}
//         <div className="flex flex-row gap-2 w-full mx-auto max-w-md">
//           {[
//             ["📅", "Date & Time", event.date_time],
//             ["📍", "Venue", event.venue],
//           ].map(([icon, label, value], i) => (
//             <div
//               key={i}
//               className={`flex items-center gap-2 bg-black/40 rounded-lg py-2 px-3 border border-[#6e4a12] ${
//                 i === 0 ? "basis-6/10" : "basis-4/10"
//               }`}
//             >
//               <span className="text-[#e0c68a] text-lg">{icon}</span>
//               <div>
//                 <p className="text-xs text-[#e0c68a] font-medium uppercase tracking-wide">
//                   {label}
//                 </p>
//                 <p className="text-xs sm:text-base font-semibold text-[#ffe9b0]">
//                   {value}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Description */}
//         <p className="text-center text-base sm:text-lg font-medium text-[#ffe9b0] leading-relaxed">
//           {event.description}
//         </p>

//         {/* Prizes & Registration Fee */}
//         <div className="flex flex-col sm:flex-row justify-center gap-6 bg-gradient-to-br from-[#6e4a12]/60 to-black/40 border-2 border-[#ffe9b0] rounded-xl p-4 shadow-lg">
//           {[
//             {
//               label: "1st Prize",
//               amount: event.prizes.first,
//               gradient: "from-[#ffe9b0] to-[#e0c68a]",
//               prefix: "₹",
//             },
//             {
//               label: "2nd Prize",
//               amount: event.prizes.second,
//               gradient: "from-[#e0c68a] to-[#d4b876]",
//               prefix: "₹",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className={`text-center bg-gradient-to-b ${item.gradient} rounded-lg px-6 py-4 shadow-md`}
//             >
//               <p className="text-xs font-bold text-[#6e4a12] uppercase">
//                 {item.label}
//               </p>
//               <p className="text-xl sm:text-2xl font-extrabold text-[#6e4a12]">
//                 {item.prefix}
//                 {item.amount}
//               </p>
//             </div>
//           ))}

//           {/* Entry Fee - distinct styling */}
//           <div className="text-center bg-black/50 border-2 border-[#e0c68a] rounded-lg px-6 py-4 shadow-md">
//             <p className="text-xs font-bold text-[#e0c68a] uppercase">
//               Entry Fee
//             </p>
//             <p className="text-xl sm:text-2xl font-extrabold text-[#ffe9b0]">
//               ₹{event.registration_fee}
//             </p>
//           </div>
//         </div>

//         {/* Rules + Coordinators side by side on desktop */}
//         <div className="flex flex-col sm:flex-row gap-4">
//           {/* Rules */}
//           {event.rules?.length > 0 && (
//             <div className="bg-black/30 rounded-lg p-4 border border-[#6e4a12] w-full sm:w-1/2">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="rounded-full border-2 border-[#e0c68a] bg-gradient-to-r from-[#ffe9b0] to-[#e0c68a] px-3 py-1 font-bold text-[#6e4a12] text-xs sm:text-sm">
//                   RULES
//                 </span>
//               </div>
//               <ul className="space-y-1 text-sm sm:text-base text-[#ffe9b0]">
//                 {event.rules.map((rule, i) => (
//                   <li key={i} className="flex items-start">
//                     <span className="mr-2 text-[#e0c68a] mt-1">●</span>
//                     <span className="leading-relaxed">{rule}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Coordinators */}
//           <div className="bg-black/30 rounded-lg p-4 border border-[#6e4a12] w-full sm:w-1/2">
//             <div className="flex items-center gap-2 mb-2">
//               <span className="text-[#e0c68a]">👥</span>
//               <h4 className="text-sm font-semibold text-[#ffe9b0] uppercase tracking-wide">
//                 Coordinators
//               </h4>
//             </div>
//             {event.coordinators?.map((person, i) => (
//               <div key={i} className="flex justify-between text-sm">
//                 <span className="font-medium text-[#e0c68a]">
//                   {person.name}
//                 </span>
//                 <span className="text-[#ffe9b0]">{person.phone}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center pt-2">
//           <Link
//             href="/clw3q9v6e001108l0h6qy7q1z/register?clubName=Nrityatrix"
//             className="rounded-full border-2 border-[#e0c68a] bg-gradient-to-r from-[#ffe9b0] to-[#e0c68a] hover:from-[#e0c68a] hover:to-[#ffe9b0] transition-all duration-300 px-8 py-3 font-bold text-[#6e4a12] shadow-lg text-base sm:text-lg transform hover:scale-105 hover:shadow-xl"
//           >
//             Register Now ➤
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
import Link from "next/link";

const DJNightCard = () => {
  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#0f0f1b] text-white">
      {/* Background Image Section */}
      <div
        className="h-64 sm:h-72 md:h-80 lg:h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(/assets/clubevents/dj-bg.png)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1b] to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 text-left sm:left-6 sm:right-6">
          <h2 className="text-pink-500 text-2xl sm:text-3xl font-bold">
            DJ Night
          </h2>
          <p className="text-lg sm:text-xl font-semibold">Saturday, 31 May</p>
          <p className="text-sm sm:text-base">Starts at 4:00 PM</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 space-y-3">
        <p className="text-lg sm:text-xl font-semibold">
          Featuring:{" "}
          <span className="text-pink-400 font-bold">
            DJ Naveen and DJ Gagan
          </span>
        </p>

        <p className="text-sm sm:text-base">Entry Price: ₹300</p>
        <p className="text-xs sm:text-sm text-gray-300">
          Free entry for MVJCE students & Swayam event participants.
        </p>

        <Link
          href="/clw3q9v6e000308l0cajwj9tt/register?clubName=Dhwani"
          className="block w-full text-center bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-semibold transition"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return <DJNightCard />;
}
