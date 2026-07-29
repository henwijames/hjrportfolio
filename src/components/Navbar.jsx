import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "01. // ABOUT", href: "#about" },
    { label: "02. // WORKS", href: "#projects" },
    { label: "03. // ACTIVITY", href: "#activity" },
    { label: "04. // CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md transition-transform duration-300 ${
        isVisible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Centered Container with Outer Left/Right Borders */}
      <div className="max-w-7xl mx-auto border-x border-neutral-200 dark:border-neutral-800 flex items-center justify-between h-16 px-4 sm:px-6 pr-4 md:pr-0">
        {/* Logo / Brand Indicator */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:opacity-80 transition-opacity"
        >
          <span className="h-2 w-2 bg-neutral-900 dark:bg-neutral-100" />
          <span>{"<Henry />"}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center h-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="h-full flex items-center px-5 font-mono text-xs text-neutral-600 dark:text-neutral-400 border-l border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-900/50 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Action / Resume Button on Far Right */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex items-center px-6 font-mono text-xs font-medium text-neutral-900 dark:text-neutral-100 bg-neutral-200/50 dark:bg-neutral-800/50 border-l border-neutral-200 dark:border-neutral-800 hover:bg-neutral-900 hover:text-neutral-50 dark:hover:bg-neutral-100 dark:hover:text-neutral-900 transition-all"
          >
            RESUME ↗
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 font-mono text-xs text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded-none focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-6xl mx-auto border-x border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block p-4 border-b border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 text-center bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 font-medium"
          >
            DOWNLOAD RESUME ↗
          </a>
        </div>
      )}
    </header>
  );
}
