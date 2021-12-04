import React from "react";
import style from './components.module.scss'
import {svgIcons} from "../../assets/svg/svgIcons";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import logo from '../../../src/assets/png/components.png';
import components_0 from '../../assets/png/components_1.png';
import components_1 from '../../assets/png/components_2.png';
import components_2 from '../../assets/png/components_3.png';
import components_3 from '../../assets/png/components_4.png';
import components_4 from '../../assets/png/components_5.png';
import components_5 from '../../assets/png/components_6.png';
import ellipse from '../../assets/png/home_ellips.png'

export interface IComponent {
    icon: string
    background: string
    title: string
    text: string
}

const components: IComponent[] = [
    {
        icon: components_0,
        background: 'linear-gradient(180deg, rgba(18, 155, 254, 0.24) 0%, rgba(18, 155, 254, 0.0384) 100%)',
        title: 'Smart contract',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ',
    },
    {
        icon: components_1,
        background: 'linear-gradient(180deg, rgba(209, 79, 255, 0.24) 0%, rgba(209, 79, 255, 0.0384) 100%)',
        title: 'Wallet and payments',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ',
    },
    {
        icon: components_2,
        background: 'linear-gradient(180deg, rgba(255, 170, 42, 0.24) 0%, rgba(255, 170, 42, 0.0384) 100%)',
        title: 'Social trading',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ',
    },
    {
        icon: components_3,
        background: 'linear-gradient(180deg, rgba(22, 201, 136, 0.24) 0%, rgba(22, 201, 136, 0.0384) 100%)',
        title: 'Decentralized exchange',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ',
    },
    {
        icon: components_4,
        background: 'linear-gradient(180deg, rgba(105, 52, 255, 0.24) 0%, rgba(105, 52, 255, 0.0384) 100%)',
        title: 'Liquidity agregation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ',
    },
    {
        icon: components_5,
        background: 'linear-gradient(180deg, rgba(255, 46, 108, 0.24) 0%, rgba(255, 46, 108, 0.0384) 100%)',
        title: 'Affiliates and whitelabel',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ',
    },
];

export const Components = () => {
    return (
        <section className={style.components}>
            <div className={style.inner}>

                <div className={style.titleWrapper}>
                    <h2 className={style.title}>Copycash</h2>
                    <h2 className={style.title}>core components</h2>
                    <img className={style.ellipse} src={ellipse} alt=""/>
                    <img className={style.logo1} src={logo} alt=""/>
                </div>


                <div className={style.cards}>
                    {
                        components.map((el, i) => (
                            <div key={i} className={style.card}>

                                <div className={style.iconWrapper}
                                     style={{
                                         background: el.background
                                     }}
                                >
                                    <img src={el.icon} alt=""/>
                                </div>

                                <p className={style.card_title}>{el.title}</p>

                                <p className={style.text}>{el.text}</p>


                            </div>
                        ))
                    }
                </div>

                <img className={style.logo} src={logo} alt=""/>


            </div>

        </section>
    )
};