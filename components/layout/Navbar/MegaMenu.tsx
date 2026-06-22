"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  MENU_ITEMS,
  getItemLabel,
  getItemUrl,
  type SubItem,
} from "@/data/menu-items";

export type { SubItem } from "@/data/menu-items";
export { MENU_ITEMS } from "@/data/menu-items";

type MenuSubItem = {
  title?: string;
  name?: string;
  href: string;
  subItems: SubItem[] | { [category: string]: SubItem[] };
};

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <nav className="flex items-center gap-8">
      {Object.entries(MENU_ITEMS).map(([key, menu]) => (
        <div
          key={key}
          className="relative"
          onMouseEnter={() => menu.items && setActiveMenu(key)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubMenu(null);
          }}
        >
          {menu.href ? (
            <Link
              href={menu.href}
              className="py-4 px-2 font-medium text-[15px] text-heading/80 hover:text-heading transition-colors"
            >
              {menu.title}
            </Link>
          ) : (
            <button
              className="flex items-center gap-2 py-4 px-2 font-medium text-[15px] text-heading/80 hover:text-heading transition-colors"
              aria-expanded={activeMenu === key}
            >
              {menu.title}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs transition-transform duration-300 ${
                  activeMenu === key ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {menu.items && (
            <AnimatePresence>
              {activeMenu === key && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/5 z-40"
                    onClick={() => {
                      setActiveMenu(null);
                      setActiveSubMenu(null);
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full -left-4 bg-white shadow-lg rounded-2xl py-8 ${menu.width} z-50`}
                  >
                    <div className="px-8">
                      <div className="flex">
                        <div className="w-64 border-r border-gray-100">
                          {menu.items.map((item: MenuSubItem) => (
                            <div
                              key={item.title || item.name}
                              onMouseEnter={() =>
                                setActiveSubMenu(
                                  (item.title || item.name) ?? null
                                )
                              }
                              className={`group px-4 py-3 cursor-pointer rounded-lg transition-colors ${
                                activeSubMenu === (item.title || item.name)
                                  ? "bg-primary/5 text-primary"
                                  : "hover:bg-gray-50"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium">
                                  {item.title || item.name}
                                </span>
                                {item.subItems && (
                                  <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="text-xs opacity-50"
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex-1 pl-8">
                          <AnimatePresence mode="wait">
                            {activeSubMenu &&
                              menu.items.find(
                                (item: MenuSubItem) =>
                                  (item.title || item.name) === activeSubMenu
                              )?.subItems && (
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 20 }}
                                  transition={{ duration: 0.2 }}
                                  className="py-3"
                                >
                                  {(() => {
                                    const activeItem = menu.items?.find(
                                      (item: MenuSubItem) =>
                                        (item.title || item.name) ===
                                        activeSubMenu
                                    );

                                    if (!activeItem?.subItems) return null;

                                    if (
                                      typeof activeItem.subItems === "object" &&
                                      !Array.isArray(activeItem.subItems)
                                    ) {
                                      return Object.entries(
                                        activeItem.subItems as {
                                          [key: string]: SubItem[];
                                        }
                                      ).map(([category, items]) => (
                                        <div key={category} className="mb-6">
                                          <h3 className="font-medium text-heading mb-2">
                                            {category}
                                          </h3>
                                          <div className="space-y-2">
                                            {items.map((subItem) => (
                                              <Link
                                                key={
                                                  typeof subItem === "string"
                                                    ? subItem
                                                    : subItem.href
                                                }
                                                href={getItemUrl(
                                                  activeItem.href,
                                                  subItem
                                                )}
                                                className="block text-sm text-muted hover:text-primary transition-colors"
                                                onClick={() => {
                                                  setActiveMenu(null);
                                                  setActiveSubMenu(null);
                                                }}
                                              >
                                                • {getItemLabel(subItem)}
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ));
                                    }

                                    return (
                                      <div className="space-y-2">
                                        {(activeItem.subItems as SubItem[]).map(
                                          (subItem) => (
                                            <Link
                                              key={
                                                typeof subItem === "string"
                                                  ? subItem
                                                  : subItem.href
                                              }
                                              href={getItemUrl(
                                                activeItem.href,
                                                subItem
                                              )}
                                              className="block text-sm text-muted hover:text-primary transition-colors"
                                              onClick={() => {
                                                setActiveMenu(null);
                                                setActiveSubMenu(null);
                                              }}
                                            >
                                              ○ {getItemLabel(subItem)}
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    );
                                  })()}
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}
