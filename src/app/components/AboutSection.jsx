"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          "Off-Page SEO",
          "On-Page SEO",
          "Organic Search",
          "Yoast SEO Plugin",
          "Keyword Research",
          "Keyword Analysis",
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-purple-200 to-indigo-200 text-gray-800 font-semibold rounded-full py-2 px-4 text-center shadow hover:shadow-lg transition-all"
          >
            {skill}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-8">
        {[
          {
            institution: "National University Of Bangladesh",
            degree: "Master's degree, ICT",
          },
          {
            institution: "Carmichael College Rangpur",
            degree: "Master of Arts - MA, ICT",
          },
          {
            institution: "National University Bangladesh",
            degree: "Bachelor's Degree, Islamic History & Culture",
          },
          {
            institution: "Shathibari Degree College, Rangpur",
            degree: "Higher Secondary Certificate - HSC",
          },
          {
            institution: "Panbazar D.M High School",
            degree: "Secondary School Certificate - SSC",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
              {index + 1}
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-800">{edu.institution}</p>
              <p className="text-sm text-gray-600">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="h-screen bg-gradient-to-r from-purple-100 to-indigo-100 py-16" id="about">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center  max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about-img"
          className="rounded-xl shadow-lg"
        />
        <div className="text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm Al-Hasan Sarkar, a Professional SEO Expert From Bangladesh. I provide both On-Page
            and Off-Page SEO services with a special focus on Guest Posting, Link Building, Content
            & Social Media Marketing. I can be your "SEO Guy" to ensure instant rankings on Google
            and quick recovery from a penalty like Panda, Penguin, Hummingbird, and other issues.
            You believe in results, i.e. better engagement, more traffic, and higher conversion. I'm
            ready to take the challenge.
          </p>
          <div className="flex space-x-4 mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
          </div>
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
