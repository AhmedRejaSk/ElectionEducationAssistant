'use client'

import { useState } from 'react';

export default function ReadinessTracker({ t }) {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const steps = t.trackerSteps;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">{t.trackerTitle}</h2>
      
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              Step {step} of {totalSteps}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-blue-600">
              {Math.round((step / totalSteps) * 100)}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
          <div style={{ width: `${(step / totalSteps) * 100}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600 transition-all duration-500"></div>
        </div>
      </div>

      <div className="my-6 min-h-[80px]">
        <h3 className="text-xl font-semibold text-gray-800">{steps[step - 1]}</h3>
        <p className="text-gray-600 mt-2">
          {t.trackerDesc[step - 1]}
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <button 
          onClick={handlePrev} 
          disabled={step === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors"
        >
          {t.prevBtn}
        </button>
        <button 
          onClick={handleNext} 
          disabled={step === totalSteps}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          {step === totalSteps ? t.finishBtn : t.nextBtn}
        </button>
      </div>
    </div>
  );
}
