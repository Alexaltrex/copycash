import React from "react";
import style from './howItWorks.module.scss';
//import howItWorks_scheme from '../../assets/png/howItWorks_scheme.png';
import howItWorks_scheme from '../../assets/webp/howItWorks_scheme.webp';
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";


export const HowItWorks = () => {
    const {ref, intersected} = useInter();

    return (
        <section className={style.wrapper}
                 ref={ref}
        >
            <h2 className={style.title_mobile}>
                <span>Here is</span>
                <span>how it works</span>
            </h2>

            <div className={clsx(style.howItWorks, intersected && style.howItWorks_inter)}>
                <h2 className={style.title_desktop}>
                    <span>Here is</span>
                    <span>how it works</span>
                </h2>
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