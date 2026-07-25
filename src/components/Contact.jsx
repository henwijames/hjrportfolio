import { useState } from "react";
import AnimatedScrollSection from "./AnimatedScrollSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <AnimatedScrollSection
      id="contact"
      sectionNumber="03"
      title="CONTACT ME"
      sectionHeight="h-[450vh]"
    >
      <div className="w-full bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 p-4 sm:p-8 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Communication Channels */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block">
                // INITIATE TRANSMISSION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-neutral-50">
                GET IN TOUCH
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                Whether you have an upcoming project, architectural inquiry, or
                opportunity, feel free to drop a message or reach out through
                direct channels.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">
                  // EMAIL DIRECT
                </span>
                <a
                  href="mailto:henryjames.ribano@example.com"
                  className="font-semibold text-neutral-900 dark:text-neutral-100 hover:underline mt-1"
                >
                  henryjames.ribano@gmail.com
                </a>
              </div>

              <div className="p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">
                  // LOCATION
                </span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 mt-1">
                  Sharjah, United Arab Emirates / Philippines
                </span>
              </div>

              <div className="p-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">
                  // SOCIAL & NETWORK
                </span>
                <div className="flex gap-4 mt-1 font-semibold">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-neutral-900 dark:text-neutral-100"
                  >
                    GITHUB ↗
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-neutral-900 dark:text-neutral-100"
                  >
                    LINKEDIN ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-6 sm:p-8">
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
                <div className="h-12 w-12 bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 flex items-center justify-center font-mono font-bold text-lg">
                  ✓
                </div>
                <h4 className="font-mono text-lg font-bold text-neutral-900 dark:text-neutral-100">
                  TRANSMISSION RECEIVED
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
                  Thank you for reaching out. Your message has been sent
                  successfully. I will get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 py-2.5 font-mono text-xs font-semibold bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 hover:opacity-90 transition-opacity uppercase tracking-wider"
                >
                  RESET FORM
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 font-mono text-xs"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-neutral-600 dark:text-neutral-400 uppercase text-[10px]"
                    >
                      // YOUR NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full p-3 bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-neutral-600 dark:text-neutral-400 uppercase text-[10px]"
                    >
                      // EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full p-3 bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-neutral-600 dark:text-neutral-400 uppercase text-[10px]"
                  >
                    // SUBJECT
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Consultation"
                    className="w-full p-3 bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-neutral-600 dark:text-neutral-400 uppercase text-[10px]"
                  >
                    // MESSAGE <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or inquiry..."
                    className="w-full p-3 bg-neutral-100/70 dark:bg-neutral-900/70 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-none focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-100 transition-colors resize-none font-sans text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 font-mono text-xs font-semibold bg-neutral-900 dark:bg-neutral-100 text-neutral-50 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>SENDING TRANSMISSION...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </AnimatedScrollSection>
  );
}
