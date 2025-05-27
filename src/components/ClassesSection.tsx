import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, Users, Dumbbell } from "lucide-react";
import jiu01 from "../images/jiu01.jpeg";
import jiu02 from "../images/jiu02.jpeg";
import kids from "../images/kidsBG.png";
import adulto from "../images/adultoBG.png";
import kuma from "../images/kuma.png";
import karasu from "../images/karasu.png";
import hotaru from "../images/hotaru.png";
import kitsune from "../images/kitsune.jpg";
import agenda from "../images/agenda.jpeg";
import agenda02 from "../images/agenda02.jpeg";
export function ClassesSection() {
  // Kids classes data
  const kidsClasses = [
    {
      title: "Kuma team",
      age: "4-7 anos",
      description:
        "Desenvolvimento motor e social através de jogos e brincadeiras",
      schedule: "Seg e quarta 19h",
      image: kuma,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      title: "Karasu team",
      age: "8-10 anos",
      description: "Introdução às técnicas básicas do Jiu-Jitsu",
      schedule: "Seg e quarta 09h",
      image: karasu,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      title: "Kitsune team",
      age: "11-13 anos",
      description: "Treinamento avançado e preparação para competições",
      schedule: "Terça e quinta 18h",
      image: kitsune,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      title: "Hotaru team",
      age: "14-16 anos",
      description: "Treinamento avançado e preparação para competições",
      schedule: "Terça e quinta 19h",
      image: hotaru,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
  ];

  // Adult classes data
  const adultClasses = [
    {
      title: "Jiu-Jitsu Fundamentos",
      description: "Ideal para iniciantes, foco nos fundamentos da arte suave",
      schedule: "Seg, Qua e Sex, 19h - 20h30",
      image: jiu01,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      title: "Jiu-Jitsu Avançado",
      description:
        "Para praticantes experientes, com foco em técnicas avançadas e competição",
      schedule: "Ter e Qui, 19h - 21h",
      image: jiu02,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section id="classes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Nossas Aulas
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Oferecemos programas completos para todas as idades e níveis de
          experiência.
        </p>

        {/* Kids Classes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-between gap-6 flex-wrap">
            <img
              src={kids}
              alt="Nous Kids"
              className="h-12 md:h-16 object-contain"
            />
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kidsClasses.map((klass, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-gray-200 hover:border-jitsu-orange transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden bg-white">
                  <img
                    src={klass.image}
                    alt={klass.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{klass.title}</CardTitle>
                  <CardDescription>Faixa etária: {klass.age}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{klass.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{klass.schedule}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(klass.link, "_blank")}
                  >
                    Saiba mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Adult Classes */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-between gap-6 flex-wrap">
            <img
              src={adulto}
              alt="Nous Adulto"
              className="h-12 md:h-16 object-contain"
            />
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {adultClasses.map((klass, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 border-gray-200 hover:border-jitsu-orange transition-colors"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={klass.image}
                    alt={klass.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{klass.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{klass.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{klass.schedule}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open(klass.link, "_blank")}
                  >
                    Saiba mais
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
