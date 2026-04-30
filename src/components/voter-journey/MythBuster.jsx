'use client'

import { useState } from 'react';
import { checkMyth } from '@/app/actions';

export default function MythBuster({ t, appLanguage }) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResult("");
    try {
      const response = await checkMyth(query, appLanguage);
      setResult(response);
    } catch (error) {
      setResult("Error: Unable to connect to the truth engine.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-purple-900 mb-2">{t.mythTitle}</h2>
      <p className="text-gray-600 mb-6">{t.mythDesc}</p>

      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={loading || !query.trim()}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {loading ? t.checkingBtn : t.checkBtn}
          </button>
        </div>
      </form>

      {result && (
        <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
          <h3 className="font-semibold text-purple-800 mb-2">{t.factResult}</h3>
          <div className="text-gray-700 whitespace-pre-wrap">{result}</div>
        </div>
      )}
    </div>
  );
}
