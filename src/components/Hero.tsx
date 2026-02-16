import Image from "next/image";
import logo from "@/logo.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left – copy */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-sm">
                <Image
                  src={logo}
                  alt="HealRight Physiotherapy logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                New Patients Welcome
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Restore Motion, <br />
              <span className="text-primary relative inline-block">
                Reclaim Life
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-primary/20"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Expert physiotherapy tailored to your unique recovery journey. We
              combine clinical precision with compassionate care to help you
              move better and feel stronger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-primary border border-transparent rounded-xl hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1"
                href="#book"
              >
                Book Appointment
                <span className="material-icons ml-2 text-lg">
                  calendar_month
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all duration-200 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-primary/30"
                href="#services"
              >
                Explore Services
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6 pt-8 border-t border-slate-200">
              <div className="flex -space-x-3">
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDd9BqKuK2i8Fc_3z4Vhvmhm0puwXQ5GUuyuqcr4ESq1-pOn7xVjtkhw2mhb13dAZc-KvxCkc6sTiNyyhnzOwEnHHuof9hIW0D5HSBMTJN1r86qBL2FURZs_bJej0L7eSxPottXEEY4YAE1Rl0IhHgcRoNRzm8UBfNQz4kxWbDqzYPI1Gs0RO_vhwv3dPj4rvCMDes9y7oXTG_68-DHxev-jVbg25PMugyyN3rDDZXuzCALc4abzvtgTmGzxShHrwYRIqtDg_nLIfA",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDuoG_0GH4I5Wb_dErlOqzRDDju9HK2ex23kI74HD1NQXo-k6OZR03hmUNxgI2eqpAqMtShNjsndIPbEs3IqW7_sj5ZObBf6EDeO99ZbO_bYkIvEuVomJA9lJg9f6RVG_cYg5oSLlxHRhW7PXW8N03TROACYimVb0UWnS2ZoOENJOkhEpwDiMCODDqt5zjWApvJPICuLxkVIlLkxtiILi6M63s_MFiIwWqUIh7sxVGfm3TWxTQrz3n6n7mIKYpFAt_xoZ2I-boUIZE",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCYwvvVxNKahRJ3WQWhTmqkZslbxe1-eL4mdOSoLbyv8xo0EgsSXYkIDpDdF3XhVTu2p6nkM2pa2GrMHj_bDBZRoBQASSU5hv43iDMuPQq7IGg_hAYfU860VE_ZyYzanuBWDLSqEEylv6xhhxhOpptWZhHidV6mQi4dTrkRiBp_chysRMIw7NEAa_SCh0myRbQbl04v3PFFpUkLYAQlEXEJlc_ui7QYFRZmv5bb-QM0nZox2TaVUjpPPU9qoXESuexNxhdfYNq_jJk",
                ].map((src, i) => (
                  <img
                    key={i}
                    alt="Happy patient"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    src={src}
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
                  1000+
                </div>
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">
                  Trusted by 1000+ Patients
                </p>
                <div className="flex text-yellow-400 text-xs">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="material-icons text-sm">
                        star
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right – image */}
          <div className="relative lg:h-full min-h-[400px]">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-95" />
            <img
              alt="Physiotherapist helping patient with leg stretch"
              className="relative rounded-3xl shadow-2xl object-cover w-full h-full min-h-[500px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUyXSW0fl1BsB6doqCFiRa4OBneVnoGm3kr_jk8Ev_glW75Z0wrpEUIkeHl0z4w_OMlRxNgglKyEJHC_Ci5McWu74KyIGSl2huW91iFkigZ2PRfy1DomHr6vWhVN4LtU1Nh5w0zDKQJRqgW8lW-ecBWJr0huvISNg-aHHRs7l540MuY-GkFraczhv-T15_ZH0R59uS4V9BOW5YOVyIdoP6rYockNvr289AhXT9x8eXEy326JJ0lnj7J32ovOtZgb0uwL7IN9rMvE"
            />
            {/* Floating badge */}
            <div
              className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <span className="material-icons">verified</span>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">
                  Recovery Rate
                </p>
                <p className="text-lg font-bold text-slate-900">98% Success</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
    </section>
  );
}
