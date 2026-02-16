export default function Mission() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <img
              alt="Doctor consulting with a patient"
              className="relative rounded-2xl shadow-xl z-10 w-full object-cover h-[500px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAotl2UZZ5z_H_iXx0C_I0S1_3WpHnA0685RieU9_v1JYb-GdQGrerP21rn4K5O0fvCwheStFnIGjb2yWNbZrVipFj2KMDBu-FhygIaiI9mVKvjGa-yF-hy5MYQ6-mRqCjSeEkY0kQzw0uoKy9DHyhXtpII2_Sgb6kLTtGnT2Ql1qWnfpi0p_ZyYB5zQ5H0EBHzB4A2nUGoVFao1mEtphHQhx8Pb6U5sHygNEDCYWf6XXUgY72qE7l6AZxjp6iDxQxWF9vEqJBUFts"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Patient-Centered Care That Puts You First
            </h3>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                At HealRight, we don&apos;t just treat symptoms; we treat
                people. We understand that every injury has a story and every
                recovery has a goal.
              </p>
              <p>
                Our mission is to empower you with the strength, mobility, and
                confidence to live your life to the fullest. Whether you are an
                athlete aiming for gold or a grandparent wanting to play with
                your grandkids, your goal becomes our goal.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-8">
              {[
                {
                  title: "Holistic Approach",
                  desc: "Mind, body, and lifestyle integration.",
                },
                {
                  title: "Education Focused",
                  desc: "Understanding your body prevents injury.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-icons text-primary">check</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
