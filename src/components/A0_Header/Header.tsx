import React, {FC} from "react";
import style from './header.module.scss';
import {HashLink} from 'react-router-hash-link';
import {svgIcons} from "../../assets/svg/svgIcons";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {Button} from "../../common/Button/Button";
import {slides, socialLinks} from "../../constants/constants";
import SwiperClass from "swiper/types/swiper-class";
import clsx from "clsx";

export interface IHeader {
    currentIndex: number
    setCurrentIndex: (i: number) => void
    swiper: SwiperClass | undefined
    isSliding: boolean
    isBurgerMenuOpen: boolean
    setIsBurgerMenuOpen: () => void
}

export const Header: FC<IHeader> = ({
                                        currentIndex,
                                        setCurrentIndex,
                                        swiper,
                                        isSliding,
                                        isBurgerMenuOpen,
                                        setIsBurgerMenuOpen
                                    }) => {
    return (
        <header className={clsx({
            [style.header]: true,
            [style.header_isSliding]: isSliding
        })}>
            <div className={style.innerWrapper}>

                <HashLink className={style.logo}
                          to={`/#home`}
                          onClick={() => setIsBurgerMenuOpen()}
                >
                    <SvgIcon icon={svgIcons.logo}/>
                </HashLink>

                <div className={style.logoSwiper}
                     onClick={() => {
                         setCurrentIndex(0);
                         swiper && swiper.slideTo(0);
                     }}
                >
                    <SvgIcon icon={svgIcons.logo}/>
                </div>

                <nav className={style.nav}>
                    {
                        slides.map((slide) => {
                                if (slide.disableInHeader) return;
                                return (
                                    <p className={clsx({
                                        [style.navItem]: true,
                                        [style.navItem_active]: slide.id === currentIndex
                                    })}
                                       onClick={() => {
                                           setCurrentIndex(slide.id);
                                           swiper && swiper.slideTo(slide.id);
                                       }}
                                    >
                                        {slide.text}
                                    </p>
                                )

                            }
                        )
                    }

                </nav>

                <div className={style.buttonsBlock}>
                    <Button text='Buy cash tokens'
                            size='small'
                    />
                    <button className={style.burger}
                            onClick={setIsBurgerMenuOpen}
                    >
                        {
                            !isBurgerMenuOpen
                            ? <SvgIcon icon={svgIcons.burger}/>
                            : <SvgIcon icon={svgIcons.close}/>
                        }
                    </button>
                </div>

            </div>

        </header>
    )
}