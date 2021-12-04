import React from "react";
import style from './rightSidebar.module.scss';
import {socialLinks} from "../../constants/constants";

export const RightSidebar = () => {
    return (
        <nav className={style.rightSidebar}>
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
    )
}