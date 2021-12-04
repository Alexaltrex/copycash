import React from "react";
import style from './howItWorks.module.scss';
import howItWorks_scheme from '../../assets/png/howItWorks_scheme.png';


export const HowItWorks = () => {
    return (
        <section className={style.wrapper}>
            <h2 className={style.howItWorks_title}>
                <span>Here is</span>
                <span>how it works</span>
            </h2>
            <div className={style.howItWorks}>
                <div className={style.back}>
                    <img className={style.scheme}
                         src={howItWorks_scheme}
                         alt=""
                    />
                </div>


            </div>
        </section>

    )
};