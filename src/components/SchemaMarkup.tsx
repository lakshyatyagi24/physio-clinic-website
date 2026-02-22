"use client";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://healrightphysio.in/#organization",
        name: "HealRight Physiotherapy Clinic",
        image: "https://healrightphysio.in/logo.png",
        description:
          "Professional physiotherapy clinic in Greater Noida offering personalized treatment for pain management, sports injuries, and post-surgery rehabilitation.",
        url: "https://healrightphysio.in",
        telephone: "+919213729266",
        email: "healrightphysio@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "M.K.Tyagi villa, 306, Sai Garden Rd",
          addressLocality: "Shahberi",
          addressRegion: "Greater Noida",
          postalCode: "201306",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 28.620732,
          longitude: 77.434316,
        },
        priceRange: "₹500 - ₹2000",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "18:00",
          },
        ],
        sameAs: [
          "https://www.google.com/maps/place/HealRight+Physiotherapy+Clinic",
          "https://www.facebook.com/healrightphysio",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "50",
        },
        knowsAbout: [
          "Physiotherapy",
          "Pain Management",
          "Sports Injury Treatment",
          "Post-Surgery Rehabilitation",
          "Manual Therapy",
          "Exercise Therapy",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://healrightphysio.in/#doctor",
        name: "Dr. Anchal Tyagi",
        jobTitle: "Physiotherapist (PT)",
        worksFor: {
          "@id": "https://healrightphysio.in/#organization",
        },
        url: "https://healrightphysio.in",
        image: "https://healrightphysio.in/anchal_photo.png",
        qualifications: "BPT, Certified Physiotherapist",
        expertise: [
          "Orthopedic Rehabilitation",
          "Sports Medicine",
          "Neurological Therapy",
          "Manual Therapy",
        ],
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://healrightphysio.in/#service",
        name: "Physiotherapy Services",
        description: "Comprehensive physiotherapy and rehabilitation services",
        provider: {
          "@id": "https://healrightphysio.in/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://healrightphysio.in/#webpage",
        url: "https://healrightphysio.in",
        isPartOf: {
          "@id": "https://healrightphysio.in",
        },
        name: "HealRight Physiotherapy - Restore Motion, Reclaim Life",
        description:
          "Professional physiotherapy clinic in Greater Noida offering personalized treatment for back pain, sports injuries, post-surgery recovery, and more.",
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
