import { Helmet } from "react-helmet";
import React, { useState } from "react";
import { projects } from "../data/projectsData";

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
        <meta name="description" content="Browse our digital portfolio to see the range of custom software, dashboards, and responsive websites built by Groww Digitally." />
        <meta name="keywords" content="portfolio, projects, web development, UI/UX, React, Tailwind, software solutions" />
      </Helmet>

      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" data-aos="fade-up">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="100">
            Discover the innovative solutions we've delivered for startups, businesses, and individuals.
          </p>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title" data-aos="fade-up">Recent Projects</h2>
            <p className="subheading" data-aos="fade-up" data-aos-delay="100">
              A collection of some of our favorite work in web development and design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedProjects.map((project, index) => (
              <div key={index} className="card" data-aos="fade-up" data-aos-delay={index * 100}>
                <img
                  src={project.image || "https://via.placeholder.com/300x200?text=Project+Image"}
                  alt={project.title}
                  className="rounded-md w-full h-48 object-cover mb-4"
                  onError={(e: any) => (e.target.src = "https://via.placeholder.com/300x200?text=Project+Image")}
                />
                <h3 className="text-xl font-semibold text-dark">{ project.title}</h3>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary inline-block">
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
                  currentPage === i + 1 ? "bg-primary text-white" : "bg-white text-dark border-gray-300 hover:bg-gray-100"
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
