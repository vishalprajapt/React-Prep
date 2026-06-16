// notes/hero.jsx

export default function HeroSection() {
  return (
    <div className="bg-indigo-600 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex-1 min-w-0">
        <h2 className="text-white text-xl sm:text-2xl font-semibold">React Notes</h2>
        <p className="text-indigo-200 mt-1 text-sm">
          Master React through reading &amp; practice
        </p>
        <div className="mt-4 flex items-center gap-3 flex-wrap">
          <div className="w-36 sm:w-48 h-2 bg-indigo-400/50 rounded-full">
            <div className="w-[68%] h-2 bg-white rounded-full" />
          </div>
          <span className="text-white text-sm">18 / 26 done</span>
        </div>
      </div>
      <div className="text-center sm:text-right shrink-0">
        <h1 className="text-4xl sm:text-5xl text-white font-bold">68%</h1>
        <p className="text-indigo-200 text-sm">overall</p>
      </div>
    </div>
  );
}
