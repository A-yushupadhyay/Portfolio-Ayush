import Image from 'next/image'
import Link from 'next/link';
import React from 'react';

import { useState } from 'react';


export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/manjoyrp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      form.reset();
      setSubmitted(true);
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-indigo-700 mb-2">Ayush Upadhyay</h1>
      <h2 className="text-lg sm:text-xl text-gray-700 mb-4">Full-Stack Web Developer | MERN Stack | AI Integration</h2>
      <p className="text-center max-w-xl text-gray-600 mb-6">
        I am a passionate developer with a focus on real-world projects, AI-integrated systems, and clean, modular architecture. 
        I love building impactful applications like DocOnTime and SmartResumeAI.
      </p>
      <div className="flex gap-4">
        <a 
          href="/Final_Ayush_Upadhyay_resume_software-devloper09.pdf" 
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"

          download
        >
          View Resume
        </a>

      </div>
      <div className="mt-16 max-w-5xl w-full px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Project 1 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg
        ">
          <h3 className="text-xl font-bold text-indigo-600">DocOnTime</h3>
          <p className="text-sm text-gray-700 mt-2">
            Smart Healthcare Appointment System with AI-based Symptom Checker, Razorpay integration, JWT auth, and full-stack backend using Node.js & MongoDB.
          </p>
          <div className="mt-2 flex gap-3 text-sm">
            <a href="https://github.com/A-yushupadhyay/dOt" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">GitHub</a>
            <a href="https://dot-xgr9.onrender.com/" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg
">
          <h3 className="text-xl font-bold text-indigo-600">SmartResumeAI</h3>
          <p className="text-sm text-gray-700 mt-2">
            AI-powered resume analyzer that checks ATS compliance, PDF upload, scoring logic, and custom feedback. Built with modern UI and MongoDB backend.
          </p>
          <div className="mt-2 flex gap-3 text-sm">
            <a href="https://github.com/A-yushupadhyay/SmartResume" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">GitHub</a>
            <a href="https://smart-resume-ja3k.vercel.app/register" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">Live Demo</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="border p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg
">
          <h3 className="text-xl font-bold text-indigo-600">WanderLust</h3>
          <p className="text-sm text-gray-700 mt-2">
            Full-stack vacation rental platform with location features (Mapbox), Cloudinary image uploads, authentication, and responsive Bootstrap layout.
          </p>
          <div className="mt-2 flex gap-3 text-sm">
            <a href="https://github.com/A-yushupadhyay/WanderLust" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">GitHub</a>
            <a href="https://first-project-1-3p5h.onrender.com/listings" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">Live Demo</a>
          </div>
        </div>


              {/* Project 4: Fraud_Detector */}
          <div className="border p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600">Fraud_Detector</h3>
            <p className="text-sm text-gray-700 mt-2">
              ML-powered Django web app that detects financial fraud using Random Forest and Logistic Regression. Achieved 96% accuracy and visualized fraud insights using Matplotlib.
            </p>
            <div className="mt-2 flex gap-3 text-sm">
              <a href="https://github.com/A-yushupadhyay/Fraud_Detector-py-" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">GitHub</a>
              {/* <!-- Add live demo if hosted --> */}
              <a href="https://fraud-detector-py.onrender.com/users/register/" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">Live Demo</a>
            </div>
          </div>




          {/* Project 5: MiniOS */}
          <div className="border p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-bold text-indigo-600">MiniOS</h3>
            <p className="text-sm text-gray-700 mt-2">
              OS-level command-line system built using C++. Includes user authentication, file management, and a Round Robin CPU scheduler to simulate multitasking.
            </p>
            <div className="mt-2 flex gap-3 text-sm">
              <a href="https://github.com/A-yushupadhyay/MiniOS" className="inline-block mt-2 px-3 py-1 border border-indigo-500 text-indigo-600 rounded text-sm hover:bg-indigo-50">GitHub</a>
              {/* <!-- Add live demo link if applicable --> */}
            </div>
          </div>

      </div>
    </div>


    

                    {/* About + Skills Section */}
        <div className="mt-20 max-w-5xl w-full px-4 mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Profile + Bio */}
            <div className="flex flex-col md:flex-row items-center gap-6">
             <Image
                src="/Ayush05.jpg"
                alt="Ayush Upadhyay"
                width={112} // same as w-28 (28 * 4)
                height={112} // same as h-28 (28 * 4)
                className="rounded-full object-cover shadow"
              />

              <p className="text-gray-700 text-sm leading-relaxed text-center md:text-left">
                I am Ayush, a passionate full-stack web developer focused on real-world solutions and polished user experiences.
                I have built AI-powered resume tools, smart healthcare systems, and dynamic platforms using the MERN stack.
                I am always excited to learn, collaborate, and solve meaningful problems with technology.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-medium text-indigo-600 mb-2">Tech Stack</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <li>JavaScript (ES6+), C++ , Python</li>
                <li>Node.js, React.js</li>
                <li>Express.js , Next.js</li>
                <li>MongoDB,SQL</li>
                <li>EJS / Bootstrap</li>
                <li>JWT / Passport.js</li>
                <li>Git & GitHub</li>
                <li>Cloudinary / Mapbox</li>
                <li>Razorpay API</li>
                <li>Render / Vercel</li>
                <li>MVC Architecture</li>
                <li>Problem Solving (LeetCode , GFG)</li>
              </ul>
            </div>
          </div>
        </div>

                    {/* Contact Section */}
          <div className="mt-16 max-w-5xl w-full px-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Me</h2>
            {submitted ? (
              <p className="text-green-600 text-center text-lg font-medium">
                ✅ Thank you! I’ll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full px-3 py-2 border rounded bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
                    placeholder="Write your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        {/* Footer */}
        <footer className="mt-20 py-6 text-center text-sm text-gray-500 border-t">
          <div>
            &copy; {new Date().getFullYear()} Ayush Upadhyay. Built with Next.js & Tailwind CSS.
          </div>
          <div className="mt-2 space-x-3">
            <a href="https://github.com/A-yushupadhyay/" className="text-indigo-500 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/me/" className="text-indigo-500 hover:underline">LinkedIn</a>
          </div>
        </footer>



    </div>
  )
}
