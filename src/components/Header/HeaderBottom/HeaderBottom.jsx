import React from "react";
import { NavLink } from "../../NavLink/NavLink";
import styles from "./HeaderBottom.module.scss";

import { LINKS } from "../../../utils/constants";

const HeaderBottom = () => {
    return (
        <div className={styles.headerBottom}>
            {LINKS.map((link) => (
                <NavLink key={link.id} name={link.name} />
            ))}
        </div>
    );
};

export default HeaderBottom;
