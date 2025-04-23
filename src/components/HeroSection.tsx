import { Button } from "./ui/button";
import backgroundImg from "../images/background.jpg";
import jiuVideo from "../videos/jiu.mp4";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 md:px-10 py-12">
      {/* Imagem de fundo full */}
      <img
        src={backgroundImg}
        alt="Fundo Jiu-Jitsu"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10" />

      {/* Conteúdo centralizado */}
      <div className="relative z-20 text-white max-w-4xl w-full flex flex-col items-center text-center gap-8">
        {/* Vídeo responsivo */}
        <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl">
          <video
            className="w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
            src={jiuVideo}
            controls
            poster="/placeholder.svg"
            playsInline
            autoPlay
            muted
          >
            Seu navegador não suporta vídeo.
          </video>
        </div>

        {/* Texto e CTA */}
        <div className="px-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Transforme sua vida com o Jiu-Jitsu
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2 max-w-xl mx-auto">
            Técnica. Resiliência. Disciplina. Conquiste sua melhor versão no
            tatame e fora dele.
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-jitsu-orange hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm md:text-base">
            Entre em contato
          </Button>
        </a>
      </div>
    </section>
  );
}
