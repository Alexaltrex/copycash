import React from "react";
import style from './platform.module.scss';
import platform from '../../assets/webp/platform.webp';
import back from '../../assets/jpeg/platform.jpg';
import check_green from '../../assets/png/check_green.png';

import {Button} from "../../common/Button/Button";
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ';

export const Platform = () => {
    const {ref, intersected} = useInter();

    return (
        <section className={style.platform}
                 ref={ref}
                 style={{
                     background: `url(${back})`,
                     backgroundSize: 'cover'
                 }}
        >
            <div className={style.mask}/>

            <div className={clsx(style.inner, intersected && style.inner_inter)}>

                <div className={style.firstBlock}>

                    <h2 className={style.title}>Trading platform</h2>

                    <div className={style.text}>{text}</div>

                    <div className={style.buttons}>
                        <Button text='CHECK OUR DEMO' />
                        <Button text='SUBSCRIBE TO UPDATES' type='grey' />
                    </div>

                    <div className={style.checkBox}>
                       <div className={style.checkItem}>
                           <img src={check_green} alt=""/>
                           <div className={style.checkText}>EASY TO USE</div>
                       </div>
                        <div className={style.checkItem}>
                            <img src={check_green} alt=""/>
                            <div className={style.checkText}>1000+ MARKETS</div>
                        </div>
                        <div className={style.checkItem}>
                            <img src={check_green} alt=""/>
                            <div className={style.checkText}>AGREGATED LIQUIDITY</div>
                        </div>
                    </div>

                </div>

                <div className={style.secondBlock}>
                    <img src={platform} alt=""/>
                </div>

            </div>
        </section>
    )
}