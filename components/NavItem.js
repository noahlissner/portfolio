import React from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";

const NavItem = ({ title }) => {
  const router = useRouter();

  return (
    <li>
      <a
        href={`/${title.toLowerCase()}`}
        className={`nav-link text-c-light-high dark:text-c-dark-high ${
          router.asPath === "/" + title.toLowerCase() && "nav-link--active"
        }`}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
