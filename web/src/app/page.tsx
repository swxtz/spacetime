export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left */}
      <div className=""></div>

      {/* Right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
          Você ainda não registrou nenhuma lembrança, comece a{" "}
          <a href="#" className="underline hover:text-gray-50 transition-colors">criar agora!</a>
        </p>
        </div>
      </div>
    </main>
  );
}
