// import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

// const CV = () => {
//   return (
//     <section
//       id="cv"
//       className="relative overflow-hidden bg-[#0b0b0b] py-28 text-[#f5f3ed] md:py-36"
//     >
//       <div className="container-custom">

//         {/* Header */}
//         <div className="mb-20 flex items-center gap-4">
//           <span className="text-xs font-semibold tracking-[0.3em] text-[#f5b800]">
//             06
//           </span>

//           <div className="h-px w-16 bg-[#f5b800]" />

//           <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#707070]">
//             Curriculum Vitae
//           </span>
//         </div>

//         {/* Intro */}
//         <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr]">
//           <div>
//             <h2 className="max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-8xl">
//               A closer
//               <br />
//               look at
//               <br />
//               <span className="text-[#f5b800]">my profile.</span>
//             </h2>
//           </div>

//           <div className="flex items-end">
//             <p className="max-w-md text-base leading-7 text-[#a1a1a1]">
//               Lihat perjalanan pendidikan, pengalaman organisasi, kemampuan,
//               dan project yang saya kerjakan dalam CV saya.
//             </p>
//           </div>
//         </div>

//         {/* CV Preview */}
//         <div className="mt-20">
//           <div className="overflow-hidden border border-[#292929] bg-[#151515]">

//             {/* Browser-like header */}
//             <div className="flex items-center justify-between border-b border-[#292929] px-5 py-4">
//               <div className="flex items-center gap-2">
//                 <span className="h-2 w-2 rounded-full bg-[#f5b800]" />
//                 <span className="text-[10px] uppercase tracking-[0.2em] text-[#707070]">
//                   CV / Resume
//                 </span>
//               </div>

//               <span className="text-[10px] text-[#707070]">
//                 PDF Preview
//               </span>
//             </div>

//             {/* PDF */}
//             <div className="bg-[#222]">
//               <iframe
//                 src="/cv/Ahmad-Nur-Hidayatullah-CV.pdf"
//                 title="Curriculum Vitae"
//                 className="h-[650px] w-full md:h-[800px]"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="mt-8 flex flex-col gap-4 sm:flex-row">

//           {/* Open */}
//           <a
//             href="/cv/Ahmad-Nur-Hidayatullah-CV.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group inline-flex w-fit items-center gap-3 border border-[#383838] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 hover:border-[#f5b800]"
//           >
//             Open CV

//             <ArrowUpRight
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>

//           {/* Download */}
//           <a
//             href="/cv/Ahmad-Nur-Hidayatullah-CV.pdf"
//             download
//             className="group inline-flex w-fit items-center gap-3 bg-[#f5b800] px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#0b0b0b] transition-colors duration-300 hover:bg-[#ffd447]"
//           >
//             Download CV

//             <ArrowDownToLine
//               size={16}
//               className="transition-transform duration-300 group-hover:translate-y-1"
//             />
//           </a>
//         </div>

//         {/* Bottom */}
//         <div className="mt-24 border-t border-[#292929] pt-8">
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
//             <div>
//               <p className="text-xs uppercase tracking-[0.2em] text-[#707070]">
//                 Looking for opportunities
//               </p>

//               <p className="mt-2 text-xl font-medium">
//                 Web Development · Software Development · UI/UX
//               </p>
//             </div>

//             <a
//               href="#contact"
//               className="group flex w-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em]"
//             >
//               Let's talk

//               <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5b800] text-[#0b0b0b] transition-transform duration-300 group-hover:translate-x-1">
//                 <ArrowUpRight size={16} />
//               </span>
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default CV;