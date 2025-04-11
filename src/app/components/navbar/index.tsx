"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import styles from "../navbar/styles.module.scss";
import Image from "next/image";
import logo from "../../../../public/assets/images/logo.svg";
import menu from "../../../../public/assets/images/hamburger_white.svg";
import exit from "../../../../public/assets/images/hamburger_black.svg";
import { CartIcon, SearchIcon } from "../icons/icons";

const NavBar: React.FC<{ admin?: boolean }> = ({ admin }) => {
  const [color, setColor] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(true);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleMenu = (): void => {
    setMobile((open) => !open);
  };

  const changeColor = useCallback((): void => {
    setColor(window.scrollY >= 510);
    setScrolled(window.scrollY >= 510);
    if (!mobile) {
      setMobile(true);
    }
  }, [mobile]);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, [changeColor]);

  return (
    <div className={styles.wrapper}>
      <nav
        className={color ? styles.navbar_bg : styles.navbar}
        style={{
          backgroundColor: admin ? "#000" : "",
        }}
      >
        <div
          className={styles.logo_image}
          style={{
            // outline: "2px solid red",
            // height: "50px",
            overflow: "hidden",
          }}
        >
          <Link className={styles.white_logo} href="/">
            <Image
              src={logo}
              alt="logo"
              width={120}
              className={styles.logo_img}
              style={
                {
                  // outline: "2px solid blue",
                  // marginTop: "-20px",
                }
              }
            />
          </Link>
          <Link className={styles.black_logo} href="/">
            <Image
              src={logo}
              alt="logo"
              width={120}
              className={styles.logo_img}
              style={
                {
                  // outline: "2px solid blue",
                  // marginTop: "-20px",
                }
              }
            />
          </Link>
        </div>
        <div
          className={mobile ? styles.Navbar_List : styles.Navbar_List_isopen}
        >
          <ul>
            <span onClick={toggleMenu}>
              <Image className={styles.exx} src={exit} alt="menu" width={30} />
            </span>

            <li onClick={() => handleScroll("why-us")}>Home</li>
            <li onClick={() => handleScroll("about-us")}>Product</li>
            <li onClick={() => handleScroll("property-listing")}>About Us</li>
            <li onClick={() => handleScroll("faqs")}>Deals</li>
          </ul>
        </div>
        <div className={styles.container_search}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search" />
            <SearchIcon className={styles.searchIcon} />
          </div>
          <CartIcon className={styles.cartIcon} />
        </div>
        <div id={styles.Hamburger}>
          <span className="Hamburger span" onClick={toggleMenu}>
            <div className="Hamburger">
              {mobile ? (
                <Image src={scrolled ? menu : menu} alt="menu" width={25} />
              ) : (
                <Image src={exit} alt="menu" width={20} />
              )}
            </div>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
