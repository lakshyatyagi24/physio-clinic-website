export default function AboutUs() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "1000+", label: "Patients Treated" },
    { value: "8+", label: "Core Services" },
    { value: "6+", label: "Advanced Techniques" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dr. Anchal Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="relative rounded-2xl shadow-xl z-10 overflow-hidden bg-slate-100 h-[480px]">
              <img
                alt="Dr. Anchal Tyagi - Physiotherapist"
                className="w-full h-full object-contain"
                src="/anchal_photo.png"
              />
              {/* Name Badge */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-6 px-6">
                <p className="text-white text-2xl font-bold">Dr. Anchal Tyagi</p>
                <p className="text-primary/80 text-sm font-medium">Physiotherapist (PT)</p>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-xl z-20">
              <p className="text-3xl font-extrabold leading-none">4+</p>
              <p className="text-sm font-medium mt-1">Years of Experience</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              About Us
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Your Trusted Partner in Recovery &amp; Wellness
            </h3>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-800">HealRight Physiotherapy</strong> is
                led by <strong className="text-slate-800">Dr. Anchal Tyagi (PT)</strong>,
                Consultant Physiotherapist. We focus on personalized,
                evidence-based care across orthopedic, sports, neurological, and
                women&apos;s health rehabilitation.
              </p>
              <p>
                From your first assessment to your final milestone, we walk
                beside you with customized treatment plans, advanced therapeutic
                techniques, and genuine compassion. At HealRight, recovery is not
                just a destination — it&apos;s a journey we take together.
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
                Expertise
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">check</span>
                  Cupping Therapy
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">check</span>
                  Kinesiology Taping
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">check</span>
                  Dry Needling
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">check</span>
                  IASTM
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">check</span>
                  Manual Therapy
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-icons text-primary text-sm">check</span>
                  Vestibular Rehab
                </li>
              </ul>
            </div>

            {/* Stats strip */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
