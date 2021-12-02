import React, {FC} from "react";
import style from './button.module.scss';
import clsx from "clsx";


export interface IButton {
    type?: 'blue' | 'grey' | 'white'
    text: string
}

export const Button: FC<IButton> = ({
                                        type = 'blue',
                                        text
}) => {
    return (
        <button className={clsx(
            style.button,
            style[`button__${type}`]
        )}>
            <span>{text}</span>
        </button>
    )
}