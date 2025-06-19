import React from "react";

export default function Insights() {
  return (
    <div className="fixed bottom-0 right-0 z-50 w-full max-w-md m-6">
      <input type="checkbox" id="toggle-ai" className="peer hidden" />

      <label
        for="toggle-ai"
        className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-t-lg cursor-pointer shadow-xl peer-checked:rounded-b-none"
      >
        ✨ Financial Insights Assistant
      </label>

      <div className="max-h-0 overflow-hidden peer-checked:max-h-[700px] transition-all duration-500 bg-white border border-gray-300 rounded-b-xl shadow-2xl backdrop-blur dark:bg-zinc-900 dark:border-zinc-700">
        <form className="p-6 space-y-5 text-sm">
          <div>
            <label className="block text-gray-700 font-medium mb-1 dark:text-zinc-200">
              What would you like to know?
            </label>
            <textarea
              rows="4"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              placeholder="e.g. Forecast portfolio risk over the next 6 months..."
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1 dark:text-zinc-200">
              Attach Reports (PDF, CSV)
            </label>
            <input
              type="file"
              className="w-full border rounded-lg p-2 text-sm file:bg-blue-50 file:text-blue-700 file:rounded file:border-0 file:px-3 file:py-1.5 dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
              multiple
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1 dark:text-zinc-200">
                Sector Focus
              </label>
              <select className="w-full border rounded-lg p-2 dark:bg-zinc-800 dark:text-white dark:border-zinc-700">
                <option>All Sectors</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Finance</option>
                <option>Energy</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1 dark:text-zinc-200">
                Tone
              </label>
              <select className="w-full border rounded-lg p-2 dark:bg-zinc-800 dark:text-white dark:border-zinc-700">
                <option>Neutral</option>
                <option>Optimistic</option>
                <option>Conservative</option>
                <option>Analytical</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition"
          >
            Generate Insights
          </button>
        </form>
      </div>
    </div>
  );
}
