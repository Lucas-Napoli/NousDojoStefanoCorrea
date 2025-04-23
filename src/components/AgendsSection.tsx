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
export function HorariosSection() {
  return (
    <section id="horarios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="">
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-between gap-6 flex-wrap">
            Cronogramas
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <img src={agenda02} alt="" />
            <img src={agenda} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
