import { Aside } from "@/app/ui/layout/aside";
import { Header } from "../../ui/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Aside />
      <main className="w-full ml-[250px]">
        <Header />
        <section className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </section>
        <footer></footer>
      </main>
    </div>
  );
}
