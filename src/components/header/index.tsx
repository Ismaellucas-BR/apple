import { useState } from "react";
import { MobileMenuButton } from "../MobileMenuButton";
import Logo from "../../assets/svgs/Logo";
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 py-4">
        <Logo />

        <MobileMenuButton open={open} setOpen={setOpen} />
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}>
        <nav className="flex h-full flex-col items-center justify-center gap-8 text-xl">
          <a onClick={() => setOpen(false)} href="#">
            iPhone
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Mac
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Watch
          </a>
          <a onClick={() => setOpen(false)} href="#">
            Support
          </a>
        </nav>
      </div>
    </header>
  );
}
