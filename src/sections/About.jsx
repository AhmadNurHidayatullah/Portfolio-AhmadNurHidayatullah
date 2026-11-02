import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-16
        text-[var(--foreground)]
        transition-colors
        duration-300
        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      <div className="container-custom">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4 md:mb-14">
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
            02
          </span>

          <div className="h-px w-10 bg-[var(--accent)] sm:w-14" />

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.25em]">
            About Me
          </span>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            grid
            min-w-0
            gap-10
            lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]
            lg:gap-14
            xl:gap-20
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="min-w-0">

            {/* Heading */}
            <h3
              className="
                max-w-3xl
                text-[clamp(2.25rem,7vw,3.5rem)]
                font-semibold
                leading-[1]
                tracking-[-0.045em]

                sm:text-[clamp(2.75rem,6vw,4rem)]

                md:text-[clamp(3.25rem,5.5vw,4.5rem)]

                lg:text-[clamp(3.75rem,5vw,5rem)]
                lg:leading-[0.96]

                xl:text-[5rem]
              "
            > 
              " Turning{" "}
              <span className="text-[var(--accent)]">
                 ideas
              </span>{" "}
              into functional digital solutions. "
            </h3>

            {/* Description */}
            <div
              className="
                mt-7
                max-w-xl
                border-l
                border-[var(--accent)]
                pl-4

                sm:mt-8
                sm:pl-5

                md:mt-9
                md:pl-6
              "
            >
              <p
                className="
                  text-[13px]
                  leading-6
                  text-[var(--muted)]

                  sm:text-sm
                  sm:leading-7

                  md:text-base
                  md:leading-7
                "
              >
                Saya merupakan fresh graduate Teknologi Informasi yang
                memiliki ketertarikan pada Web Development, Software
                Development, dan UI/UX Design.
              </p>

              <p
                className="
                  mt-3
                  text-[13px]
                  leading-6
                  text-[var(--muted)]

                  sm:mt-4
                  sm:text-sm
                  sm:leading-7

                  md:text-base
                  md:leading-7
                "
              >
                Terbiasa terlibat dalam proses pengembangan aplikasi, 
                mulai dari analisis kebutuhan, perancangan alur sistem 
                dan antarmuka, implementasi fitur, pengembangan REST API, 
                hingga pengujian aplikasi. Saya senang mempelajari teknologi 
                baru dan mengembangkan solusi digital yang fungsional, terstruktur, 
                serta mudah digunakan.
              </p>
            </div>

            {/* =================================================
                TAGS
            ================================================= */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2

                sm:mt-7
                sm:gap-2.5
              "
            >
              {[
                "Web Development",
                "Software Development",
                "API Development",
                "Database Management",
                "Front-End Development",
                "Back-End Development",
                "Full Stack Development",
                "UI/UX Design",
                "System Analysis",
                "Problem Solving",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    px-3
                    py-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.07em]
                    text-[var(--muted)]
                    transition-colors
                    duration-300
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]

                    sm:px-3.5
                    sm:py-2
                    sm:text-[10px]
                    sm:tracking-[0.1em]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <div className="flex min-w-0 flex-col justify-end">

            {/* =================================================
                STATS
            ================================================= */}

            <div className="border-t border-[var(--border)]">

              {/* Focus */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[var(--border)]
                  py-4

                  sm:py-5
                "
              >
                <span className="text-xs text-[var(--muted)] sm:text-sm">
                  Focus
                </span>

                <span className="text-right text-xs font-semibold text-[var(--foreground)] sm:text-sm">
                  Software, Web & Application Developer
                </span>
              </div>

              {/* Experience */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[var(--border)]
                  py-4

                  sm:py-5
                "
              >
                <span className="text-xs text-[var(--muted)] sm:text-sm">
                  Experience
                </span>

                <span className="text-right text-xs font-semibold text-[var(--foreground)] sm:text-sm">
                  Internship & Projects
                </span>
              </div>

              {/* Based */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-b
                  border-[var(--border)]
                  py-4

                  sm:py-5
                "
              >
                <span className="text-xs text-[var(--muted)] sm:text-sm">
                  Based in
                </span>

                <span className="text-right text-xs font-semibold text-[var(--foreground)] sm:text-sm">
                  Yogyakarta, Indonesia
                </span>
              </div>

            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <a
              href="#projects"
              className="
                group
                mt-6
                inline-flex
                w-fit
                items-center
                gap-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[var(--foreground)]
                transition-colors
                hover:text-[var(--accent)]

                sm:mt-7
                sm:text-sm
                sm:tracking-[0.15em]
              "
            >
              Explore My Work

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[var(--foreground)]
                  text-[var(--background)]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:bg-[var(--accent)]
                  group-hover:text-[#0b0b0b]

                  sm:h-9
                  sm:w-9
                "
              >
                <ArrowUpRight size={16} />
              </span>
            </a>

          </div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <div
          className="
            mt-10
            flex
            items-center
            gap-3

            sm:mt-12
            sm:gap-4

            md:mt-14
          "
        >
          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)] sm:h-2 sm:w-2" />

          <div className="h-px flex-1 bg-[var(--border)]" />

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[var(--muted-dark)] sm:block sm:text-[10px] sm:tracking-[0.25em]">
            Building with purpose
          </span>

          <span className="text-[8px] uppercase tracking-[0.12em] text-[var(--muted-dark)] sm:hidden">
            Purpose
          </span>
        </div>

      </div>
    </section>
  );
};

export default About;