import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Experience from '@/components/home/Experience';
import Hero from '@/components/home/Hero';
import Work from '@/components/home/Work';

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 md:mt-10">
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}
