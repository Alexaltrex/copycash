import React, {FC, useState} from "react";
import style from './cookies.module.scss';


export interface ICookies {
    showCookies: boolean
    onCloseHandler: () => void
}

export const Cookies: FC<ICookies> = ({showCookies, onCloseHandler}) => {
    return (
        <div className={style.cookies}
        >
            <div className={style.text}>This website uses cookies to improve your experience. <a href="#">Learn more</a>
            </div>
            <button className={style.button}
                    onClick={() => onCloseHandler()}
            >
                GOT IT
            </button>
        </div>
    )
};