"use client";

const healthTips = [
  {
    id: 1,
    title: "5 Simple Exercises to Relieve Lower Back Pain at Home",
    excerpt:
      "Lower back pain is one of the most common complaints we see. Try these five easy exercises daily to strengthen your core and ease discomfort — no equipment needed.",
    category: "Back Pain",
    icon: "self_improvement",
    readTime: "4 min read",
    tips: [
      "Cat-Cow Stretch — Get on all fours. Alternate between arching and rounding your back. Do 10 reps.",
      "Pelvic Tilts — Lie on your back with knees bent. Flatten your back against the floor by tightening your abs. Hold 5 seconds, repeat 10 times.",
      "Knee-to-Chest Stretch — Pull one knee to your chest, hold for 20 seconds. Switch legs. Repeat 3 times each.",
      "Bridge — Lie on your back, lift hips off the floor. Hold 5 seconds. Repeat 10 times.",
      "Child&apos;s Pose — Sit back on your heels, stretch arms forward on the floor. Hold for 30 seconds.",
    ],
  },
  {
    id: 2,
    title: "When Should You See a Physiotherapist? 7 Warning Signs",
    excerpt:
      "Many people wait too long before seeking physiotherapy. Early treatment leads to faster recovery. Here are the signs you shouldn't ignore.",
    category: "General Health",
    icon: "health_and_safety",
    readTime: "3 min read",
    tips: [
      "Pain lasting more than 2-3 days without improvement",
      "Pain that wakes you up at night or disrupts your sleep",
      "Numbness, tingling, or weakness in your arms or legs",
      "Reduced range of motion or stiffness in joints",
      "Difficulty performing daily activities like walking or climbing stairs",
      "Recurring pain in the same area over months",
      "Post-surgery recovery — physiotherapy speeds healing by 40%",
    ],
  },
  {
    id: 3,
    title: "Desk Job? How to Fix Your Posture and Prevent Neck Pain",
    excerpt:
      "If you work 8+ hours at a desk, poor posture is slowly damaging your spine. Follow these ergonomic tips from Dr. Anchal to protect your neck and shoulders.",
    category: "Ergonomics",
    icon: "monitor",
    readTime: "5 min read",
    tips: [
      "Keep your screen at eye level — your eyes should look straight, not down",
      "Sit with your feet flat on the floor, knees at 90°",
      "Take a 2-minute standing break every 30 minutes",
      "Chin tucks — pull your chin back (make a double chin) and hold for 5 seconds, repeat 10 times",
      "Shoulder blade squeezes — squeeze your shoulder blades together, hold 5 seconds, repeat 10 times",
    ],
  },
  {
    id: 4,
    title: "Sports Injury? When to Use Ice vs. Heat Therapy",
    excerpt:
      "Ice or heat — the wrong choice can make your injury worse. Here's a simple guide to help you decide, straight from our clinic.",
    category: "Sports Injury",
    icon: "sports_soccer",
    readTime: "3 min read",
    tips: [
      "Use ICE for the first 48-72 hours after an acute injury (swelling, bruise, sprain)",
      "Apply ice for 15-20 minutes at a time, with a cloth barrier to protect skin",
      "Use HEAT for chronic pain, muscle stiffness, or before stretching",
      "Heat increases blood flow and flexibility — great for arthritis and tight muscles",
      "Never use heat on a fresh injury — it increases swelling and bleeding",
    ],
  },
  {
    id: 5,
    title: "Why Physiotherapy is Essential After Knee or Hip Surgery",
    excerpt:
      "Surgery is only half the battle. Without proper rehabilitation, you risk stiffness, weakness, and even re-injury. Here's what physiotherapy does for post-surgical recovery.",
    category: "Post-Surgery",
    icon: "medical_information",
    readTime: "4 min read",
    tips: [
      "Physiotherapy restores range of motion gradually and safely",
      "Strengthening exercises prevent muscle atrophy after weeks of rest",
      "Scar tissue mobilization prevents adhesions that limit movement",
      "Balance and gait training reduce fall risk during recovery",
      "A structured rehab plan can cut recovery time by 30-50%",
    ],
  },
];

export default function HealthTips() {
  return (
    <section id="health-tips" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Health Tips & Advice
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Expert Physiotherapy Tips
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Practical advice from Dr. Anchal Tyagi to help you stay pain-free,
            recover faster, and take charge of your health.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {healthTips.map((tip) => (
            <article
              key={tip.id}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Category Banner */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-xs uppercase tracking-wider">
                  <span className="material-icons text-base">{tip.icon}</span>
                  {tip.category}
                </span>
                <span className="text-xs text-slate-400">{tip.readTime}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                  {tip.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {tip.excerpt}
                </p>

                {/* Tips List */}
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="material-icons text-green-500 text-base mt-0.5 flex-shrink-0">
                        check_circle
                      </span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">
            Have a specific concern? Get personalized advice.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <span className="material-icons text-lg">calendar_month</span>
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
