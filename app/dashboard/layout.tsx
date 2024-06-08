import { Sidebar } from "@/components/shared/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex border rounded-lg shadow-xl">
      <Sidebar />
      <div className="w-full h-screen overflow-y-auto py-4 px-10">
        {children}
      </div>
    </main>
  );
}
