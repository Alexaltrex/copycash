import React from "react";
import style from './partners.module.scss';

import src0 from '../../assets/png/partners_0.png';
import src1 from '../../assets/png/partners_1.png';
import src2 from '../../assets/png/partners_2.png';
import src3 from '../../assets/png/partners_3.png';
import src4 from '../../assets/png/partners_4.png';
import src5 from '../../assets/png/partners_5.png';
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

const text = [
    'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
];

const items = [
    {src: src0, text: text[0]},
    {src: src1, text: text[1]},
    {src: src2, text: text[2]},
    {src: src3, text: text[3]},
    {src: src4, text: text[4]},
    {src: src5, text: text[5]},
];

export const Partners = () => {
    const {ref, intersected} = useInter();
    return (
        <section className={style.partners} ref={ref}>
            <div className={clsx(style.inner, intersected && style.inner_inter)}>
                <h2 className={style.title}>Key <span>partners</span></h2>
                <div className={style.items}>
                    {
                        items.map((item, i) => (
                                <div className={style.item} key={i}>
                                    <img className={style.img} src={item.src} alt=""/>
                                    <div className={style.text}>{item.text}</div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}