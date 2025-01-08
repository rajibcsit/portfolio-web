"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const seoProjects = [
  {
    id: 1,
    title: "E-commerce SEO Optimization",
    description:
      "Boosted organic traffic by 120% within 6 months through technical SEO, keyword research, and link-building strategies.",
    image: "/images/projects/seo-analytics.jpg",
    tools: ["Google Analytics", "SEMrush", "Ahrefs"],
    result: "+120% Organic Traffic",
    caseStudyLink: "/case-studies/ecommerce-seo",
  },
  {
    id: 2,
    title: "Local Business SEO",
    description:
      "Achieved top 3 local map pack rankings for a small business using local SEO strategies, citation building, and GMB optimization.",
    image: "/images/projects/local-business.jpg",
    tools: ["Google My Business", "BrightLocal", "Ahrefs"],
    result: "Top 3 in Local Pack",
    caseStudyLink: "/case-studies/local-seo",
  },
  {
    id: 3,
    title: "Content Marketing Campaign",
    description:
      "Increased blog traffic by 200% by crafting high-ranking content and using targeted keywords to attract a specific audience.",
    image: "/images/projects/flat-hand.jpg",
    tools: ["SurferSEO", "Google Trends", "WordPress"],
    result: "+200% Blog Traffic",
    caseStudyLink: "/case-studies/content-marketing",
  },
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-extrabold text-gray-800 mb-12">
          My SEO & Marketing Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoProjects.map((project) => (
            <motion.div
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
              className={`relative rounded-lg shadow-lg overflow-hidden transform transition duration-300 ${
                hoveredProject === project.id ? "scale-105 shadow-xl" : ""
              }`}
            >
              <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-700">Tools Used:</p>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {project.tools.map((tool, index) => (
                      <li
                        key={index}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-lg font-bold text-green-600">{project.result}</p>
                <a
                  href={project.caseStudyLink}
                  className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                  View Case Study
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
