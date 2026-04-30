'use client'

import { useState } from 'react';

export default function MockSimulation({ t }) {
  const [voted, setVoted] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [vvpatMessage, setVvpatMessage] = useState("");

  const candidates = [
    { id: 1, name: "Rajesh Banerjee", party: "All India Trinamool Congress (TMC)", logo: "/logos/tmc.png" },
    { id: 2, name: "Amit Sharma", party: "Bharatiya Janata Party (BJP)", logo: "/logos/bjp.png" },
    { id: 3, name: "Arvind Kejriwal", party: "Aam Aadmi Party (AAP)", logo: "/logos/aap.png" },
    { id: 4, name: "NOTA", party: "None of the Above", logo: "/logos/nota.png" }
  ];

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    setVoted(true);
    
    // Simulate VVPAT
    setTimeout(() => {
      setVvpatMessage(`VVPAT Printed: You voted for ${candidate.name} (${candidate.party}). This slip will drop into the sealed box.`);
    }, 1500);
  };

  const resetSimulation = () => {
    setVoted(false);
    setSelectedCandidate(null);
    setVvpatMessage("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-amber-100 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-amber-900 mb-2">{t.evmTitle}</h2>
      <p className="text-gray-600 mb-6">{t.evmDesc}</p>

      {!voted ? (
        <div className="bg-gray-100 p-4 rounded-xl border-2 border-gray-300">
          <h3 className="font-semibold text-center mb-4 bg-gray-800 text-white py-2 rounded">{t.ballotUnit}</h3>
          <div className="space-y-3">
            {candidates.map((c) => (
              <div key={c.id} className="flex items-center justify-between bg-white p-3 rounded shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white border border-gray-200 rounded p-1 shrink-0">
                    <img src={c.logo} alt={`${c.party} logo`} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-bold">{c.name}</p>
                    <p className="text-sm text-gray-500">{c.party}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleVote(c)}
                  className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center shadow-inner active:bg-blue-800 transition-all border-4 border-gray-300 shrink-0 ml-2"
                  aria-label={`Vote for ${c.name}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full opacity-50"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4 py-8">
          <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <span className="text-4xl">✅</span>
          </div>
          <h3 className="text-xl font-bold text-green-700">{t.voteSuccess}</h3>
          <p className="text-gray-600">{t.beep}</p>
          
          {vvpatMessage ? (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6 text-left animate-pulse">
              <p className="font-semibold text-yellow-800">{t.vvpatTitle}</p>
              <p className="text-yellow-700 text-sm mt-1">{vvpatMessage}</p>
            </div>
          ) : (
            <div className="text-sm text-gray-500 italic mt-6 animate-pulse">
              {t.printing}
            </div>
          )}

          <button 
            onClick={resetSimulation}
            className="mt-8 px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {t.restartBtn}
          </button>
        </div>
      )}
    </div>
  );
}
