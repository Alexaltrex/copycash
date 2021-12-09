import clsx from "clsx";
import {blockB} from "./consts";
import React, {FC} from "react";
import style from './contacts.module.scss';
import SwiperClass from "swiper/types/swiper-class";
import {Roadmap} from "../B11_Roadmap/Roadmap";
import {HashLink} from "react-router-hash-link";

export interface IBlockLinks {
    className: string
    isDesktop: boolean
    swiper: SwiperClass | undefined
    onClickHandler: (i: number) => void
    block: {
        title: string
        links: {
            id: number
            text: string
            hash: string
        }[]
    }
}

export const BlockLinks: FC<IBlockLinks> = ({
                                                className,
                                                isDesktop,
                                                swiper,
                                                onClickHandler,
                                                block,
                                            }) => {
    return (
        <div className={clsx(className, style.blockLinks)}>
            <div className={style.blockLinks_title}>{block.title}</div>
            <div className={style.blockB_links}>
                {
                    block.links.map((link, i) => (
                        <>
                            {
                                isDesktop
                                    ? (
                                        <div className={style.blockLinks_links_linkItem}
                                             key={i}
                                             onClick={() => {
                                                 onClickHandler(link.id);
                                                 swiper && swiper.slideTo(link.id);
                                             }}
                                        >
                                            {link.text}
                                        </div>
                                    )
                                    : (
                                        <HashLink className={style.blockLinks_links_linkItem}
                                                  smooth={true}
                                                  key={i}
                                                  to={`#${link.hash}`}
                                        >
                                            {link.text}
                                        </HashLink>
                                    )
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
};