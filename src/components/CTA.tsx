export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Ready to Start Your Recovery?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Don&apos;t let pain hold you back. Schedule your initial consultation
              today and take the first step towards a healthier, active life.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-start">
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary border border-transparent rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/30"
                href="#book"
              >
                Book Appointment Now
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-xl hover:bg-slate-50"
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right - Doctor Card */}
          <div className="hidden lg:block relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/anchal_photo.png"
                alt="Dr. Anchal Tyagi"
                className="w-full h-72 object-contain bg-slate-50"
              />
              <div className="p-6 bg-gradient-to-b from-slate-50 to-white">
                <p className="text-2xl font-bold text-slate-900 mb-1">Dr. Anchal Tyagi</p>
                <p className="text-primary font-semibold text-sm mb-4">Senior Physiotherapist (PT)</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  "Your recovery is my priority. With 4+ years of clinical expertise, I design personalized treatment plans to restore your mobility and improve your quality of life."
                </p>
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  <span className="material-icons text-base">star</span>
                  <span className="material-icons text-base">star</span>
                  <span className="material-icons text-base">star</span>
                  <span className="material-icons text-base">star</span>
                  <span className="material-icons text-base">star</span>
                  <span className="text-slate-600 text-xs ml-2">(50+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
    </section>
  );
}
