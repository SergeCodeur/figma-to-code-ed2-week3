import Sidebar from "@/components/sidebar";
import TopNav from "@/components/top-nav";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full h-dvh flex">
      <Sidebar />
      <section className="flex-1 overflow-y-scroll h-full relative">
        <TopNav />
        <>{children}</>
      </section>
    </main>
  );
}
