import { ArrowDownToLine, ArrowUpRight } from "lucide-react";

const CV = () => {
  return (
    <section
      id="cv"
      className="bg-[var(--background)] py-20 text-[var(--foreground)] transition-colors duration-300 sm:py-24 md:py-28 lg:py-36"
    >
      <div className="container-custom">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-[var(--accent)]">
            06
          </span>

          <div className="h-px w-10 bg-[var(--accent)] sm:w-16" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)] sm:text-xs">
            Curriculum Vitae
          </span>
        </div>

        {/* Content */}
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:items-end lg:gap-12">

          {/* Heading */}
          <div className="min-w-0">
            <h2
              className="
                max-w-4xl
                text-[clamp(3rem,13vw,4.5rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-[clamp(4rem,10vw,6rem)]
                md:text-7xl
                lg:text-8xl
              "
            >
              Want the
              <br />
              <span className="text-[var(--accent)]">
                full picture?
              </span>
            </h2>
          </div>

          {/* Description & Actions */}
          <div className="min-w-0">
            <p className="max-w-md text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              Lihat CV saya untuk informasi lebih lengkap mengenai pendidikan,
              pengalaman, kemampuan, organisasi, dan project yang pernah saya
              kerjakan.
            </p>

            {/* Actions */}
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">

              {/* View CV */}
              <a
                href="/cv/AhmadNurHidayatullah-Programmer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[var(--border)]
                  px-5
                  py-3.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                  sm:px-6
                  sm:py-4
                  sm:text-xs
                "
              >
                View CV

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Download CV */}
              <a
                href="/cv/AhmadNurHidayatullah-Programmer.pdf"
                download
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-[var(--accent)]
                  px-5
                  py-3.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[var(--selection-text)]
                  transition-all
                  duration-300
                  hover:brightness-110
                  sm:px-6
                  sm:py-4
                  sm:text-xs
                "
              >
                Download CV

                <ArrowDownToLine
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>

            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 border-t border-[var(--border)] pt-6 sm:mt-20 sm:pt-8 md:mt-24">
          <p className="text-[9px] uppercase tracking-[0.16em] text-[var(--muted-dark)] sm:text-xs sm:tracking-[0.2em]">
            Web Development · Software Development · Full Stack · UI/UX Design
          </p>
        </div>

      </div>
    </section>
  );
};

export default CV;