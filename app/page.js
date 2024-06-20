import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Paragraph from "@/components/Paragraph";

import Logo from "@/components/logo";
const para =
  "At some point along the way project management tools got to complex. Instead of simplifying work they did the opposite. So we stripped it all away and chose to organizw everything by the most basic fundamental concept time.";

export default function Home() {
  return (
    <main
      className="relative flex flex-col justify-between w-full 
    min-h-screen bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-400 to-blue-800"
    >
      <Navbar />
      <Hero />
      <Logo></Logo>
      <Paragraph className="max-w-full h-screen" value={para}></Paragraph>
    </main>
  );
}
