import About from "@/components/about/about";
import Header from "@/header/header";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Header />
      <About />
    </div>
  );
}
