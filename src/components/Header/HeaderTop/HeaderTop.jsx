import React, { useState } from "react";
import styles from "./HeaderTop.module.scss";
import { ReactComponent as Logo } from "../../../assets/Logo.svg";
import { ReactComponent as LogIn } from "../../../assets/loginIco.svg";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";

export const HeaderTop = ({ menuIsOpen, handleMenuOpen }) => {
    console.log(menuIsOpen);
    return (
        <div className={styles.headerTop}>
            <div className={styles.headerLeft}>
                <Logo className={styles.logo} />
                <p className={styles.logoSlogan}>Первый цифровой международный юридический центр</p>
            </div>
            <div className={styles.headerRight}>
                <a className={styles.phone} href="tel:88005113768">
                    8 (800) 511-37-68
                </a>
                <div className={styles.buttonWrapper}>
                    <PrimaryButton>
                        <p>Войти</p>
                    </PrimaryButton>
                </div>
                <LogIn className={styles.logInButton} />
                <div onClick={handleMenuOpen} className={styles.burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};
