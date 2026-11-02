import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "CV", href: "#cv" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--navbar-bg)] backdrop-blur-xl transition-colors duration-300">
      <nav className="container-custom flex h-16 items-center justify-between sm:h-18 lg:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="relative z-50 text-lg font-black tracking-tight text-[var(--foreground)] transition-colors sm:text-xl"
        >
          <span className="text-[var(--accent)]">&lt;</span>
          AH
          <span className="text-[var(--accent)]">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-xs font-semibold text-[var(--muted)] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:text-[var(--foreground)] hover:after:w-full lg:text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:h-10 sm:w-10"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--navbar-mobile-bg)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="container-custom flex flex-col py-3">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="group flex items-center justify-between border-b border-[var(--border)] py-4 text-sm font-semibold text-[var(--muted)] transition-colors last:border-b-0 hover:text-[var(--accent)]"
            >
              <span>{item.name}</span>

              <span className="text-[10px] font-bold text-[var(--muted-dark)] transition-colors group-hover:text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;