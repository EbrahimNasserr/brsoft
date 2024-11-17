export default function Section4() {
  return (
    <section className="flex flex-col items-center justify-center py-24 text-slate-800 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg
              className="w-24 h-24 text-[#0A6ED3]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="100 100"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
              1
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">
            Set Your Goals
          </h3>
          <p className="mt-2 text-slate-600">
            Identify your objectives and create a clear roadmap to achieve
            success.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg
              className="w-24 h-24 text-yellow-400"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="100 100"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
              2
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">
            Get Our Expertise
          </h3>
          <p className="mt-2 text-slate-600">
            Leverage our industry knowledge to tackle challenges effectively.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <svg
              className="w-24 h-24 text-[#0A6ED3]"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeDasharray="100 100"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold">
              3
            </span>
          </div>
          <h3 className="mt-4 text-lg font-semibold">
            See Results
          </h3>
          <p className="mt-2 text-slate-600">
            Witness measurable growth and tangible outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
