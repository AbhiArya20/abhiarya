import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <About />
      <Experience />
    </div>
  );
}
