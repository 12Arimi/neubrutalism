import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Installable", text: "Add it to your home screen or desktop.", color: "bg-pink-300" },
  { title: "Fast", text: "Built on Next.js with the App Router.", color: "bg-cyan-300" },
  { title: "Bold", text: "Neobrutalist design, thick borders and hard shadows.", color: "bg-lime-300" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 text-black">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <section className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
          <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            Welcome to the Portal
          </h1>
          <p className="mt-3 max-w-xl text-lg">
            A simple demo to test installing a web app on Android, iOS and desktop.
          </p>
          <Button asChild className="mt-6 rounded-none border-2 border-black shadow-[4px_4px_0_0_#000]">
            <Link href="/demo">View demo data</Link>
          </Button>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} border-4 border-black p-4 shadow-[6px_6px_0_0_#000]`}
            >
              <h2 className="text-xl font-black uppercase">{f.title}</h2>
              <p className="mt-2 text-sm font-medium">{f.text}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}