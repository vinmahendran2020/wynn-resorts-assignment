'use client'

import Col from "@/components/Col";
import Header from "@/components/Header";
import Registration from "./Registration";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section className="w-full flex flex-col items-center justify-center">
          <Registration />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
