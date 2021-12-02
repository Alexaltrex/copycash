import React, {FC} from "react";
import style from './button.module.scss';
import clsx from "clsx";


export interface IButton {
    size?: 'normal' | 'small'
    type?: 'blue' | 'grey' | 'white'
    text: string
    className?: string
}

export const Button: FC<IButton> = ({
                                        type = 'blue',
                                        text,
                                        size = 'normal',
                                        className
                                    }) => {
    return (
        <button className={clsx(
            style.button,
            style[`button__${type}`],
            style.button__small && size === 'small',
            className
        )}>
            <span>{text}</span>
        </button>
    )
}