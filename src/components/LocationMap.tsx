export default function LocationMap() {
  return (
    <section id="location" className="py-20 bg-background-light border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Find Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Visit Our Clinic
          </h3>
          <p className="text-slate-600 text-lg">
            Conveniently located and easy to reach. Walk-ins are welcome, but
            appointments are recommended for the shortest wait time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h4 className="text-xl font-bold text-slate-900 mb-6">
              Clinic Address
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary text-xl mt-0.5">
                  location_on
                </span>
                <div>
                  <p className="font-semibold text-slate-800">HealRight Physiotherapy</p>
                  <p className="text-slate-600 text-sm mt-1">
                    306, M.k. Tyagi Villa, Sai Garden 2,
                    <br />
                    Shahberi, Sector 4, Greater Noida West,
                    <br />
                    Gautam Budh Nagar, UP - 201301
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons text-primary text-xl">phone</span>
                <span className="text-slate-600">+91 92137 29266</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons text-primary text-xl">email</span>
                <span className="text-slate-600">healrightphysio@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-icons text-primary text-xl">schedule</span>
                <div className="text-slate-600 text-sm">
                  <p>Monday – Sunday: 10 AM – 6 PM</p>
                  <p>Open all days</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=28.620732,77.434316"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Get Directions
              <span className="material-icons ml-2 text-lg">directions</span>
            </a>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[420px]">
            {/*
              Replace the src below with your actual Google Maps embed URL.
              Go to Google Maps → Search your clinic → Share → Embed a map → Copy the src.
            */}
            <iframe
              title="HealRight Physiotherapy Location"
              src="https://maps.google.com/maps?q=28.620732,77.434316&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
