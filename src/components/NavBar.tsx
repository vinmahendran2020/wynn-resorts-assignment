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
    { name: "ROOMS & SUITES" },
    { name: "WYNN REWARDS" },
    { name: "OFFERS" },
    { name: "DINING" },
    { name: "ENTERTAINMENT" },
    { name: "MEETINGS & EVENTS" },
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
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-black text-lg font-semibold px-4 hover:bg-green-180"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false)
                    }}
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
      {navItems.map((item, index) => (
        <Link key={index} href='#' className="relative text-black font-semibold no-underline text-medium-b3 hover:border-b-2 hover:border-green-180">
          <span
            className={`pb-1 transition-all duration-300 border-b-2 border-black"`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
