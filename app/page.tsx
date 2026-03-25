import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* Hier komt de rest van je pagina */}
      <div className="h-screen bg-white p-10">
        <h2>Volgende sectie...</h2>
      </div>
    </>
  );
}