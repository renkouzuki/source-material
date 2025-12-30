import { api } from "@/lib/api";
import Footer from "./Footer";
import { getLocale } from "next-intl/server";
import AppHeader from "./Header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getMenu } = api;
  const locale = await getLocale();
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader locale={locale} data={getMenu("menu").result} />
      <main className="flex-1 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
        {children}
      </main>
      <Footer data={getMenu("footer").result} />
    </div>
  );
}
