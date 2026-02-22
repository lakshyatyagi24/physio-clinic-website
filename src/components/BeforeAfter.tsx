"use client";

import { useState } from "react";

const beforeAfterCases = [
  {
    id: 1,
    title: "Lower Back Pain Recovery",
    condition: "Chronic Lower Back Pain",
    duration: "6 weeks",
    before:
      "https://images.pexels.com/photos/4327904/pexels-photo-4327904.jpeg?auto=compress&cs=tinysrgb&w=600",
    after:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "Post-Surgery Rehabilitation",
    condition: "Knee ACL Surgery Recovery",
    duration: "10 weeks",
    before:
      "https://images.pexels.com/photos/3807515/pexels-photo-3807515.jpeg?auto=compress&cs=tinysrgb&w=600",
    after:
      "https://images.pexels.com/photos/3807514/pexels-photo-3807514.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "Neck & Shoulder Pain",
    condition: "Office Worker Syndrome",
    duration: "4 weeks",
    before:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    after:
      "https://images.pexels.com/photos/3807513/pexels-photo-3807513.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "Sports Injury Comeback",
    condition: "Ankle Sprain Recovery",
    duration: "8 weeks",
    before:
      "https://images.pexels.com/photos/4326562/pexels-photo-4326562.jpeg?auto=compress&cs=tinysrgb&w=600",
    after:
      "https://images.pexels.com/photos/3807511/pexels-photo-3807511.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function BeforeAfter() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const caseData = beforeAfterCases[selectedCase];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="before-after" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Real Results From Our Patients
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See the transformation our treatment approach can achieve. Each case
            represents a real patient journey to recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Before/After Slider */}
          <div className="lg:col-span-2">
            <div className="relative w-full bg-slate-100 rounded-2xl overflow-hidden shadow-lg">
              {/* After Image */}
              <div className="relative w-full aspect-square md:aspect-video">
                <img
                  src={caseData.after}
                  alt="After treatment"
                  className="w-full h-full object-cover"
                />

                {/* Before Image Overlay */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${100 - sliderPosition}%` }}
                >
                  <img
                    src={caseData.before}
                    alt="Before treatment"
                    className="w-full h-full object-cover"
                    style={{ width: `${(100 / (100 - sliderPosition)) * 100}%` }}
                  />
                </div>

                {/* Slider Handle */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={100 - sliderPosition}
                  onChange={(e) =>
                    setSliderPosition(100 - Number(e.target.value))
                  }
                  className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                  aria-label="Before and after slider"
                />

                {/* Vertical Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${100 - sliderPosition}%` }}
                >
                  {/* Slider Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg">
                    <div className="flex items-center gap-1">
                      <span className="material-icons text-base">
                        chevron_left
                      </span>
                      <span className="material-icons text-base">
                        chevron_right
                      </span>
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                  AFTER
                </div>
              </div>
            </div>

            {/* Case Details */}
            <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-slate-600">Condition</p>
                  <p className="text-lg font-bold text-slate-900">
                    {caseData.condition}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Recovery Time</p>
                  <p className="text-lg font-bold text-primary">
                    {caseData.duration}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Success Rate</p>
                  <p className="text-lg font-bold text-green-600">100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Case Selection */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">
              Select a Case
            </h4>
            <div className="space-y-3">
              {beforeAfterCases.map((c, idx) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCase(idx);
                    setSliderPosition(50);
                  }}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedCase === idx
                      ? "border-primary bg-primary/5"
                      : "border-slate-200 bg-white hover:border-primary/50"
                  }`}
                >
                  <p className="font-semibold text-slate-900">{c.title}</p>
                  <p className="text-sm text-slate-500">{c.condition}</p>
                  <p className="text-xs text-primary mt-1">{c.duration}</p>
                </button>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-6 flex items-center justify-center gap-2 w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <span className="material-icons text-lg">calendar_month</span>
              Start Your Recovery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
