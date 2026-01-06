import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <ThemeToggle />
      </div>
      <p className="dark:text-red-600">Hellokw ther e dwa</p>
    </div>
  );
}
