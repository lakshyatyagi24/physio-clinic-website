export default function WhyChoose() {
  const features = [
    {
      icon: "medical_information",
      title: "Expert Care",
      text: "Personalized, hands-on care by Dr. Anchal Tyagi (PT) with a focus on accurate diagnosis and effective treatment.",
    },
    {
      icon: "monitor_heart",
      title: "Modern Equipment",
      text: "Access state-of-the-art rehabilitation technology designed to accelerate healing and improve performance outcomes.",
    },
    {
      icon: "trending_up",
      title: "Proven Results",
      text: "We rely on data-driven recovery plans that track your progress, ensuring measurable improvements every session.",
    },
    {
      icon: "schedule",
      title: "Flexible Scheduling",
      text: "We offer convenient appointment slots including early mornings and weekends so recovery fits your lifestyle.",
    },
    {
      icon: "favorite",
      title: "Compassionate Care",
      text: "We treat people, not just conditions. Every treatment plan is built around your unique needs and goals.",
    },
    {
      icon: "workspace_premium",
      title: "Personalized Attention",
      text: "Every session is one-on-one with Dr. Anchal Tyagi (PT), ensuring focused care and continuity throughout your recovery.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="py-20 bg-background-light border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Why Choose HealRight
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Excellence in Every Step
          </h3>
          <p className="text-slate-600 text-lg">
            We combine cutting-edge technology with hands-on expertise to
            deliver superior care tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-icons text-3xl">{f.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {f.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
