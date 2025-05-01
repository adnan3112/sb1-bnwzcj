import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { projects } from "../data/projectsData";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const itemsPerPage = 6;

const Portfolio: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Portfolio | Groww Digitally</title>
        <meta
          name="description"
          content="Browse our digital portfolio to see the range of custom software, dashboards, and responsive websites built by Groww Digitally."
        />
        <meta
          name="keywords"
          content="portfolio, projects, web development, UI/UX, React, Tailwind, software solutions"
        />
      </Helmet>

      <section
        className="relative bg-fixed bg-center pt-40 pb-40"
        style={{
          backgroundImage: "url('/assets/icons/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dark bg-opacity-70 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-light text-center px-4 pt-20 pb-20">
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            data-aos="fade-up"
          >
            Our Portfolio
          </h1>
          <p
            className="text-lg md:text-xl max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Discover the innovative solutions we've delivered for startups,
            businesses, and individuals.
          </p>
          <p
            className="text-base md:text-lg max-w-4xl mt-6 text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Each project we create is a blend of strategic design, modern
            technologies, and user-centered thinking. Whether it's a full-stack
            web app, a high-converting landing page, or a dynamic dashboard, we
            aim to bring value through creativity and performance. Our team
            works closely with clients to ensure the end result not only looks
            great but also delivers measurable impact.
          </p>
          <p
            className="text-base md:text-lg max-w-4xl mt-4 text-gray-200 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            This portfolio reflects our commitment to excellence, attention to
            detail, and passion for building meaningful digital experiences. We
            don't just build websites—we craft digital identities that resonate
            with your audience.
          </p>
        </div>
      </section>

      {/* Counter Section */}
<section className="bg-white text-dark py-24">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 text-center">
    {[
      { end: 289, label: "days from start", icon: "📅", delay: 0 },
      { end: 12, label: "team members", icon: "👥", delay: 100 },
      { end: 47, label: "successful projects", icon: "💼", delay: 200 },
      { end: 35, label: "happy clients", icon: "👍", delay: 300 },
    ].map((item, index) => {
      const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
      });

      return (
        <div
          key={index}
          ref={ref}
          data-aos="zoom-in"
          data-aos-delay={item.delay}
          className="flex flex-col items-center justify-center"
        >
          <div className="w-28 h-28 flex items-center justify-center rounded-full bg-[#ffe5e5] border-2 border-[#ff5c5c] mb-4">
            <span className="text-4xl">{item.icon}</span>
          </div>
          <h3 className="text-4xl font-bold text-[#ff5c5c]">
            {inView ? <CountUp end={item.end} duration={2.5} /> : "0"}
          </h3>
          <p className="mt-2 text-lg font-medium text-gray-700">
            {item.label}
          </p>
        </div>
      );
    })}
  </div>
</section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title" data-aos="fade-up">
              Recent Projects
            </h2>
            <p className="subheading" data-aos="fade-up" data-aos-delay="100">
              A collection of some of our favorite work in web development and
              design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedProjects.map((project, index) => (
              <div
                key={index}
                className="card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={
                    project.image ||
                    "https://via.placeholder.com/300x200?text=Project+Image"
                  }
                  alt={project.title}
                  className="rounded-md w-full h-48 object-cover mb-4"
                  onError={(e: any) =>
                    (e.target.src =
                      "https://via.placeholder.com/300x200?text=Project+Image")
                  }
                />
                <h3 className="text-xl font-semibold text-dark">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-block"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2 flex-wrap">
            <button
              className="w-10 h-10 rounded-full border text-sm font-medium bg-white text-dark border-gray-300 hover:bg-gray-100"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              «
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`w-10 h-10 rounded-full border text-sm font-medium ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-white text-dark border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              className="w-10 h-10 rounded-full border text-sm font-medium bg-white text-dark border-gray-300 hover:bg-gray-100"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
