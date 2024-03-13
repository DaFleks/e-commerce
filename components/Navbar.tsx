"use client";

import { ChevronLeftIcon, FlameIcon, MenuIcon, UserCircle2Icon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  //  Hooks
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((st) => !st);
  };

  return (
    <>
      <nav className="h-[75px] fixed w-full p-2 border flex items-center justify-between">
        <Button variant="ghost" className="p-2">
          <FlameIcon />
        </Button>
        <h3 className="text-2xl font-semibold select-none">Home</h3>
        <Button variant="ghost" className={`${menuOpen ? "bg-gray-100" : ""}`} onClick={handleMenuOpen}>
          <MenuIcon />
        </Button>
      </nav>
      {menuOpen && (
        <nav className="h-[calc(100%-75px)] top-[75px] fixed w-full bg-red-500 container">
          <div className="flex flex-col text-end mt-4 gap-8 text-xl font-semibold">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">Categories</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Contact</Link>
          </div>
        </nav>
      )}
    </>
  );
};
export default Navbar;

// home
// faq
