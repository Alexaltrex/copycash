import React from "react";
import style from './platform.module.scss';
import platform from '../../assets/png/platform.png';
import back from '../../assets/jpeg/platform.jpg';
import check_green from '../../assets/png/check_green.png';

import {Button} from "../../common/Button/Button";

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. ';

export const Platform = () => {
    return (
        <section className={style.platform}
                 style={{
                     background: `url(${back})`,
                     backgroundSize: 'cover'
                 }}
        >
            <div className={style.mask}/>

            <div className={style.inner}>

                <div className={style.firstBlock}>

                    <h2 className={style.title}>Trading platform</h2>

                    <p className={style.text}>{text}</p>

                    <div className={style.buttons}>
                        <Button text='CHECK OUR DEMO' />
                        <Button text='SUBSCRIBE TO UPDATES' type='grey' />
                    </div>

                    <div className={style.checkBox}>
                       <div className={style.checkItem}>
                           <img src={check_green} alt=""/>
                           <p className={style.checkText}>EASY TO USE</p>
                       </div>
                        <div className={style.checkItem}>
                            <img src={check_green} alt=""/>
                            <p className={style.checkText}>1000+ MARKETS</p>
                        </div>
                        <div className={style.checkItem}>
                            <img src={check_green} alt=""/>
                            <p className={style.checkText}>AGREGATED LIQUIDITY</p>
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