"use client";

const conditions = [
  { icon: "spine", name: "Back Pain", description: "Lumbar, thoracic, and cervical spine issues" },
  { icon: "description", name: "Neck Pain", description: "Cervical pain, stiffness, and tension" },
  { icon: "sports_soccer", name: "Sports Injuries", description: "Sprains, strains, and sports-related trauma" },
  { icon: "accessibility", name: "Arthritis", description: "Osteoarthritis and rheumatoid arthritis management" },
  { icon: "favorite", name: "Post-Surgery Recovery", description: "Rehabilitation after orthopedic procedures" },
  { icon: "trending_up", name: "Neurological Conditions", description: "Stroke, Parkinson's, and nerve disorders" },
  { icon: "accessibility_new", name: "Mobility Issues", description: "Range of motion and movement limitations" },
  { icon: "woman", name: "Pelvic Floor Therapy", description: "Women's health and pelvic floor dysfunction" },
  { icon: "directions_run", name: "Muscle Weakness", description: "Deconditioning and muscle rehabilitation" },
  { icon: "psychology", name: "Posture Correction", description: "Ergonomic assessment and postural training" },
  { icon: "child_friendly", name: "Pediatric Therapy", description: "Children's developmental and therapeutic needs" },
  { icon: "elderly", name: "Geriatric Care", description: "Senior mobility and fall prevention" },
];

export default function ConditionsTreated() {
  return (
    <section id="conditions" className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            What We Treat
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Conditions We Specialize In
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dr. Anchal has expertise in treating a wide range of conditions
            using evidence-based physiotherapy techniques.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="material-icons text-primary text-2xl">
                  {condition.icon}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {condition.name}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {condition.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <span className="material-icons text-base ml-1">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 text-lg mb-4">
            Don&apos;t see your condition listed?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <span className="material-icons text-lg">message</span>
            Contact Us for More Info
          </a>
        </div>
      </div>
    </section>
  );
}
