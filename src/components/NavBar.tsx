"use client";

import { useBreakpoints } from "@/hooks/useBreakpoints";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Hamburger } from "@/icons";
import cn from "./utils/classnames";
import useOutsideClick from "@/hooks/useOutsideEvent";

const NavBar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { isAtLeastMedium } = useBreakpoints()
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null)

  const navItems = [
    { name: "ROOMS & SUITES", path: "/rooms" },
    { name: "WYNN REWARDS", path: "/rewards" },
    { name: "OFFERS", path: "/offers" },
    { name: "DINING", path: "/dining" },
    { name: "ENTERTAINMENT", path: "/entertainment" },
    { name: "MEETINGS & EVENTS", path: "/meetings" },
  ]

  useOutsideClick({
    handler: () => setIsOpen(false),
    ref,
  })

  if (!isAtLeastMedium) {
    return (
      <nav className={cn('bg-white', className)}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4" ref={ref}>
            <Hamburger width={28} onClick={() => setIsOpen(!isOpen)} />
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white border-t py-4"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-black text-lg font-semibold px-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className={cn('flex justify-center space-x-8 py-4 bg-white', className)}>
      {navItems.map((item) => (
        <Link key={item.path} href={item.path} className="relative text-black font-semibold no-underline text-medium-b3">
          <span
            className={`pb-1 transition-all duration-300 ${pathname === item.path ? "border-b-2 border-black" : "hover:border-b-2 hover:border-gray-400"
              }`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
