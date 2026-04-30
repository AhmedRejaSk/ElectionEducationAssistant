'use client'

import { useState } from 'react';
import ReadinessTracker from "@/components/voter-journey/ReadinessTracker";
import MockSimulation from "@/components/voter-journey/MockSimulation";
import MythBuster from "@/components/voter-journey/MythBuster";
import ElectionStats from "@/components/voter-journey/ElectionStats";
import { translations } from "@/lib/translations";

export default function Home() {
  const [appLanguage, setAppLanguage] = useState("English");
  
  // Fallback to English if UI translations aren't available for the chosen language
  const t = translations[appLanguage] || translations["English"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-blue-900 text-white py-6 sm:py-8 px-4 sm:px-6 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.title}</h1>
            <p className="mt-1 sm:mt-2 text-blue-200 text-sm sm:text-lg">{t.subtitle}</p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end">
            <select 
              value={appLanguage}
              onChange={(e) => setAppLanguage(e.target.value)}
              className="px-3 py-1.5 border border-blue-700 bg-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white text-sm w-full sm:w-auto max-w-xs"
            >
              <option value="English">English</option>
              <option value="Hindi">हिंदी (Hindi)</option>
              <option value="Bengali">বাংলা (Bengali)</option>
              <option value="Tamil">தமிழ் (Tamil)</option>
              <option value="Telugu">తెలుగు (Telugu)</option>
              <option value="Marathi">मराठी (Marathi)</option>
            </select>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        <section id="myth-buster" aria-label="Myth Buster Section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t.factCheck}</h2>
            <p className="text-gray-600 mt-2">{t.factCheckDesc}</p>
          </div>
          <MythBuster t={t} appLanguage={appLanguage} />
        </section>

        <section id="readiness" aria-label="Voter Readiness Section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t.prepareVote}</h2>
            <p className="text-gray-600 mt-2">{t.prepareVoteDesc}</p>
          </div>
          <ReadinessTracker t={t} />
        </section>

        <section id="simulation" aria-label="EVM Mock Simulation Section">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">{t.practiceVote}</h2>
            <p className="text-gray-600 mt-2">{t.practiceVoteDesc}</p>
          </div>
          <MockSimulation t={t} />
        </section>

        <section id="statistics" aria-label="Election Statistics Section">
          <div className="text-center mb-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-800">{t.statsSection}</h2>
            <p className="text-gray-600 mt-2">{t.statsDesc}</p>
          </div>
          <ElectionStats t={t} />
        </section>

      </main>

      <footer className="bg-gray-800 text-gray-400 py-6 text-center mt-12">
        <p>{t.footer}</p>
        <p className="text-sm mt-1">{t.footerNote}</p>
      </footer>
    </div>
  );
}
