export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="h-16 w-16 border-4 border-red-100 border-t-red-600 rounded-full animate-spin mx-auto"></div>
        <p className="mt-6 text-gray-600 font-medium">Loading life-saving knowledge...</p>
      </div>
    </div>
  );
}