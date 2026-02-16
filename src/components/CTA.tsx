export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Ready to Start Your Recovery?
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Don&apos;t let pain hold you back. Schedule your initial consultation
          today and take the first step towards a healthier, active life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
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

      {/* Decorative blobs */}
      <div className="absolute -left-20 top-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -right-20 bottom-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
    </section>
  );
}
