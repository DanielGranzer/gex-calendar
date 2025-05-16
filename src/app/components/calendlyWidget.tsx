"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
  return (
    <div className="w-full">
      <InlineWidget
        url="https://calendly.com/daniel-granzer/30min"
        styles={{
          height: "700px", // Increased height, adjust as needed
        }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "00a2ff",
          textColor: "4d5055",
          hideGdprBanner: true, // Hides the cookie banner
        }}
      />
    </div>
  );
}