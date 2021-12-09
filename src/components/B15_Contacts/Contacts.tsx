import React, {FC} from "react";
import style from './contacts.module.scss';
import {svgIcons} from "../../assets/svg/svgIcons";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {Button} from "../../common/Button/Button";
import ellipse from '../../assets/png/home_ellips.png';
import coins from '../../assets/png/contacts_coins.png';
import {blockB, blockC, blockD, contacts, footerText} from "./consts";
import {theme} from "../../theme/theme";
import {useMediaQuery} from "@mui/material";
import SwiperClass from "swiper/types/swiper-class";
import {BlockLinks} from "./BlockLinks";
import contacts_link_logo_0 from '../../assets/png/contacts_link_logo_0.png';
import contacts_link_logo_1 from '../../assets/png/contacts_link_logo_1.png';
import footer from '../../assets/webp/footer.webp';
import {socialLinks} from "../../constants/constants";
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

export interface IContacts {
    swiper: SwiperClass | undefined
    onClickHandler: (i: number) => void
}

export const Contacts: FC<IContacts> = ({swiper, onClickHandler}) => {
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const {ref, intersected} = useInter();

    return (
        <section className={style.contacts} ref={ref}
        >
            <div className={clsx(style.inner, intersected && style.inner_inter)}>

                <h2 className={style.title}>
                    <span>Get in touch.</span> Keep updated
                </h2>

                <div className={style.subtitleWrapper}>
                    <div className={style.subtitle}>Got a question?</div>
                    <div className={style.subtitle}>Our support admins are available 24/7</div>
                </div>

                <div className={style.cards}>
                    {
                        contacts.map((card, i) => (
                            <a className={style.card} key={i} href={card.href}>
                                <div className={style.icons}>
                                    <div className={style.firstIconWrapper}
                                         style={{
                                             background: card.background
                                         }}
                                    >
                                        <SvgIcon icon={card.icon_0}/>
                                    </div>
                                    <div className={style.secondIconWrapper}>
                                        <SvgIcon icon={card.icon_1}/>
                                    </div>
                                </div>

                                <div className={style.texts}>
                                    <div className={style.text}>{card.text}</div>
                                    <SvgIcon icon={svgIcons.arrow_drop_right_line}
                                             className={style.arrow}
                                    />
                                </div>


                            </a>
                        ))
                    }
                </div>

                <div className={style.logoBox}>
                    <img className={style.coins} src={coins} alt=""/>

                    <div className={style.titleWrapper}>
                        <img className={style.ellipse} src={ellipse} alt=""/>
                        <div className={style.titleWrapper_title}>Purchase</div>
                        <div className={style.titleWrapper_title}>CASH tokens now!</div>
                    </div>

                    <Button className={style.btn}
                            text="Buy cash tokens"
                            type="white"
                    />
                </div>

                <div className={style.footerWrapper}>

                    <img className={style.footer_back} src={footer} alt=""/>
                    <div className={style.mask}/>
                    <footer className={style.footer}>

                        <div className={style.blockA}>
                            <SvgIcon className={style.blockA_logo} icon={svgIcons.logo}/>
                            <div className={style.blockA_text}>{footerText}</div>
                            <div className={style.blockA_copy}>© CopyCash. All rights reserved, 2021</div>
                        </div>

                        <BlockLinks className={style.blockB}
                                    block={blockB}
                                    swiper={swiper}
                                    onClickHandler={onClickHandler}
                                    isDesktop={isDesktop}
                        />

                        <BlockLinks className={style.blockC}
                                    block={blockC}
                                    swiper={swiper}
                                    onClickHandler={onClickHandler}
                                    isDesktop={isDesktop}
                        />

                        <BlockLinks className={style.blockD}
                                    block={blockD}
                                    swiper={swiper}
                                    onClickHandler={onClickHandler}
                                    isDesktop={isDesktop}
                        />

                        <div className={style.blockE}>
                            <div className={style.text}>apps coming soon</div>
                            <div className={style.links}>
                                <a href="#" className={style.link}>
                                    <img src={contacts_link_logo_0} alt=""/>
                                </a>
                                <a href="#" className={style.link}>
                                    <img src={contacts_link_logo_1} alt=""/>
                                </a>
                            </div>
                        </div>

                        <div className={style.blockF}>
                            <div className={style.firstBlock}>
                                <div className={style.firstBlock_title}>we’re in socials</div>
                                <div className={style.firstBlock_links}>
                                    {
                                        socialLinks.map((link, i) => (
                                            <a href={link.url} key={i}>
                                                <SvgIcon icon={link.icon}/>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={style.secondBlock}>© CopyCash. All rights reserved, 2021</div>
                        </div>


                    </footer>
                </div>


            </div>
        </section>
    )
}