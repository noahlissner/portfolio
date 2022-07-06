import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonCV } from "./Buttons";
import NavItem from "./NavItem";

import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <IoSunny
          size={24}
          color="white"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <IoMoon
          size={24}
          color="black"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="h-[100px] flex items-center">
      <nav className="wrapper flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl cursor-pointer text-c-light-high dark:text-c-dark-high">
            NOAH LISSNER
          </h1>
        </Link>
        <ul className="hidden md:flex items-center gap-8 ">
          {/* <NavItem title={"Projects"} /> */}
          <NavItem title={"About"} />
          <NavItem title={"Contact"} />
          <NavItem title={"Blog"} />
        </ul>
        <div className="flex items-center gap-5">
          <ButtonCV />
          {renderThemeChanger()}
        </div>
      </nav>
    </div>
  );
};

export default Header;
