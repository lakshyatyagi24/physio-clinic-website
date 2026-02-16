export default function Services() {
  const services = [
    {
      title: "Orthopedic Rehab",
      text: "Relief and recovery for joint, muscle, and spine issues using evidence-based orthopedic physiotherapy protocols.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApJqn_qd9FB9pDLcIrbptfQ-9o3F35m_Z0o5V35HcvAZf6YhuXvhhJYYdpWhzQ2zKJGJjKQN9X66SfA5wt2qrYQ4yrfphjCuKKe0LHU5iVCVBrps55hLUYzDSoQar8Ddpm6jVMf5PhmDDLQDLBzx0Y8ZfvFShFUaUGsMr295Rqb8SNl0J-YTcgTumryzwN1RBlCdm7-3dIhFcL7l77zHaKPJ73QzF9fR2OUMLlvidhCZRyHS5kr0YXmZHHcZ32buGG_iPEQtDa-u4",
    },
    {
      title: "Sports Injury Recovery",
      text: "Specialized rehab for athletes with performance-focused recovery, injury prevention, and return-to-sport planning.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDsCNWna56Tzywmigw2dezWlVtOeeA2GKdmhara8ZMmybf4ee4r_beTMVi5b5iHhZI1_av2NlBlESeYLX0uHwDQ1ofUlu4JxnlEElxfja-8Zy8aBa7fJjw5fwj9yxPMbjmnUXG_Hq8SIJjyl_bFQ8kDRGIH5z5TZPHqak9m7LsMxRNIsyLDTxsZMfHyCk0Zgm2KPs_YHufkWDQTbbQ0Yp_IBYbziQoydVmq9-gayKno6yjj7JjGKOOcM6WLW50JwD4CjhmNagcNLg",
    },
    {
      title: "Pre & Post Surgical Rehab",
      text: "Prepare for surgery and recover safely with guided physiotherapy plans aligned with your surgeon's protocol.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyCcpTuxvP2lwb4PHNW-kgVPV8CJDYnGLUDo3-Sq7Vwo_pb33fAcNKAGO7P7vyRWjHcVUY1kIzZrFE5FYPEDFjNxNeaVb8FAYOMnGPNyeKeelwp5KeIVlz4oUJnM9VHQBGpcRYtv_izN0WTZFS-gQke54TeMVOzRm1yyVuex45KQm47JDhEQ_0PdybIS68qLXkmddoJkmKHShWqHnJdbTmn_xCBzCSVyl-73ZjnpiBGPeT_jFtLBtpuUyvilPjuxUHZ0wVLK4L94",
    },
    {
      title: "Neurological Care",
      text: "Rehab for stroke, Parkinson's disease, and other neurological conditions to restore balance, coordination, and independence.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDsCNWna56Tzywmigw2dezWlVtOeeA2GKdmhara8ZMmybf4ee4r_beTMVi5b5iHhZI1_av2NlBlESeYLX0uHwDQ1ofUlu4JxnlEElxfja-8Zy8aBa7fJjw5fwj9yxPMbjmnUXG_Hq8SIJjyl_bFQ8kDRGIH5z5TZPHqak9m7LsMxRNIsyLDTxsZMfHyCk0Zgm2KPs_YHufkWDQTbbQ0Yp_IBYbziQoydVmq9-gayKno6yjj7JjGKOOcM6WLW50JwD4CjhmNagcNLg",
    },
    {
      title: "Ergonomic Advice",
      text: "Workplace and posture correction strategies to reduce pain, prevent injury, and improve daily function.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApJqn_qd9FB9pDLcIrbptfQ-9o3F35m_Z0o5V35HcvAZf6YhuXvhhJYYdpWhzQ2zKJGJjKQN9X66SfA5wt2qrYQ4yrfphjCuKKe0LHU5iVCVBrps55hLUYzDSoQar8Ddpm6jVMf5PhmDDLQDLBzx0Y8ZfvFShFUaUGsMr295Rqb8SNl0J-YTcgTumryzwN1RBlCdm7-3dIhFcL7l77zHaKPJ73QzF9fR2OUMLlvidhCZRyHS5kr0YXmZHHcZ32buGG_iPEQtDa-u4",
    },
    {
      title: "Pelvic Floor & Women’s Health",
      text: "Specialized care for women’s health, including pelvic floor strengthening and postnatal rehabilitation.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyCcpTuxvP2lwb4PHNW-kgVPV8CJDYnGLUDo3-Sq7Vwo_pb33fAcNKAGO7P7vyRWjHcVUY1kIzZrFE5FYPEDFjNxNeaVb8FAYOMnGPNyeKeelwp5KeIVlz4oUJnM9VHQBGpcRYtv_izN0WTZFS-gQke54TeMVOzRm1yyVuex45KQm47JDhEQ_0PdybIS68qLXkmddoJkmKHShWqHnJdbTmn_xCBzCSVyl-73ZjnpiBGPeT_jFtLBtpuUyvilPjuxUHZ0wVLK4L94",
    },
    {
      title: "Geriatric Care",
      text: "Safe, supportive therapy to improve balance, mobility, and confidence for older adults.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDsCNWna56Tzywmigw2dezWlVtOeeA2GKdmhara8ZMmybf4ee4r_beTMVi5b5iHhZI1_av2NlBlESeYLX0uHwDQ1ofUlu4JxnlEElxfja-8Zy8aBa7fJjw5fwj9yxPMbjmnUXG_Hq8SIJjyl_bFQ8kDRGIH5z5TZPHqak9m7LsMxRNIsyLDTxsZMfHyCk0Zgm2KPs_YHufkWDQTbbQ0Yp_IBYbziQoydVmq9-gayKno6yjj7JjGKOOcM6WLW50JwD4CjhmNagcNLg",
    },
    {
      title: "Pediatrics Rehab",
      text: "Child-friendly rehabilitation programs to support developmental milestones and mobility.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfyCcpTuxvP2lwb4PHNW-kgVPV8CJDYnGLUDo3-Sq7Vwo_pb33fAcNKAGO7P7vyRWjHcVUY1kIzZrFE5FYPEDFjNxNeaVb8FAYOMnGPNyeKeelwp5KeIVlz4oUJnM9VHQBGpcRYtv_izN0WTZFS-gQke54TeMVOzRm1yyVuex45KQm47JDhEQ_0PdybIS68qLXkmddoJkmKHShWqHnJdbTmn_xCBzCSVyl-73ZjnpiBGPeT_jFtLBtpuUyvilPjuxUHZ0wVLK4L94",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Our Services
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              Comprehensive Therapy Solutions
            </h3>
            <p className="text-slate-600 mt-3">
              In-clinic care with specialized home visits available on request.
            </p>
          </div>
          <a
            className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            href="#book"
          >
            Book a Session{" "}
            <span className="material-icons ml-1 text-lg">arrow_forward</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background-light rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                <img
                  alt={s.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  src={s.img}
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {s.title}
                </h4>
                <p className="text-slate-600 mb-4 text-sm line-clamp-3">
                  {s.text}
                </p>
                <a
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary/80"
                  href="#book"
                >
                  Book Now{" "}
                  <span className="material-icons text-sm ml-1">
                    chevron_right
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
