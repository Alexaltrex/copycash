import React from "react";
import style from './traders.module.scss';
import trader_0 from '../../assets/png/trader_0.png';
import trader_1 from '../../assets/png/trader_1.png';
import trader_2 from '../../assets/png/trader_2.png';
import trader_3 from '../../assets/png/trader_3.png';
import ellips from '../../assets/png/home_ellips.png';
import trader_card_back from '../../assets/png/trader_card_back.png';
import traders_curve from '../../assets/png/traders_curve.png';
import phones from '../../assets/webp/traders_phones.webp';
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";


const traders = [
    {
        src: trader_0,
        mail: '@madmax',
        name: 'Max Ahmad',
        procent: 164,
        month: 6,
        profit: 24
    },
    {
        src: trader_1,
        mail: '@haleema',
        name: 'Haleema Holding',
        procent: 172,
        month: 9,
        profit: 32
    },
    {
        src: trader_2,
        mail: '@saminayoder',
        name: 'Samina Yoder',
        procent: 128,
        month: 4,
        profit: 19
    },
    {
        src: trader_3,
        mail: '@pucket99',
        name: 'Kobi Puckett',
        procent: 196,
        month: 11,
        profit: 49
    },
];
const column_0 = [traders[0], traders[1]];
const column_1 = [traders[2], traders[3]];
const columns = [column_0, column_1];

export const Traders = () => {
    const {ref, intersected} = useInter();

    return (
        <section className={style.traders}
                 ref={ref}
        >
            <div className={clsx(style.inner, intersected && style.inner_inter)}>


                <div className={style.titleWrapper}>
                    <h2 className={style.title}>Copy</h2>
                    <h2 className={style.title}>the best traders</h2>
                    <img className={style.ellipse} src={ellips} alt=""/>
                    <img className={style.phones} src={phones} alt=""/>
                </div>

                <div className={style.tradersCards}>
                    {
                        columns.map((column, i) => (
                            <div className={style.column} key={i}>
                                {
                                    column.map((card, j) => (
                                        <div className={style.card} key={j}>
                                            <div className={style.backWrapper}>
                                                <img className={style.back} src={trader_card_back} alt=""/>
                                            </div>

                                            <img className={style.avatar} src={card.src} alt=""/>
                                            <div className={style.mail}>{card.mail}</div>
                                            <div className={style.name}>{card.name}</div>
                                            <div className={style.info}>
                                                <span
                                                    className={style.procent}>{`+${card.procent}%`}</span> for <span>{card.month}</span> month
                                            </div>
                                            <div className={style.innerCard}>
                                                <img className={style.curve} src={traders_curve} alt=""/>
                                                <div className={style.profit}>{`+${card.profit}%`}</div>
                                                <div className={style.profitDescription}>Profit for last 30 days</div>
                                                <button className={style.btn}>
                                                    <SvgIcon icon={svgIcons.copy}/>
                                                    <div className={style.text}>COPY</div>
                                                </button>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

                <img className={style.phones} src={phones} alt=""/>


            </div>
        </section>
    )
};