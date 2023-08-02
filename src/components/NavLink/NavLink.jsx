import React, { useState } from "react";
import styles from "./NavLink.module.scss";

export const NavLink = (props) => {
    const [isActive, setIsActive] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке при клике
        setIsActive(!isActive);
    };

    return (
        <div>
            <a onClick={clickHandler} className={styles.link} href="#">
                {props.name}
            </a>
        </div>
    );
};
