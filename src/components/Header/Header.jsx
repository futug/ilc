import React, { useState } from "react";
import styles from "./Header.module.scss";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import MobileMenu from "./MobileMenu/MobileMenu";
import { createBreakpoint } from "react-use";

const useBreakpoint = createBreakpoint();

export const Header = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const breakpoint = useBreakpoint();

    const handleMenuOpen = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerDecor}></div>
            <HeaderTop menuIsOpen={menuIsOpen} handleMenuOpen={handleMenuOpen} />
            {breakpoint === "laptop" || breakpoint === "laptopL" ? <HeaderBottom /> : <MobileMenu menuIsOpen={menuIsOpen} handleMenuOpen={handleMenuOpen} />}
        </header>
    );
};
