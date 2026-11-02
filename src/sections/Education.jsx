import { ArrowUpRight, ExternalLink } from "lucide-react";
import { certifications } from "../data/certifications";

const Education = () => {
  return (
    <section
      id="education"
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
            SECTION LABEL
        ===================================================== */}

        <div className="mb-10 flex items-center gap-3 sm:mb-12 sm:gap-4 md:mb-14">
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
            03
          </span>

          <div className="h-px w-10 bg-[var(--accent)] sm:w-14" />

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
            Education
          </span>
        </div>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] lg:gap-14">
          <h2
            className="
              max-w-3xl
              text-[clamp(2.5rem,7vw,3.75rem)]
              font-semibold
              leading-[0.95]
              tracking-[-0.05em]

              sm:text-[clamp(3rem,6vw,4.25rem)]

              md:text-[clamp(3.5rem,5.5vw,4.75rem)]

              lg:text-[clamp(4rem,5vw,5rem)]
            "
          >
            Education
            <br />
            &
            <br />
            <span className="text-[var(--accent)]">learning.</span>
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
              Latar belakang pendidikan dan proses belajar yang terus saya
              kembangkan untuk memperkuat kemampuan di bidang teknologi.
            </p>
          </div>
        </div>

        {/* =====================================================
            EDUCATION CONTENT
        ===================================================== */}

        <div
          className="
            mt-14
            border-t
            border-[var(--border)]
            sm:mt-16
            md:mt-18
          "
        >

          {/* =================================================
              UNIVERSITY
          ================================================= */}

          <div
            className="
              grid
              gap-6
              border-b
              border-[var(--border)]
              py-7

              sm:gap-8
              sm:py-8

              md:grid-cols-[220px_minmax(0,1fr)]
              md:py-9

              lg:grid-cols-[240px_minmax(0,1fr)]
            "
          >
            {/* Year */}
            <div className="flex items-start gap-4">
              <span className="text-[10px] font-medium text-[var(--muted-dark)]">
                01
              </span>

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[var(--muted)]
                  sm:text-xs
                  sm:tracking-[0.15em]
                "
              >
                2022 — 2026
              </span>
            </div>

            {/* University */}
            <div className="min-w-0">
              <h3
                className="
                  text-xl
                  font-semibold
                  tracking-tight
                  text-[var(--foreground)]
                  sm:text-2xl
                  md:text-3xl
                "
              >
                Universitas Muhammadiyah Yogyakarta
              </h3>

              <p
                className="
                  mt-1.5
                  text-xs
                  text-[var(--muted)]
                  sm:mt-2
                  sm:text-sm
                "
              >
                S1 Teknologi Informasi · IPK 3,74/4,00
              </p>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  leading-6
                  text-[var(--muted)]
                  sm:mt-5
                  sm:leading-7
                "
              >
                Mempelajari dan penerapan teknologi informasi, meliputi pemrograman, 
                pengembangan perangkat lunak dan web, pengelolaan basis data, analisis 
                sistem, serta perancangan antarmuka dan pengalaman pengguna. Mengembangkan 
                berbagai proyek aplikasi dan website secara individu maupun tim sebagai 
                penerapan kemampuan teknis dan pemecahan masalah.
              </p>

              {/* Relevant Areas */}
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {[
                  "Programming",
                  "Software Development",
                  "Web Development",
                  "Database",
                  "UI/UX",
                  "System Analysis",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      px-3
                      py-1.5
                      text-[10px]
                      text-[var(--muted)]
                      transition-colors
                      duration-200

                      hover:border-[var(--accent)]
                      hover:text-[var(--accent)]

                      sm:px-3
                      sm:py-2
                      sm:text-xs
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              CERTIFICATIONS
          ================================================= */}

          <div className="border-b border-[var(--border)]">
            <div
              className="
                grid
                gap-6
                py-7

                sm:gap-8
                sm:py-8

                md:grid-cols-[220px_minmax(0,1fr)]
                md:py-9

                lg:grid-cols-[240px_minmax(0,1fr)]
              "
            >
              {/* Label */}
              <div className="flex items-start gap-4">
                <span className="text-[10px] font-medium text-[var(--muted-dark)]">
                  02
                </span>

                <div>
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[var(--muted)]
                      sm:text-xs
                      sm:tracking-[0.15em]
                    "
                  >
                    Certifications
                  </span>

                  <p
                    className="
                      mt-2
                      max-w-[180px]
                      text-[10px]
                      leading-5
                      text-[var(--muted-dark)]
                      sm:mt-3
                      sm:text-xs
                    "
                  >
                    Selected courses and credentials from continuous learning.
                  </p>
                </div>
              </div>

              {/* Certification List */}
              <div className="min-w-0">
                {certifications.map((certificate, index) => (
                  <div
                    key={`${certificate.name}-${index}`}
                    className="
                      group
                      flex
                      flex-col
                      gap-3
                      border-b
                      border-[var(--border)]
                      py-5

                      first:pt-0
                      last:border-b-0
                      last:pb-0

                      sm:gap-4
                      sm:py-6

                      md:flex-row
                      md:items-center
                      md:justify-between
                    "
                  >
                    <div className="flex min-w-0 gap-4">
                      <span
                        className="
                          shrink-0
                          pt-1
                          text-[10px]
                          font-medium
                          text-[var(--muted-dark)]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h4
                          className="
                            text-sm
                            font-semibold
                            leading-5
                            text-[var(--foreground)]
                            sm:text-base
                            md:text-lg
                          "
                        >
                          {certificate.name}
                        </h4>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-[var(--muted)]
                            sm:text-sm
                          "
                        >
                          {certificate.issuer}

                          <span className="mx-2 text-[var(--muted-dark)]">
                            ·
                          </span>

                          {certificate.year}
                        </p>
                      </div>
                    </div>

                    {/* Credential Link */}
                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group/link
                          flex
                          w-fit
                          shrink-0
                          items-center
                          gap-2
                          pl-8
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.1em]
                          text-[var(--foreground)]
                          transition-colors
                          duration-200

                          hover:text-[var(--accent)]

                          sm:text-xs
                          sm:tracking-[0.12em]

                          md:pl-0
                        "
                      >
                        View Credential

                        <ExternalLink
                          size={13}
                          className="
                            transition-transform
                            duration-200
                            group-hover/link:translate-x-0.5
                            group-hover/link:-translate-y-0.5
                          "
                        />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div
          className="
            mt-9
            flex
            flex-col
            justify-between
            gap-4

            sm:mt-10
            sm:flex-row
            sm:items-center
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-[var(--muted-dark)]
              sm:text-xs
              sm:tracking-[0.18em]
            "
          >
            Learning never stops.
          </p>

          <a
            href="#skills"
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[var(--foreground)]
              transition-colors

              hover:text-[var(--accent)]

              sm:text-xs
              sm:tracking-[0.15em]
            "
          >
            Explore My Skills

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

export default Education;
