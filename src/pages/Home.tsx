export default function Home() {
  return (
    <main className="bg-[#F4F8FB] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10 sm:py-20">
        <h1 className="text-2xl sm:text-5xl font-bold text-slate-900 mb-6">
          Delivering healthcare with patients at the heart of every decision
        </h1>
        <p className="text-lg text-slate-700 mb-10">
          As a global telehealth provider, we’re creating a safer, more
          effective, and accessible future for healthcare.
        </p>
        <div className="w-full h-100">
          <img
            src="/images/home-img.jpg"
            alt="Healthcare illustration"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
