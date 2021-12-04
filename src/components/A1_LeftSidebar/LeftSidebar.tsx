import {FC} from "react";
import style from './leftSidebar.module.scss';
import {slides} from "../../constants/constants";
import clsx from "clsx";
import SwiperClass from "swiper/types/swiper-class";

export interface ILeftSidebar {
    currentIndex: number
    swiper: SwiperClass | undefined
}

export const LeftSidebar: FC<ILeftSidebar> = ({
                                                  currentIndex,
                                                  swiper
}) => {
    return (
        <nav className={style.leftSidebar}>
            {
                slides.map(({id, text}) => (
                    <div key={id}
                         className={clsx({
                             [style.navItem]: true,
                             [style.navItem_active]: id === currentIndex,

                         })}
                         onClick={() => {
                             swiper && swiper.slideTo(id)
                         }}
                    >
                        <p className={style.text}>{text}</p>
                    </div>
                    )
                )
                        }
        </nav>
    )
}