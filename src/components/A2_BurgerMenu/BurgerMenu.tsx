import React, {FC} from "react";
import style from './burgerMenu.module.scss';
import clsx from "clsx";
import {slides, socialLinks} from "../../constants/constants";
import {HashLink} from "react-router-hash-link";

export interface IBurgerMenu {
    isBurgerMenuOpen: boolean
    currentIndex: number
    onClickHandler: (i: number) => void
    closeBurger: () => void
}

export const BurgerMenu: FC<IBurgerMenu> = ({
                                                isBurgerMenuOpen,
                                                currentIndex,
                                                onClickHandler,
                                                closeBurger
                                            }) => {
    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: isBurgerMenuOpen,
        })}>
            <div className={style.mask}/>
            <div className={style.innerWrapper}>

                <nav className={style.links}>
                    {
                        slides.map((slide => {
                                if (slide.disableInHeader) return
                                return (
                                    <HashLink key={slide.id}
                                              className={clsx({
                                                  [style.link]: true,
                                                  [style.link_active]: slide.id === currentIndex
                                              })}
                                              to={`#${slide.hash}`}
                                              smooth={true}
                                              onClick={() => {
                                                  closeBurger();
                                                  onClickHandler(slide.id)
                                              }}
                                    >
                                        {slide.text}
                                    </HashLink>
                                )
                            }
                        ))
                    }
                </nav>

                <nav className={style.socialLinks}>
                    {
                        socialLinks.map(({url, icon}, index) => (
                            <a key={index}
                               className={style.socialLink}
                               href={url}
                            >
                                {icon}
                            </a>
                        ))
                    }
                </nav>

            </div>
        </div>
    )
};

