"use client";

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  size?: number;
  className?: string;
}

export default function MenuButton({
  isOpen,
  setIsOpen,
  size = 24,
  className = ""
}: MenuButtonProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`inline-flex items-center justify-center transition-colors ${className}`}
      aria-expanded={isOpen}
      aria-label="Toggle Menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-all duration-300"
      >
        {isOpen ? (
          /* X Icon Path */
          (<>
            <path d="M0 0 L24 24" />
            <path d="M24 0 L0 24" />
          </>)
        ) : (
          /* Hamburger Icon Path */
          (<>
            <line x1="0" y1="4" x2="24" y2="4" />
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="20" x2="24" y2="20" />
          </>)
        )}
      </svg>
    </button>
  );
}