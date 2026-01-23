type MobileMenuButtonProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MobileMenuButton({ open, setOpen }: MobileMenuButtonProps) {
  return (
    <button
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      className="fixed right-5 top-4 z-[60] flex h-10 w-10 items-center justify-center">
      {/* Linha 1 */}
      <span
        className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-in-out ${
          open ? "rotate-45" : "-translate-y-2"
        }`}
      />

      {/* Linha 2 */}
      <span
        className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-in-out ${
          open ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
}
