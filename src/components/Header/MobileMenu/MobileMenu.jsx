import React from "react";
import styles from "./MobileMenu.module.css";

import { NavLink } from "../../NavLink/NavLink";
import { LINKS } from "../../../utils/constants";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ menuIsOpen, handleMenuOpen }) => {
    return (
        <div className={menuIsOpen ? `${styles.mobileMenuWrapper} ${styles.active}` : `${styles.mobileMenuWrapper}`}>
            {LINKS.map((link) => (
                <NavLink key={link.id} name={link.name} />
            ))}
            <AiOutlineClose onClick={handleMenuOpen} size={25} className={styles.close} />
        </div>
    );
};

export default MobileMenu;
