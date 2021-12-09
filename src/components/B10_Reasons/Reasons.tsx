import React from "react";
import style from './reasons.module.scss';
import ellips from '../../assets/png/home_ellips.png';
import flags from '../../assets/webp/flags.webp';
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";


const items = [
    {
        number: '01',
        title: 'Reason number one',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    },
    {
        number: '02',
        title: 'Reason number two',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    },
    {
        number: '03',
        title: 'Reason number three',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    },
    {
        number: '04',
        title: 'Reason number four',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    },
    {
        number: '05',
        title: 'Reason number five',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
    },
];

export const Reasons = () => {
    const {ref, intersected} = useInter();
    return (
        <section className={style.reasons}
                 ref={ref}
        >

            <img className={style.flags} src={flags} alt=""/>

            <div className={clsx(style.inner, intersected && style.inner_inter)}>
                <div className={style.titleWrapper}>
                    <h2 className={style.title}>5 reasons to <span>purchase</span></h2>
                    <h2 className={style.title}>CASH token</h2>
                    <img src={ellips} alt=""/>
                </div>

                <div className={style.items}>
                    {
                        items.map((item, i) => (
                                <div className={style.item} key={i}>
                                    <div className={style.number}>{item.number}</div>
                                    <div className={style.title}>{item.title}</div>
                                    <div className={style.text}>{item.text}</div>
                                </div>
                            )
                        )
                    }

                </div>


            </div>
        </section>
    )
};