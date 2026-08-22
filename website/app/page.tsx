import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f5]">
       {/* Hero */}
      <div className="mx-auto w-full max-w-3xl px-10 py-10">
        <Image
          src="/images/mudrox-hero.png"
          alt="MudRox dune buggy"
          width={1200}
          height={800}
          className="aspect-square w-full rounded-2xl object-cover object-[18%_center] sm:aspect-auto sm:object-center"
        />

        <h1 className="mt-12 text-center text-2xl font-[family-name:var(--font-orbitron)] font-bold tracking-tight text-black lg:mt-10">MUDROX</h1>
      </div>
      
       {/* Content */}
      <div className="mx-auto mt-4 max-w-sm text-center font-[family-name:var(--font-montserrat)] font-semibold text-sm sm:text-base leading-6 px-6">
        <p>
          A long-term passion project to build the most satisfying buggy to drive.
        </p>

        <p className="mt-8">
          A 2D off-road driving game built around satisfying vehicle physics.
        </p>

        <p className="mt-16">
           🚧 Early development.
        </p>
      </div>

      {/* Website */}
        <div className="mt-12 bg-black px-5 py-4 text-sm text-white">
          <p>
          <a
            href="https://kishorkarthik.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-opacity hover:opacity-70"
          >
            kishorkarthik
          </a> 
          / 
          <a href="#" >MudRox</a>
          </p>
        </div>

        {/* Footer */}
        <footer className="px-2 py-10 text-center text-sm text-black/75 bg-slate-50">
          <p>GitHub</p>
          <a
            href="https://github.com/kishorkarthik/MudRox"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block transition-colors hover:text-black"
          >
            github.com/kishorkarthik/MudRox
          </a>

          <p className="mt-8">© 2026 Kishor Karthik</p>
        </footer>

    </main>
  );
}
