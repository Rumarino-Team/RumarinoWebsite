
export default function ComingSoonPage() {
  return (
    <div
      className="relative flex h-[calc(100vh-4rem)] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/auv_depths.webp')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative z-10 font-headline text-5xl font-bold text-white md:text-7xl">
        Coming Soon
      </h1>
    </div>
  );
}
