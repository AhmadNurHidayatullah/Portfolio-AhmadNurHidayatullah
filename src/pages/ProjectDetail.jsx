import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  GitBranch,
} from "lucide-react";

import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  // Project tidak ditemukan
  if (!project) {
    return (
      <main className="min-h-screen bg-[#0b0b0b] px-5 py-24 text-[#f5f3ed]">
        <div className="container-custom">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5b800]">
            404
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
            Project not found.
          </h1>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-[#a1a1a1] transition-colors hover:text-[#f5b800]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#f5f3ed]">

      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div className="container-custom pt-7 md:pt-9">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[#777] transition-colors hover:text-[#f5b800]"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Portfolio
        </Link>
      </div>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="container-custom pb-16 pt-14 md:pb-20 md:pt-20">

        {/* Meta */}
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
          <span className="font-semibold text-[#f5b800]">
            {project.category}
          </span>

          <span className="h-1 w-1 rounded-full bg-[#555]" />

          <span className="text-[#666]">
            {project.year}
          </span>
        </div>


        {/* Title + Description */}
        <div className="mt-7 grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-[7rem]">
            {project.title}
          </h1>

          <p className="max-w-md text-sm leading-6 text-[#999] md:text-base md:leading-7">
            {project.description}
          </p>

        </div>


        {/* Hero Image */}
        <div className="relative mt-12 overflow-hidden border border-[#242424] bg-[#121212] md:mt-14">

          <div className="flex aspect-video items-center justify-center">

            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-contain p-3 md:p-6"
            />

          </div>

          <div className="absolute bottom-4 left-4 border border-white/10 bg-[#0b0b0b]/90 px-3 py-2 backdrop-blur-sm">
            <span className="text-[9px] uppercase tracking-[0.18em] text-[#888]">
              Project / {project.number}
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ====================================================== */}
      <section className="border-y border-[#242424] bg-[#111111]">
        <div className="container-custom py-16 md:py-20">

          <div className="grid gap-8 md:grid-cols-[180px_1fr]">

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5b800]">
              01 / Overview
            </span>

            <p className="max-w-4xl text-xl font-medium leading-[1.4] tracking-[-0.025em] text-[#e8e6df] md:text-3xl">
              {project.overview}
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROBLEM + SOLUTION
      ====================================================== */}
      <section className="bg-[#f5f3ed] text-[#0b0b0b]">

        <div className="container-custom py-16 md:py-20">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Problem */}
            <div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c89500]">
                02 / Problem
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                The challenge
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#66635d]">
                {project.problem}
              </p>

            </div>


            {/* Solution */}
            <div className="border-t border-[#d5d2ca] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c89500]">
                03 / Solution
              </span>

              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                The approach
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#66635d]">
                {project.solution}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROLE + TECHNOLOGIES
      ====================================================== */}
      <section className="bg-[#0b0b0b]">

        <div className="container-custom py-16 md:py-20">

          <div className="grid gap-14 md:grid-cols-2">

            {/* ROLE */}
            <div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5b800]">
                04 / My Role
              </span>

              <div className="mt-6 border-t border-[#242424]">

                {project.role.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-[#242424] py-4"
                  >

                    <span className="text-[9px] text-[#555]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-[#d8d6d0]">
                      {item}
                    </span>

                  </div>
                ))}

              </div>

            </div>


            {/* TECHNOLOGIES */}
            <div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5b800]">
                05 / Technologies
              </span>

              <div className="mt-6 flex flex-wrap gap-2">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#292929] px-3 py-2 text-xs text-[#aaa]"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section className="bg-[#111111]">

        <div className="container-custom py-16 md:py-20">

          <div className="grid gap-8 md:grid-cols-[180px_1fr]">

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5b800]">
              06 / Features
            </span>

            <div className="border-t border-[#292929]">

              {project.features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-5 border-b border-[#292929] py-4"
                >

                  <span className="text-[9px] text-[#555]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm text-[#ddd]">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHALLENGE + RESULT
      ====================================================== */}
      <section className="bg-[#f5f3ed] text-[#0b0b0b]">

        <div className="container-custom py-16 md:py-20">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Challenge */}
            <div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c89500]">
                07 / Challenges
              </span>

              <p className="mt-5 text-base leading-7 text-[#66635d]">
                {project.challenges}
              </p>

            </div>


            {/* Result */}
            <div className="border-t border-[#d5d2ca] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c89500]">
                08 / Result
              </span>

              <p className="mt-5 text-base leading-7 text-[#66635d]">
                {project.result}
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SCREENSHOTS
      ====================================================== */}
      {project.screenshots?.length > 0 && (
        <section className="bg-[#0b0b0b]">

          <div className="container-custom py-16 md:py-20">

            <div className="mb-8 flex items-end justify-between">

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f5b800]">
                09 / Screenshots
              </span>

              <span className="text-[10px] uppercase tracking-[0.15em] text-[#555]">
                {project.screenshots.length} Views
              </span>

            </div>


            <div className="grid gap-4 md:grid-cols-2">

              {project.screenshots.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden border border-[#242424] bg-[#121212] ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >

                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="h-auto w-full object-contain"
                  />

                </div>
              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          PROJECT LINKS
      ====================================================== */}
      <section className="border-t border-[#292929] bg-[#f5b800] text-[#0b0b0b]">

        <div className="container-custom py-14 md:py-16">

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

            <div>

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Explore Project
              </span>

              <h2 className="mt-3 text-4xl font-semibold leading-none tracking-[-0.05em] md:text-5xl">
                Want to see more?
              </h2>

            </div>


            <div className="flex flex-wrap gap-2">

              {project.liveDemo && (
  <a
    href={project.liveDemo}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center gap-3 bg-[#f5f3ed] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0b0b0b] hover:bg-white transition-transform duration-200 hover:-translate-y-0.5"
  >
    Live Demo
    <ArrowUpRight
      size={15}
      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    />
  </a>
)}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 border border-[#0b0b0b] px-5 py-3.5 text-[10px] font-semibold uppercase tracking-[0.15em]"
                >
                  GitHub
                  <GitBranch size={16} />
                </a>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="bg-[#0b0b0b]">

        <div className="container-custom flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">

          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#666] transition-colors hover:text-[#f5f3ed]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to Portfolio
          </Link>

          <span className="text-[9px] uppercase tracking-[0.16em] text-[#444]">
            {project.title}
          </span>

        </div>

      </footer>

    </main>
  );
};

export default ProjectDetail;