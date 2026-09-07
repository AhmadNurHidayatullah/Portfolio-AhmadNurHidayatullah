import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "Sistem Pengaduan Masyarakat",
    number: "01",
    category: "Web Application",
    title: "Sistem Pengaduan Masyarakat",
    subtitle: "Sistem Pengaduan Masyarakat Berbasis Web",
    description:
      "Sistem informasi pengaduan masyarakat yang dikembangkan untuk membantu masyarakat menyampaikan laporan serta membantu pengelola dalam memantau, mengelola, dan menindaklanjuti pengaduan secara terstruktur.",
    tech: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/project/aduan/admin.png",
    featured: true,
  },
  {
    id: "padukuhan-jalan",
    number: "02",
    category: "Web Development",
    title: "Padukuhan Jalan Website",
    subtitle: "Website Informasi Padukuhan",
    description:
      "Website informasi padukuhan yang menyediakan informasi profil, kegiatan, berita, pendidikan, struktur organisasi, dan berbagai informasi publik.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    image: "/project/sistem_informasi/landingpage.jpeg",
  },
  {
    id: "umkm-diy",
    number: "03",
    category: "Web Development",
    title: "UMKM DIY",
    subtitle: "Website Pendataan dan Informasi UMKM",
    description:
      "Website UMKM DIY yang saya rancang dan bangun dari awal sebagai project magang untuk mempermudah proses pendataan dan pengelolaan informasi UMKM.",
    tech: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/project/magang/PWM.jpeg",
  },
  {
    id: "perpustakaan-apollo",
    number: "04",
    category: "Web Application",
    title: "Perpustakaan Apollo",
    subtitle: "Library Management Web Application",
    description:
      "Aplikasi web untuk membantu proses pengelolaan data perpustakaan dengan sistem basis data terintegrasi.",
    tech: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    image: "/project/perpus/perpus.jpeg",
  },
];

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
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
            SECTION HEADER
        ===================================================== */}

        <div
          className="
            mb-10
            flex
            items-center
            gap-3

            sm:mb-12
            sm:gap-4

            md:mb-14
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
            04
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
            Selected Work
          </span>
        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div
          className="
            mb-12
            grid
            min-w-0
            gap-7

            sm:mb-14
            sm:gap-8

            lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)]
            lg:gap-14
          "
        >
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
            Things
            <br />
            I've <span className="text-[var(--accent)]">built.</span>
          </h2>
        </div>

        {/* =====================================================
            FEATURED PROJECT
        ===================================================== */}

        {featuredProject && (
          <article className="border-t border-[var(--border)]">
            <div
              className="
                grid
                gap-8
                py-8

                sm:gap-10
                sm:py-10

                lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]
                lg:items-center
                lg:gap-12
                lg:py-10

                xl:gap-16
              "
            >

              {/* =================================================
                  FEATURED INFO
              ================================================= */}

              <div className="order-2 min-w-0 lg:order-1">

                {/* Number + Category */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span
                    className="
                      text-[10px]
                      font-medium
                      tracking-[0.2em]
                      text-[var(--muted-dark)]
                    "
                  >
                    {featuredProject.number}
                  </span>

                  <div className="h-px w-6 bg-[var(--border)]" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[var(--accent)]

                      sm:text-[10px]
                    "
                  >
                    {featuredProject.category}
                  </span>

                  <span
                    className="
                      border
                      border-[var(--border)]
                      bg-[var(--card)]
                      px-2
                      py-1
                      text-[8px]
                      uppercase
                      tracking-[0.12em]
                      text-[var(--muted)]
                    "
                  >
                    Featured
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="
                    max-w-xl
                    text-3xl
                    font-semibold
                    leading-[0.98]
                    tracking-[-0.04em]
                    text-[var(--foreground)]
                    transition-colors
                    duration-300

                    hover:text-[var(--accent)]

                    sm:text-4xl
                    md:text-5xl
                  "
                >
                  {featuredProject.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="
                    mt-2
                    text-xs
                    text-[var(--muted)]
                    sm:text-sm
                  "
                >
                  {featuredProject.subtitle}
                </p>

                {/* Description */}
                <p
                  className="
                    mt-5
                    max-w-xl
                    text-[13px]
                    leading-6
                    text-[var(--muted)]

                    sm:text-sm
                    sm:leading-7
                  "
                >
                  {featuredProject.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-[10px]
                        text-[var(--muted-dark)]

                        sm:text-[11px]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/projects/${featuredProject.id}`}
                  className="
                    group/link
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-[var(--foreground)]
                    transition-colors

                    hover:text-[var(--accent)]

                    sm:text-xs
                    sm:tracking-[0.15em]
                  "
                >
                  <span className="border-b border-[var(--accent)] pb-1">
                    View Case Study
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--accent)]
                      text-[var(--selection-text)]
                      transition-all
                      duration-300

                      group-hover/link:translate-x-1
                    "
                  >
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </div>

              {/* =================================================
                  FEATURED IMAGE
              ================================================= */}

              <Link
                to={`/projects/${featuredProject.id}`}
                className="
                  group
                  order-1
                  block
                  overflow-hidden
                  border
                  border-[var(--border)]
                  bg-[var(--card)]
                  transition-colors
                  duration-300

                  lg:order-2
                "
              >
                <div className="relative aspect-[16/10] overflow-hidden">

                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="
                      h-full
                      w-full
                      object-contain
                      p-3
                      transition-transform
                      duration-700
                      ease-out

                      group-hover:scale-[1.025]

                      sm:p-5
                    "
                  />

                  {/* Image Overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[var(--background)]/50
                      via-transparent
                      to-transparent
                      opacity-60
                    "
                  />

                  {/* Open Indicator */}
                  <div
                    className="
                      absolute
                      bottom-4
                      right-4
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--accent)]
                      text-[var(--selection-text)]
                      opacity-0
                      transition-all
                      duration-300

                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={16} />
                  </div>

                  {/* Project Label */}
                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      border
                      border-[var(--border)]
                      bg-[var(--background)]/80
                      px-3
                      py-1.5
                      backdrop-blur-sm
                    "
                  >
                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.16em]
                        text-[var(--foreground)]
                      "
                    >
                      Featured Project
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </article>
        )}

        {/* =====================================================
            OTHER PROJECTS
        ===================================================== */}

        <div className="border-t border-[var(--border)]">
          {otherProjects.map((project) => (
            <article
              key={project.number}
              className="
                group
                border-b
                border-[var(--border)]
                py-6
                transition-colors
                duration-300

                hover:bg-[var(--card-hover)]

                sm:py-7
                md:py-8
              "
            >
              <div
                className="
                  grid
                  gap-5
                  min-w-0

                  md:grid-cols-[40px_minmax(0,1fr)_180px]
                  md:items-center
                  md:gap-8

                  lg:grid-cols-[50px_minmax(0,1fr)_220px]
                  lg:gap-10
                "
              >

                {/* =================================================
                    NUMBER
                ================================================= */}

                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-[0.2em]
                    text-[var(--muted-dark)]

                    sm:text-xs
                  "
                >
                  {project.number}
                </span>

                {/* =================================================
                    PROJECT INFO
                ================================================= */}

                <div className="min-w-0">

                  <div className="mb-2 flex flex-wrap items-center gap-2.5">
                    <span
                      className="
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[var(--accent)]
                      "
                    >
                      {project.category}
                    </span>
                  </div>

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-block max-w-full"
                  >
                    <h3
                      className="
                        text-xl
                        font-semibold
                        tracking-[-0.03em]
                        text-[var(--foreground)]
                        transition-colors
                        duration-300

                        group-hover:text-[var(--accent)]

                        sm:text-2xl
                        md:text-3xl
                      "
                    >
                      {project.title}
                    </h3>
                  </Link>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-[var(--muted)]
                      sm:text-sm
                    "
                  >
                    {project.subtitle}
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-2xl
                      text-[12px]
                      leading-5
                      text-[var(--muted)]

                      sm:text-[13px]
                      sm:leading-6
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          text-[10px]
                          text-[var(--muted-dark)]

                          sm:text-[11px]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* =================================================
                    THUMBNAIL
                ================================================= */}

                <Link
                  to={`/projects/${project.id}`}
                  className="
                    group/image
                    relative
                    order-last
                    hidden
                    overflow-hidden
                    border
                    border-[var(--border)]
                    bg-[var(--card)]

                    md:block
                  "
                >
                  <div className="aspect-[16/9] overflow-hidden">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-contain
                        p-2
                        opacity-80
                        transition-all
                        duration-500

                        group-hover:scale-[1.04]
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* Thumbnail Arrow */}
                  <div
                    className="
                      absolute
                      right-2
                      top-2
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--accent)]
                      text-[var(--selection-text)]
                      opacity-0
                      transition-all
                      duration-300

                      group-hover:opacity-100
                    "
                  >
                    <ArrowUpRight size={13} />
                  </div>
                </Link>

                {/* =================================================
                    MOBILE CTA
                ================================================= */}

                <Link
                  to={`/projects/${project.id}`}
                  className="
                    group/link
                    flex
                    w-fit
                    items-center
                    gap-2
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[var(--foreground)]
                    transition-colors

                    hover:text-[var(--accent)]

                    md:hidden
                  "
                >
                  <span className="border-b border-[var(--accent)] pb-1">
                    View Case Study
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300

                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    "
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-9 flex items-center justify-between sm:mt-10">
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.16em]
              text-[var(--muted)]
              sm:text-xs
              sm:tracking-[0.2em]
            "
          >
            More projects coming soon
          </span>

          <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] sm:h-2 sm:w-2" />
        </div>

      </div>
    </section>
  );
};

export default Projects;