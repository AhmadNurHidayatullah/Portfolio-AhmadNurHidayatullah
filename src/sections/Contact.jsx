import {
  ArrowUpRight,
  Mail,
  GitBranch,
  Globe,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[var(--background)]
        py-20
        text-[var(--foreground)]
        transition-colors
        duration-300
        sm:py-24
        md:py-28
        lg:py-36
      "
    >
      <div className="container-custom">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-[var(--accent)]">
            07
          </span>

          <div className="h-px w-10 bg-[var(--accent)] sm:w-16" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--muted)] sm:text-xs">
            Contact
          </span>
        </div>

        {/* Main */}
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] lg:gap-14">

          {/* Heading */}
          <div className="min-w-0">
            <h2
              className="
                max-w-5xl
                text-[clamp(3rem,13vw,4.5rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-[clamp(4rem,10vw,6rem)]
                md:text-7xl
                lg:text-8xl
                lg:leading-[0.88]
              "
            >
              Let's build
              <br />
              something
              <br />
              <span className="text-[var(--accent)]">
                meaningful.
              </span>
            </h2>
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-col justify-end">

            {/* Description */}
            <p className="max-w-md text-sm leading-6 text-[var(--muted)] sm:text-base sm:leading-7">
              Saya terbuka untuk kesempatan kerja, kolaborasi, maupun project
              di bidang teknologi. Jangan ragu untuk menghubungi saya.
            </p>

            {/* Availability */}
            <div className="mt-7 border-y border-[var(--border)] py-5 sm:mt-8 sm:py-6">
              <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)] sm:text-[10px]">
                Open to opportunities
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Software Development",
                  "Full Stack Development",
                  "UI/UX Design",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      px-3
                      py-2
                      text-[11px]
                      text-[var(--muted)]
                      transition-all
                      duration-200
                      hover:border-[var(--accent)]
                      hover:bg-[var(--accent)]
                      hover:text-[var(--selection-text)]
                      sm:text-xs
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Email CTA */}
            <a
              href="mailto:emailkamu@gmail.com"
              className="
                group
                mt-7
                flex
                items-center
                justify-between
                gap-4
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-4
                transition-all
                duration-300
                hover:border-[var(--accent)]
                sm:mt-8
                sm:p-5
              "
            >
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    bg-[var(--accent)]
                    text-[var(--selection-text)]
                    sm:h-11
                    sm:w-11
                  "
                >
                  <Mail size={18} />
                </span>

                <div className="min-w-0">
                  <p className="text-[9px] uppercase tracking-[0.15em] text-[var(--muted)] sm:text-[10px]">
                    Email me
                  </p>

                  <p className="mt-1 truncate text-xs font-medium text-[var(--foreground)] sm:text-sm">
                    ahmadnurhidayatulla@gmail.com
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  sm:size-[19px]
                "
              />
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 border-t border-[var(--border)] pt-6 sm:mt-20 sm:pt-8 md:mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">

            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] sm:text-xs sm:tracking-[0.2em]">
              Find me online
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-4 sm:gap-6">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmad-nurhidayatullah-853502341"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                  transition-colors
                  hover:text-[var(--accent)]
                  sm:text-xs
                "
              >
                <Globe size={15} />
                LinkedIn

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AhmadNurHidayatullah"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                  transition-colors
                  hover:text-[var(--accent)]
                  sm:text-xs
                "
              >
                <GitBranch size={15} />
                GitHub

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ahmadnurop"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[var(--muted)]
                  transition-colors
                  hover:text-[var(--accent)]
                  sm:text-xs
                "
              >
                <Globe size={15} />
                Instagram

                <ArrowUpRight
                  size={13}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;