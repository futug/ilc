import React from "react";
import styles from "./Hero.module.scss";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
import { ReactComponent as Ico1 } from "../../../assets/hero-ico-one.svg";
import { ReactComponent as Ico2 } from "../../../assets/hero-ico-two.svg";
import { ReactComponent as Ico3 } from "../../../assets/hero-ico-three.svg";
import { ReactComponent as Chart } from "../../../assets/hero-img-pseudo.svg";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div>
                    <h1 className={styles.heroTitle}>Юридический полис ILC — быстрое решение сложных вопросов 24/7</h1>
                    <p className={styles.heroDescription}>
                        Ваша личная команда профессиональных юристов, которая всегда под рукой. А также доступ к бонусам партнерской программы — доход до $260 с
                        каждого полиса, купленного по вашему приглашению.
                    </p>
                    <div className={styles.buttonWrapper}>
                        <PrimaryButton>
                            <p>Попробовать беслпатно</p>
                        </PrimaryButton>
                    </div>
                </div>
                <div className={styles.heroImgGroup}>
                    <img src="./hero-img.svg" alt="" />
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <Ico1 />
                            <p className={styles.featureTitle}>Юридическая поддержка 24/7</p>
                        </div>
                        <div className={styles.feature}>
                            <Ico2 />
                            <p className={styles.featureTitle}>Множество возможностей в одном полисе</p>
                        </div>
                        <div className={styles.feature}>
                            <Ico3 />
                            <p className={styles.featureTitle}>Бонусы партнерской программы</p>
                        </div>
                    </div>
                </div>

                <div>
                    <Chart className={styles.chart} />
                </div>
            </div>
            <div className={styles.featuresMobile}>
                <div className={styles.featureMobile}>
                    <Ico1 />
                    <p className={styles.featureTitle}>Юридическая поддержка 24/7</p>
                </div>
                <div className={styles.featureMobile}>
                    <Ico2 />
                    <p className={styles.featureTitle}>Множество возможностей в одном полисе</p>
                </div>
                <div className={styles.featureMobile}>
                    <Ico3 />
                    <p className={styles.featureTitle}>Бонусы партнерской программы</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
