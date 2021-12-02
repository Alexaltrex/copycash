import React, {FC} from "react";
import style from './header.module.scss';
import {HashLink} from 'react-router-hash-link';
import {svgIcons} from "../../assets/svg/svgIcons";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {Button} from "../../common/Button/Button";

export const links: string[] = [
    'home',
    'About us',
    'How it works',
    'DEFI+CEX',
    'Cash token',
    'Roadmap',
    'Team',
    'FAQ',
    'Contacts',
];


export const Header: FC = () => {
    return (
        <header className={style.header}>
            <div className={style.innerWrapper}>
                <HashLink className={style.logo}
                          to={`/#home`}
                >
                    <SvgIcon icon={svgIcons.logo}/>
                </HashLink>

                <Button text='Buy cash tokens'

                />
            </div>

        </header>
    )
}