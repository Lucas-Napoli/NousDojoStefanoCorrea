import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import acessorio from "../images/acessorios.jpeg";
import casaco from "../images/casaco.jpeg";
import kimono from "../images/kimono.jpg";

export function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Kimono Nous dojo",
      price: 299.9,
      image: kimono,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      id: 2,
      name: "Casaco Nous",
      price: 249.9,
      image: casaco,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      id: 3,
      name: "Garrafinha personalizada",
      price: 59.9,
      image: acessorio,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      id: 4,
      name: "Kimono Personalizado",
      price: 299.9,
      image: kimono,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      id: 5,
      name: "Casaco Personalizado",
      price: 249.9,
      image: casaco,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
    {
      id: 6,
      name: "Garrafinha personalizada",
      price: 59.9,
      image: acessorio,
      link: "https://api.whatsapp.com/send/?phone=5511973128330&text&type=phone_number&app_absent=0",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + productsPerPage >= products.length
        ? 0
        : prevIndex + productsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - productsPerPage
        : prevIndex - productsPerPage
    );
  };

  // Get current products to display
  const currentProducts = [];
  for (let i = 0; i < productsPerPage; i++) {
    const index = (currentIndex + i) % products.length;
    currentProducts.push(products[index]);
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Equipamentos e Vestuário
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Tudo que você precisa para treinar com qualidade e conforto.
        </p>

        <div className="relative py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-2 border-gray-200"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardContent className="pt-6">
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <p className="text-jitsu-orange font-bold text-lg">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full flex items-center gap-2"
                    onClick={() => window.open(product.link, "_blank")}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Comprar
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Carousel navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              onClick={prevSlide}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
            >
              &lt;
            </Button>
            {products.map((_, index) => {
              if (index % productsPerPage === 0) {
                const isActive = index === currentIndex;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full w-3 h-3 p-0 ${
                      isActive ? "bg-jitsu-orange border-jitsu-orange" : ""
                    }`}
                  >
                    <span className="sr-only">Slide {index + 1}</span>
                  </Button>
                );
              }
              return null;
            })}
            <Button
              variant="outline"
              onClick={nextSlide}
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center"
            >
              &gt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
