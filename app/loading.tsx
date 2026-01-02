export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar Skeleton */}
      <div className="h-20 bg-gray-800 animate-pulse"></div>
      
      {/* Hero Section Skeleton */}
      <div className="h-96 bg-gray-200 animate-pulse relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div 
              className="w-16 h-16 border-4 border-white/30 border-t-4 rounded-full animate-spin"
              style={{ borderTopColor: '#F6D516' }}
            ></div>
            <div className="h-8 w-64 bg-white/20 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="max-w-screen-2xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Title Skeleton */}
          <div className="space-y-4">
            <div className="h-10 w-1/3 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-100 rounded-lg p-6 space-y-4 animate-pulse">
                <div className="h-48 bg-gray-200 rounded"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

