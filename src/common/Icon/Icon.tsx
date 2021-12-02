import React, {FC} from 'react';
import svgSprite from '../../assets/svg/sprite.symbol.svg';
import style from './icon.module.scss';
import clsx from "clsx";

export interface IIcon {
    icon: string
}

export const Icon:FC<IIcon> = ({icon}) => (
    <svg className={clsx(style.icon, style[`icon__${icon}`])}>
        <use xlinkHref={`${svgSprite}#${icon}`} />
    </svg>
);
