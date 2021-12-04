import React, {FC} from "react";
import style from './outlinedButtonWithIconAndText.module.scss'
import clsx from "clsx";
import { SvgIcon } from "../SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";

export interface IButton {
    href: string
    text: string
    icon: JSX.Element
    className?: string
}

export const OutlinedButtonWithIconAndText: FC<IButton> = ({
                                                               href,
                                                               text,
                                                               icon,
                                                               className
                                                  }) => {
    return (
        <a className={clsx(style.outlinedButtonWithIconAndText, className)}
           href={href}
        >
            <div className={style.leftIconWrapper}>
                <SvgIcon icon={icon}
                         className={style.leftIcon}
                />
            </div>

            <span className={style.text}>{text}</span>
            <SvgIcon icon={svgIcons.arrow_drop_right_line}
                     className={style.rightIcon}
            />
        </a>
    )
}