
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TeacherSection } from "@/components/TeacherSection";
import { ClassesSection } from "@/components/ClassesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TeacherSection />
      <ClassesSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
