import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Trophy, BookOpen } from "lucide-react";
import backgroundImg from "../images/background.jpg";
import metodoImg from "../images/metodo.jpeg";
import campeao from "../images/campeao.png";

export function TeacherSection() {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          STEFANO CORREA
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Conheça nosso instrutor dedicado, com anos de experiência no ensino da
          arte do Jiu-Jitsu.
        </p>

        {/* Teacher profile */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/3">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-jitsu-orange max-w-xs mx-auto">
              <img
                src={backgroundImg}
                alt="Professor de Jiu-Jitsu"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-2">STEFANO FERNANDO CORREA</h3>
            <p className="text-jitsu-orange font-semibold mb-4">
              Faixa Preta 3º Grau
            </p>
            <p className="text-gray-600 mb-6">
              Professor de Jiu-jitsu com mais de 16 anos de experiência, tendo
              passado por diversas academias pelo Brasil e mundo, como EUA,
              Portugal, Italia, Londres, Espanha, Escocia e Abu Dhabi.
            </p>
            <div className="flex gap-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                Competidor IBJJF
              </span>
            </div>
          </div>
        </div>

        {/* Teacher Cards - Prizes and Method */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-gray-200 w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Imagem à esquerda */}
              <img
                src={campeao} // substitua pelo caminho correto da imagem de premiações
                alt="Premiações de Jiu-Jitsu"
                className="w-50 h-64 object-cover rounded-lg shadow-md mx-auto md:mx-0"
              />

              {/* Conteúdo à direita */}
              <div className="flex flex-col justify-start flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Premiações</CardTitle>
                    <CardDescription>
                      Reconhecimento Nacional e Internacional
                    </CardDescription>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    2x campeão Europeu
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    2x campeão Sul-americano
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    2x campeão Brasileiro
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    Multi campeão internacional
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="border-2 border-gray-200 w-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Imagem à esquerda */}
              <img
                src={metodoImg}
                alt="Método com crianças"
                className="w-48 h-64 object-cover rounded-lg shadow-md mx-auto md:mx-0"
              />

              {/* Conteúdo à direita */}
              <div className="flex flex-col justify-start flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Método de Ensino</CardTitle>
                    <CardDescription>
                      Abordagem Pedagógica Exclusiva
                    </CardDescription>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    Amor pelo ensino e respeito pela luta marcaram sua
                    trajetória.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    Desenvolveu sua própria metodologia de ensino.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    Une a tradição das bases do jiu-jitsu com uma abordagem
                    moderna.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jitsu-orange mt-1">•</span>
                    Contextualiza o jiu-jitsu às necessidades da sociedade
                    atual.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
