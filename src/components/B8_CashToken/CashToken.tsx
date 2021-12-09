import React from "react";
import style from './cashToken.module.scss';
import ellipse from '../../assets/png/home_ellips.png';
import check from '../../assets/png/check.png';
import cashToken_logo from '../../assets/webp/cashToken_logo.webp';
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

const card1 = [
    'PAY FEES',
    'LIQUIDITY POOLS',
    'FARMING',
    'ELASTIC SUPPLY AND DEFLATION',
    'DECENTRALIZED AFFILIATE PROGRAMM',
];

const card2 = [
    'PAY FEES',
    'LIQUIDITY POOLS',
    'FARMING',
    'ELASTIC SUPPLY AND DEFLATION',
    'DECENTRALIZED AFFILIATE PROGRAMM',
];

export const CashToken = () => {
    const {ref, intersected} = useInter();

    return (
        <section className={style.cashToken}
                 ref={ref}
        >
            <div className={clsx(style.inner, intersected && style.inner_inter)}>

                <div className={style.titleBlock}>
                    <h2 className={style.title}>Cash token applications</h2>
                    <img src={ellipse} alt=""/>
                </div>

                <div className={style.cards}>
                    <img  className={style.logo} src={cashToken_logo} alt=""/>

                    <div className={style.card}>
                        <div className={style.card_title}>Features/Utility</div>
                        <div className={style.items}>
                            {
                                card1.map((el, i) => (
                                    <div className={style.item} key={i}>
                                        <img src={check} alt=""/>
                                        <p className={style.item_text}>{el}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.card_title}>Financial management</div>
                        <div className={style.items}>
                            {
                                card2.map((el, i) => (
                                    <div className={style.item} key={i}>
                                        <img src={check} alt=""/>
                                        <div className={style.item_text}>{el}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}