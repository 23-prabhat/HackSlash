// Chatbot.jsx
import React, { useState } from "react";

const FAQS = [
  {
    q: "What is the Ministry of AYUSH?",
    a: "The Ministry develops education, research, and propagation of Ayurveda, Yoga & Naturopathy, Unani, Siddha, Sowa-Rigpa & Homeopathy."  /* :contentReference[oaicite:1]{index=1} */
  },
  {
    q: "What is AYUSH‑64?",
    a: "AYUSH‑64 is a poly‑herbal formulation originally for malaria, now repurposed for mild to moderate COVID‑19 as an adjunct therapy."  /* :contentReference[oaicite:2]{index=2} */
  },
  {
    q: "Which systems are covered under AYUSH?",
    a: "It covers Ayurveda, Yoga & Naturopathy, Unani, Siddha, Sowa‑Rigpa, and Homeopathy."  /* :contentReference[oaicite:3]{index=3} */
  },
  {
    q: "Is AYUSH‑64 scientifically proven?",
    a: "Clinical trials show it improves recovery in mild/moderate COVID‑19 when used alongside standard of care."  /* :contentReference[oaicite:4]{index=4} */
  }
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {open && (
        <div className="fixed bottom-20 right-6 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
          <h4 className="font-bold mb-2">AYUSH FAQ Bot</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {FAQS.map((item, idx) => (
              <details key={idx} className="border-b pb-2">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="text-sm mt-1">{item.a}</p>
              </details>
            ))}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-800 z-50"
        title="AYUSH FAQ"
      >
        🤖
      </button>
    </div>
  );
}
