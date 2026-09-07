import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Home() {
  const scrollToProjects = () => {
    document
      .querySelector("#projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
    id="home"
    className="noise honey-grid relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      {/* =====================================================
          DECORATIVE ELEMENTS
      ===================================================== */}

      {/* Large honey circle */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#f5b800] opacity-[0.08] blur-3xl md:h-[500px] md:w-[500px]" />

      {/* Hexagon decoration */}
      <div className="pointer-events-none absolute -left-16 top-[25%] opacity-50">
        <div className="hexagon scale-125" />
      </div>

      <div className="pointer-events-none absolute right-[35%] top-[18%] opacity-30">
        <div className="hexagon scale-75" />
      </div>

      <div className="pointer-events-none absolute bottom-[12%] right-[8%] opacity-20">
        <div className="hexagon scale-90" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
  className="
    container-custom
    relative
    z-10
    flex
    min-h-screen
    flex-col
    justify-between
    pb-6
    pt-24
    sm:pb-7
    sm:pt-28
    lg:pt-28
  "
>

        {/* ===================================================
            TOP INFO
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          {/* Open to work */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f5b800] opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f5b800]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
            Open to Work
            </span>
          </div>

          {/* Location */}
          <div className="hidden items-center gap-3 sm:flex">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              Indonesia
            </span>

            <span className="h-px w-8 bg-white/20" />

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
              2026
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
  className="
    grid
    items-center
    gap-12
    py-10
    sm:py-14
    md:gap-16
    lg:grid-cols-[1.1fr_0.9fr]
    lg:gap-16
    lg:py-16
    xl:grid-cols-[1.15fr_0.85fr]
    xl:gap-20
  "
>

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div>
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
                01
              </span>

              <span className="h-px w-8 bg-[#f5b800]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted)]">
                Portfolio
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mb-4 text-sm font-medium text-[var(--muted)]"
            >
              Hi, I'm
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                display-text
                max-w-full
                text-[clamp(2.8rem,12.5vw,5rem)]
                font-black
                uppercase
                sm:max-w-4xl
                sm:text-[clamp(4rem,11vw,7rem)]
                lg:text-[clamp(4.8rem,7vw,8rem)]
                "
            >
              Ahmad Nur
              <br />

              <span className="text-[var(--accent)]">
                Hidayatullah.
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8"
            >
              <h2 className="text-xl font-bold uppercase tracking-tight text-[var(--foreground)] sm:text-2xl">
                Web Developer
                <span className="mx-2 text-[var(--accent)]">&</span>
                <span className="text-[var(--muted)]">
                  UI/UX Enthusiast
                </span>
              </h2>
            </motion.div>

            {/* DESCRIPTION
            <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.6,
    duration: 0.6,
  }}
  className="
    mt-5
    w-full
    max-w-full
    text-[13px]
    leading-[1.7]
    text-[var(--muted)]

    min-[400px]:text-[13.5px]

    sm:max-w-[520px]
    sm:text-sm
    sm:leading-7

    md:max-w-[580px]
    md:text-[15px]

    lg:max-w-xl
    lg:text-[15px]

    xl:max-w-2xl
    xl:text-base
  "
>
  Fresh Graduate Teknologi Informasi dengan ketertarikan pada Web
  Development, Software Development, dan UI/UX Design. Membangun solusi
  digital yang fungsional, responsive, dan mudah digunakan.
</motion.p> */}

            {/* =================================================
                CTA
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {/* Primary */}
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-5 bg-[#f5b800] px-6 py-4 text-xs font-black uppercase tracking-[0.12em] text-[#0b0b0b] transition-all duration-300 hover:bg-[#ffd447] hover:shadow-[5px_5px_0_#ffffff]"
              >
                View My Projects

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary */}
              <a
                href="/CV.pdf"
                download
                className="group flex items-center gap-3 border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white/80 transition-all duration-300 hover:border-[#f5b800] hover:text-[var(--accent)]"
              >
                Download CV

                <span className="h-1 w-1 rounded-full bg-[#f5b800] transition-transform group-hover:scale-150" />
              </a>
            </motion.div>

            {/* =================================================
                SOCIAL
            ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 flex items-center gap-5"
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                Find me on
              </span>

              <span className="h-px w-8 bg-white/10" />

              <a
                href="https://github.com/AhmadNurHidayatullah"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmad-nurhidayatullah-853502341"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                <FaLinkedin size={18} />
              </a>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
  relative
  mx-auto
  mb-8
  w-[88%]
  max-w-[380px]
  sm:w-full
  sm:max-w-md
  lg:mb-0
  lg:ml-auto
"
          >
            {/* Vertical label */}
            <div className="absolute -left-10 top-1/2 hidden -translate-y-1/2 -rotate-90 lg:block">
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/25">
                Digital / Creative / Development
              </span>
            </div>

            {/* PHOTO */}
            <div className="photo-frame relative aspect-[4/5] overflow-hidden border border-white/15 bg-[#171717]">

              {/* Decorative yellow corner */}
              <div className="absolute right-0 top-0 z-10 h-16 w-16 bg-[#f5b800]" />

              {/* Hexagon inside photo */}
              <div className="absolute -bottom-16 -left-16 opacity-20">
                <div className="hexagon scale-[2.2]" />
              </div>

              {/* Photo */}
              <img
                src="/profil/profil.jpg"
                alt="Ahmad Nur Hidayatullah"
                className="absolute inset-0 h-140 w-full object-cover"
              />

              {/* Photo number */}
              <div className="absolute bottom-5 left-5">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                  Portrait / 001
                </span>
              </div>

              {/* Developer badge */}
              <div className="absolute bottom-5 right-5 border border-white/20 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                  Developer
                </span>
              </div>
            </div>

            {/* =================================================
                FLOATING INFO CARD
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
  absolute
  -bottom-5
  left-3
  w-[calc(100%-24px)]
  max-w-56
  border
  border-[var(--border)]
  bg-[var(--card)]
  p-4
  shadow-[6px_6px_0_var(--accent)]
  sm:-bottom-8
  sm:-left-8
  sm:w-56
"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--muted-dark)]">
                  Currently learning
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#f5b800]" />
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-bold text-[var(--muted)]">
                  React
                </span>

                <span className="text-white/20">/</span>

                <span className="text-sm font-bold text-[var(--muted)]">
                  Next.js
                </span>
              </div>
            </motion.div>

            {/* =================================================
                SOCIAL FLOATING
            ================================================= */}

            <div
  className="
    absolute
    right-2
    top-1/2
    hidden
    -translate-y-1/2
    flex-col
    border
    border-[var(--border)]
    bg-[var(--background)]
    sm:flex
    sm:-right-5
  "
>
              <a
                href="https://github.com/AhmadNurHidayatullah"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center border-b border-white/10 text-[var(--muted)] transition-colors hover:bg-[#f5b800] hover:text-[#0b0b0b]"
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmad-nurhidayatullah-853502341"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center text-[var(--muted)] transition-colors hover:bg-[#f5b800] hover:text-[#0b0b0b]"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM INFORMATION
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="border-t border-white/10 pt-5"
        >
          <div className="flex items-center justify-between">

            {/* Scroll */}
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center border border-white/15">
                <ArrowDown
                  size={13}
                  className="text-[var(--accent)]"
                />
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted-dark)]">
                Scroll to explore
              </span>
            </div>

            {/* Right */}
            <div className="hidden items-center gap-4 sm:flex">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                Web
              </span>

              <span className="h-1 w-1 rounded-full bg-[#f5b800]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                Software
              </span>

              <span className="h-1 w-1 rounded-full bg-[#f5b800]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                UI/UX
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}