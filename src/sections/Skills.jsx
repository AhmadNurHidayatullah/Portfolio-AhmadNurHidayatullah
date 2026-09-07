import { ArrowUpRight } from "lucide-react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
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

        <div
          className="
            mb-10
            flex
            items-center
            gap-3

            sm:mb-12
            sm:gap-4
          "
        >
          <span
            className="
              text-[10px]
              font-semibold
              tracking-[0.25em]
              text-[var(--accent)]

              sm:text-xs
              sm:tracking-[0.3em]
            "
          >
            05
          </span>

          <div className="h-px w-10 bg-[var(--accent)] sm:w-16" />

          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-[var(--muted)]

              sm:text-xs
              sm:tracking-[0.25em]
            "
          >
            Skills
          </span>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            grid
            min-w-0
            gap-6

            lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)]
            lg:gap-10
          "
        >
          <h2
            className="
              max-w-3xl
              text-[clamp(2.5rem,8vw,3.75rem)]
              font-semibold
              leading-[0.92]
              tracking-[-0.05em]

              sm:text-[clamp(3.5rem,7vw,4.5rem)]

              md:text-[clamp(4rem,6vw,5rem)]

              lg:text-[clamp(4rem,5vw,5.5rem)]
            "
          >
            Tools,
            <br />
            skills &
            <br />
            <span className="text-[var(--accent)]">curiosity.</span>
          </h2>

          <div className="flex items-end">
            <p
              className="
                max-w-md
                text-sm
                leading-6
                text-[var(--muted)]

                sm:text-base
                sm:leading-7
              "
            >
              Teknologi dan kemampuan yang saya gunakan untuk merancang,
              membangun, menguji, dan mengembangkan berbagai solusi digital.
            </p>
          </div>
        </div>

        {/* =====================================================
            SKILLS LIST
        ===================================================== */}

        <div
          className="
            mt-12
            border-t
            border-[var(--border)]

            sm:mt-14
          "
        >
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="
                grid
                gap-4
                border-b
                border-[var(--border)]
                py-5

                sm:py-6

                md:grid-cols-[220px_minmax(0,1fr)]
                md:gap-6
                md:py-7
              "
            >
              {/* Category */}
              <div className="flex items-start gap-3">
                <span
                  className="
                    pt-0.5
                    text-[10px]
                    font-medium
                    text-[var(--muted-dark)]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--foreground)]

                    sm:text-sm
                  "
                >
                  {skill.category}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      px-3
                      py-1.5
                      text-xs
                      text-[var(--muted)]
                      transition-all
                      duration-200

                      hover:border-[var(--accent)]
                      hover:bg-[var(--accent)]
                      hover:text-[var(--selection-text)]

                      sm:px-3.5
                      sm:py-2
                      sm:text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div
          className="
            mt-8
            flex
            flex-col
            justify-between
            gap-4

            sm:mt-9
            sm:flex-row
            sm:items-center
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-[var(--muted-dark)]

              sm:text-xs
            "
          >
            Always learning. Always building.
          </p>

          <a
            href="#projects"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[var(--foreground)]
              transition-colors

              hover:text-[var(--accent)]
            "
          >
            See My Work

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
                group-hover:text-[var(--selection-text)]
              "
            >
              <ArrowUpRight size={15} />
            </span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;