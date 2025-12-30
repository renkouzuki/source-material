import { Code, Github } from "lucide-react";
import HomeLayout from "./HomeLayout";
import Button from "../common/Button";

const Home = () => {
  return (
    <HomeLayout>
      <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            Next.js + React + Tailwind Template
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              SEO Kit Template
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A modern, fully responsive Next.js template with beautiful UI
            components, ready-to-use layouts, and best practices. Clone it,
            customize it, make it yours!
          </p>
          <Button size="lg">View Documentation</Button>
          <p className="text-sm text-gray-500 mt-6">
            Free & Open Source • MIT License
          </p>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
