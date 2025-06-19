import FinancialTable from "./FinancialTable";
import Heading from "./Heading";
import Notification from "./Notification";

export default function Dashboard() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">
        <Heading />
        {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Welcome to your Dashboard Joe!
          </h1> */}

        <p className="text-gray-600 text-base mt-2 mb-6">
          This application helps you track personal investments, monitor
          portfolio performance, and interact with an AI assistant to get
          real-time insights into your financial data.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-zinc-400 mt-4">
              Total Portfolio Value
            </h3>
            <p className="text-3xl font-semibold text-gray-900 dark:text-white mt-1">
              $148,500
            </p>
            <div className="mt-3 text-sm text-gray-800 dark:text-gray-200">
              <span className="inline-block rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-0.5 font-medium mr-2">
                AI Insight
              </span>
              Expected 7% growth next quarter
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border-t-1 border-gray-200 dark:border-zinc-700 p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-zinc-400 mt-4">
              Top Performing Asset
            </h3>
            <p className="text-3xl font-semibold text-green-600 dark:text-green-300 mt-1">
              AAPL +14.2%
            </p>
            <div className="mt-3 text-sm text-gray-800 dark:text-gray-200">
              <span className="inline-block rounded bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-0.5 text-xs font-semibold mr-2">
                AI Insight:
              </span>
              Expected 7% growth next quarter
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 border-t-1 border-gray-200 dark:border-zinc-700  p-4">
            <h3 className="text-sm font-medium text-gray-500 dark:text-zinc-400 mt-4">
              AI Portfolio Tip
            </h3>
            <p className="text-base font-medium text-gray-800 dark:text-zinc-100 mt-1">
              Reallocate from volatile energy to stable dividend ETFs.
            </p>
            <div className="mt-3 text-sm text-gray-800 dark:text-gray-200">
              <span className="inline-block rounded bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-2 py-0.5 text-xs font-semibold mr-2">
                AI Strategy:
              </span>
              Sector rotation alert
            </div>
          </div>
        </div>

        <Notification />

        <div className="bg-white shadow rounded-lg p-6 dark:bg-zinc-800">
          <FinancialTable />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-50 w-full max-w-md m-6">
        <input type="checkbox" id="toggle-ai" className="peer hidden" />

        <label
          for="toggle-ai"
          className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold px-5 py-3 rounded-t-lg cursor-pointer shadow-xl peer-checked:rounded-b-none"
        >
          ✨ Financial Insights Assistant
        </label>

        <div className="max-h-0 overflow-hidden peer-checked:max-h-[700px] transition-all duration-500 bg-white border border-gray-300 rounded-b-xl shadow-2xl backdrop-blur">
          <form className="p-6 space-y-5 text-sm">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                What would you like to know?
              </label>
              <textarea
                rows="4"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. Forecast portfolio risk over the next 6 months..."
              ></textarea>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Attach Reports (PDF, CSV)
              </label>
              <input
                type="file"
                className="w-full border rounded-lg p-2 text-sm file:bg-blue-50 file:text-blue-700 file:rounded file:border-0 file:px-3 file:py-1.5"
                multiple
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Sector Focus
                </label>
                <select className="w-full border rounded-lg p-2">
                  <option>All Sectors</option>
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Energy</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Tone
                </label>
                <select className="w-full border rounded-lg p-2">
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
    </div>
  );
}
