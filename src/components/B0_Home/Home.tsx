import React from "react";
import style from './home.module.scss';
import home from '../../assets/png/home.png';
import ellips from '../../assets/png/home_ellips.png';

import {svgIcons} from "../../assets/svg/svgIcons";
import {OutlinedButtonWithIconAndText} from "../../common/OutlinedButtonWithIconAndText/OutlinedButtonWithIconAndText";
import {Button} from "../../common/Button/Button";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";

const text = 'CopyCash is a Decentralized DeFi Social Copytrading platform. Invest and trade, follow the best traders and earn profits! Some more text goes here to match about 4 lines of text.'

export const socialButtons = [
    {
        href: '#',
        text: 'Telegram group',
        icon: svgIcons.telegram_fill,
    },
    {
        href: '#',
        text: 'whitepaper',
        icon: svgIcons.whitepaper,
    },
    {
        href: '#',
        text: 'one pager',
        icon: svgIcons.one_paper,
    },
];


export const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.innerWrapper}>

                <div className={style.leftBlock}>

                    <div className={style.titleWrapper}>
                        <h1 className={style.title}
                        >Social copy trading <span>decentralized</span></h1>
                        <img src={ellips} alt="" className={style.img}/>
                    </div>


                    <div className={style.buttons}>
                        {
                            socialButtons.map((el, i) => (
                                <OutlinedButtonWithIconAndText key={i}
                                                               text={el.text}
                                                               href={el.href}
                                                               icon={el.icon}
                                                               className={style.button}
                                />
                            ))
                        }
                    </div>

                    <p className={style.text}>{text}</p>

                    <div className={style.bottomBlock}>
                        <div className={style.bottomBlock_left}>
                            <Button text='Buy cash tokens' className={style.button}/>
                            <p className={style.bottomBlock_left_text}>Sale date: 18 Dec 16:00 UTC</p>
                        </div>
                        <a href="#" className={style.bottomBlock_link}>
                            <span className={style.bottomBlock_link_text}>Why should I buy CASH tokens?</span>
                            <SvgIcon icon={svgIcons.arrow_drop_right_line} className={style.bottomBlock_link_icon}/>
                        </a>
                    </div>

                </div>





                <img src={home} alt="" className={style.img}/>

            </div>

        </div>
    )
}