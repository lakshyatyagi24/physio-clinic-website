"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceChange = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          preferred_date: data.get("preferred_date"),
          service: selectedServices.join(", ") || "Not specified",
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setSelectedServices([]);
      }
    } catch {
      alert("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left – info */}
          <div>
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Contact Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Book Your Appointment
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fill out the form and Dr. Anchal will get back to you within 24
              hours to confirm your appointment. You can also reach us directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-icons">phone</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Phone</h5>
                  <p className="text-slate-600">+91 92137 29266</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-icons">email</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Email</h5>
                  <p className="text-slate-600">healrightphysio@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-icons">schedule</span>
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">Working Hours</h5>
                  <p className="text-slate-600">
                    Monday – Sunday: 10:00 AM – 6:00 PM
                  </p>
                  <p className="text-slate-600">Open all days</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div className="bg-background-light p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons text-3xl">
                    check_circle
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-slate-600">
                  We&apos;ve received your request. Dr. Anchal will contact you
                  shortly to confirm your appointment.
                </p>
                <p className="text-slate-600 mt-2">
                  A confirmation email has been sent to your inbox.
                </p>
                <button
                  className="mt-6 text-primary font-semibold hover:underline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferred_date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Services Needed (select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl border border-slate-300 bg-white max-h-64 overflow-y-auto">
                    {[
                      "Orthopedic Rehab",
                      "Sports Injury Recovery",
                      "Pre & Post Surgical Rehab",
                      "Neurological Care",
                      "Ergonomic Advice",
                      "Pelvic Floor & Women's Health",
                      "Geriatric Care",
                      "Pediatrics Rehab",
                      "Other",
                    ].map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary focus:ring-2"
                        />
                        <span className="text-sm text-slate-700">{service}</span>
                      </label>
                    ))}
                  </div>
                  {selectedServices.length > 0 && (
                    <p className="text-xs text-slate-500 mt-2">
                      Selected: {selectedServices.join(", ")}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Message / Describe your condition
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your condition or any questions…"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-800 bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary border border-transparent rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Request Appointment
                      <span className="material-icons ml-2 text-lg">send</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We&apos;ll never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
