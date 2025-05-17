"use client";
import Image from "next/image";
import { UserProvider, useUser } from "../context/UserContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X, ChevronRight, UserPlus, Zap, BarChart3 } from "lucide-react";

const HomePage = () => {
  const { user } = useUser();
  const [theme, setTheme] = useState("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme") || "light";
      document.documentElement.classList.toggle("dark", saved === "dark");
      setTheme(saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen w-full transition-colors duration-500 bg-gray-50 dark:bg-gray-900">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
        </div>

        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300 text-transparent bg-clip-text">Hiresense</h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Features</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">Pricing</a>
                {user?.email && (
                  <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors">
                    Dashboard
                  </Link>
                )}
                <div className="ml-4 h-6 w-px bg-gray-300 dark:bg-gray-700"></div>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
                <Link href={user?.email ? "/dashboard" : "/auth"}>
                  <button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                    {user?.email ? "Dashboard" : "Get Started"}
                  </button>
                </Link>
              </nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center gap-2 md:hidden">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  ) : (
                    <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 py-2 font-medium">Home</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 py-2 font-medium">Features</a>
                <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 py-2 font-medium">Pricing</a>
                {user?.email && (
                  <Link href="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 py-2 font-medium">
                    Dashboard
                  </Link>
                )}
                <Link href={user?.email ? "/dashboard" : "/auth"}>
                  <button className="w-full mt-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
                    {user?.email ? "Dashboard" : "Get Started"}
                  </button>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="flex-grow">
          <section className="py-20 md:py-32 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block mb-4 px-4 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium">
                Reimagining Recruitment
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-emerald-500 to-cyan-500 dark:from-teal-300 dark:via-emerald-300 dark:to-cyan-300 text-transparent bg-clip-text leading-tight">
                Smart Hiring <br /> Starts Here
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                Hiresense empowers recruiters and candidates with AI insights to transform the hiring experience from application to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={user?.email ? "/dashboard" : "/auth"}>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                    Get Started Free
                  </button>
                </Link>
                <button className="w-full sm:w-auto bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-lg">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { value: "60%", label: "Faster hiring process" },
                { value: "87%", label: "More accurate matching" },
                { value: "3.5x", label: "ROI for recruiters" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-100 dark:border-gray-700 shadow-md">
                  <p className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-300 text-transparent bg-clip-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-gradient-to-b from-transparent to-white/80 dark:to-gray-800/30">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Powerful Features for Modern Hiring
              </h3>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: "AI Talent Matching",
                    desc: "Precision-driven candidate recommendations based on role fit and soft skills analysis.",
                    icon: <UserPlus className="w-6 h-6" />,
                    cta: "Discover",
                  },
                  {
                    title: "One-Click Hiring",
                    desc: "Reduce hiring time by 60% with seamless screening, scheduling, and offers.",
                    icon: <Zap className="w-6 h-6" />,
                    cta: "How it Works",
                  },
                  {
                    title: "Predictive Analytics",
                    desc: "Make smarter choices using insights from market trends and behavior patterns.",
                    icon: <BarChart3 className="w-6 h-6" />,
                    cta: "View Insights",
                  },
                ].map(({ title, desc, icon, cta }, i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group border border-gray-100 dark:border-gray-700"
                  >
                    <div className="p-6">
                      <div className="w-12 h-12 mb-4 rounded-lg bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-300">
                        {icon}
                      </div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                        {title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed">
                        {desc}
                      </p>
                      <button className="flex items-center text-teal-600 dark:text-teal-300 font-medium group-hover:text-teal-700 dark:group-hover:text-teal-200 transition-colors">
                        {cta}
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg mr-2">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  &copy; {new Date().getFullYear()} Hiresense. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6">
                <a href="/terms" className="text-gray-600 dark:text-gray-300 text-sm hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Terms</a>
                <a href="/privacy" className="text-gray-600 dark:text-gray-300 text-sm hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Privacy</a>
                <a href="/contact" className="text-gray-600 dark:text-gray-300 text-sm hover:text-teal-600 dark:hover:text-teal-300 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </UserProvider>
  );
};

export default HomePage;