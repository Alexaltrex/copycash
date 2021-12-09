import React from "react";
import style from './wallet.module.scss';
import wallet_0 from '../../assets/png/wallet_0.png';
import wallet_1 from '../../assets/png/wallet_1.png';
import wallet_2 from '../../assets/png/wallet_2.png';
import wallet_3 from '../../assets/png/wallet_3.png';
import check from '../../assets/png/check.png';
import logo from '../../assets/webp/wallet_logo.webp';
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

export interface IItem {
    src: string
    title: string
    text: string
};

const items: IItem[] = [
    {
        src: wallet_0,
        title: 'DeFi wallet.',
        text: 'Real world finance',
    },
    {
        src: wallet_1,
        title: 'DeFi farming.',
        text: 'Easy access to your funds',
    },
    {
        src: wallet_2,
        title: 'Copy traders.',
        text: 'Withdraw earnings',
    },
    {
        src: wallet_3,
        title: 'Trade anywhere.',
        text: 'Take your cash',
    },
];

export const Wallet = () => {
    const {ref, intersected} = useInter();

    return (
        <section className={style.wallet} ref={ref}
        >
            <div className={style.card}>
                <div className={clsx(style.inner, intersected && style.inner_inter)}>

                    <div className={style.firstBlock}>
                        <div className={style.titleWrapper}>
                            <h2 className={style.title1}>Copycash</h2>
                            <h2 className={style.title2}>Wallet & Cards</h2>
                        </div>

                        <div className={style.items}>
                            {
                                items.map((item, i) => (
                                    <div className={style.item} key={i}>
                                        <img className={style.img} src={item.src} alt=""/>
                                        <div className={style.texts}>
                                            <p className={style.itemTitle}>{item.title}</p>
                                            <p className={style.text}>{item.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className={style.cardBlock}>
                            <div className={style.cardBlockInner}>
                                <div className={style.cardHeader}>
                                    <img src={check} alt=""/>
                                    <p className={style.cardHeaderTitle}>Your funds always in your pocket</p>
                                </div>
                                <p className={style.description}>
                                    Thanks to hybrid financial module, CopyCash has always promoted the idea that cryptocurrencies will become the universal means of payment. The team has already started working on emission of our own debit card to give every crypto enthusiast an opportunity to pay for his daily expenses and purchases with cryptocurrency using a plastic card powered by CopyCash.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div className={style.secondBlock}>
                        <img src={logo} alt=""/>
                    </div>



                </div>
            </div>

        </section>
    )
}