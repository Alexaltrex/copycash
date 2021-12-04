import React from "react";
import style from './defi.module.scss';
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import defi_check from '../../assets/png/defi_check.png';
import defi_logo from '../../assets/png/defi_logo.png';
import circle1 from '../../assets/png/defi_circle.png';
import circle2 from '../../assets/png/defi_circle2.png';
import defi_arrow_left from '../../assets/png/defi_arrow_left.png';
import defi_arrow_right from '../../assets/png/defi_arrow_right.png';
import defi_arrow_desktop_right from '../../assets/png/defi_arrow_desktop_right.png';
import defi_arrow_desktop_left from '../../assets/png/defi_arrow_desktop_left.png';


const block1 = [
    'FULL TRANSPARENCY',
    'DIGITAL AGE CURRENCY',
    'NO GEVERNMENT CONTROL',
    'FULL TOKENIZATION',
    'WIDE BLOCKCHAIN APPLICATION CASES',
];

const block2 = [
    'FULL TRANSPARENCY',
    'Access to wide array of fiat currencies',
    'access to traditional markets',
    'access to regulated assets',
    'plastic and wireless payments',
];

const block3 = [
    'wide array of services',
    'low comissions',
    'combinig the most demanded services',
    'removing the barriers between traditional finance and defi',
    'transparent and easy to use',
    'simple and clear investment tools'
];

export const Defi = () => {
    return (
        <section className={style.defi}
                 id='DEFI+CEX'
        >
            <div className={style.card}>
                <div className={style.inner}>

                    <h2 className={style.defi_title}>Defi</h2>

                    <p className={style.defi_subtitle1}>
                        <SvgIcon icon={svgIcons.defi_plus}/>
                        <p className={style.defi_subtitle1_text}>Traditional Finance</p>
                    </p>

                    <p className={style.defi_subtitle2}>
                        <SvgIcon icon={svgIcons.defi_equal}/>
                        <p className={style.defi_subtitle2_text}>Cross Finance Hybrid Model</p>
                    </p>

                    <div className={style.blocks}>

                        <div className={style.block1}>
                            <p className={style.title}>DeFi pros:</p>
                            <div className={style.items}>
                                {
                                    block1.map((el, i) => (
                                        <div className={style.item} key={i}>
                                            <img src={defi_check} alt=""/>
                                            <p>{el}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={style.block2}>
                            <p className={style.title}>Traditional Finance pros:</p>
                            <div className={style.items}>
                                {
                                    block2.map((el, i) => (
                                        <div className={style.item} key={i}>
                                            <img src={defi_check} alt=""/>
                                            <p>{el}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className={style.block_blue}>
                            <SvgIcon icon={svgIcons.logo} className={style.logo}/>
                            <div className={style.items}>
                                {
                                    block3.map((el, i) => (
                                        <div className={style.item} key={i}>
                                            <SvgIcon icon={svgIcons.check}/>
                                            <p>{el}</p>
                                        </div>
                                    ))
                                }
                            </div>

                            <img className={style.dollar} src={defi_logo} alt=""/>
                            <img className={style.circle1} src={circle1} alt=""/>
                            <img className={style.circle2} src={circle2} alt=""/>
                            <img className={style.defi_arrow_left} src={defi_arrow_left} alt=""/>
                            <img className={style.defi_arrow_right} src={defi_arrow_right} alt=""/>
                            <img className={style.defi_arrow_desktop_left} src={defi_arrow_desktop_left} alt=""/>
                            <img className={style.defi_arrow_desktop_right} src={defi_arrow_desktop_right} alt=""/>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}