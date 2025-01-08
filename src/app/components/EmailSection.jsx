"use client";
import Link from "next/link";
import { useState } from "react";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] py-24"
    >
      <div className="container md:px-12 mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Let's Connect
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-300 max-w-md">
              I’m currently open to new opportunities. Whether you have a question, project, or just
              want to say hello, feel free to drop a message. I’ll get back to you as soon as
              possible!
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Github"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-1.8c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.3-1.1.5-1.3-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2.9-.3 1.8-.4 2.8-.4.9 0 1.9.1 2.8.4 2.2-1.5 3.3-1.2 3.3-1.2.7 1.7.3 3 .1 3.3.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.3.3.6.8.6 1.6v2.4c0 .3.2.7.8.5C20.7 21.4 24 17 24 12c0-6.3-5.2-11.5-12-11.5z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M22.23 0H1.77C.79 0 0 .78 0 1.74v20.52C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.74V1.74C24 .78 23.21 0 22.23 0zm-6.15 20.45h-3.69v-5.66c0-1.35-.48-2.27-1.67-2.27-.91 0-1.45.61-1.69 1.2-.09.21-.12.51-.12.8v5.93H5.99s.05-9.63 0-10.63h3.69v1.51c.49-.76 1.36-1.85 3.3-1.85 2.4 0 4.2 1.56 4.2 4.89v6.08zM3.48 7.29c-1.19 0-1.96-.79-1.96-1.77 0-.99.78-1.77 2-1.77s1.96.78 1.96 1.77c0 .98-.78 1.77-2 1.77zM5.13 20.45H1.83v-10.63h3.3v10.63z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="text-white"
                >
                  <path d="M22.68 0H1.32C.6 0 0 .6 0 1.32v21.36C0 23.4.6 24 1.32 24H12V14.68H9.42V11.32H12V8.8c0-2.76 1.68-4.28 4.15-4.28 1.18 0 2.2.08 2.5.12v2.9h-1.7c-1.34 0-1.6.64-1.6 1.57v2.06h3.22l-.42 3.36H15.37V24h7.3c.72 0 1.32-.6 1.32-1.32V1.32C24 .6 23.4 0 22.68 0z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {emailSubmitted ? (
              <p className="text-center text-green-600 font-semibold text-lg">
                Email sent successfully!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="jacob@google.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Just saying hi"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
