export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Compress PDF Online
        </h1>
        <p className="text-gray-600 mb-8">
          Reduce PDF file size directly in your browser. No uploads. No tracking.
          100% secure and private.
        </p>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 bg-white">
          <p className="text-gray-500">
            PDF Compressor UI will appear here.
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Powered by Nextooly
        </p>
      </div>
    </main>
  );
}
