import Banner from "@/components/Banner";
import SummaryCards from "@/components/SummaryCards";

export default function Home() {
  return (
    <div>
      <Banner />
      <SummaryCards />

      {/* Friends section heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-xl font-bold text-[#244D3F] mb-6">Your Friends</h2>

        {/* Placeholder skeleton grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-green-100 p-4 animate-pulse"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-green-100 rounded w-3/4"></div>
                  <div className="h-2 bg-green-50 rounded w-1/2"></div>
                </div>
              </div>
              <div className="h-2 bg-green-50 rounded w-1/3 ml-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
