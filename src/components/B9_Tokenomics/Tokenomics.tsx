import React from "react";
import style from './tokenomics.module.scss';
import tokenomics_arrow1 from '../../assets/png/tokenomics_arrow1.png';
import tokenomics_arrow2 from '../../assets/png/tokenomics_arrow2.png';
import tokenomics_coin from '../../assets/webp/tokenomics_coin.webp';
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

const text = 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.';
const topBlockItems = [
    {title: 'SYMBOL', subtitle: 'CASH'},
    {title: 'total supply', subtitle: '100,000,000 CASH'},
    {title: 'name', subtitle: 'CASH token'},
    {title: 'retail price', subtitle: '1 CASH = $0.07 (USD)'},
    {title: 'blockchain', subtitle: 'Binance BEP20'},
    {title: 'total supply', subtitle: '100,000,000 CASH'},
];
const columns = [
    [topBlockItems[0], topBlockItems[2], topBlockItems[4]],
    [topBlockItems[1], topBlockItems[3], topBlockItems[5]],
];

const bottomBlocks = [
    {
        title: 'Allocation',
        img: tokenomics_arrow1,
        background: 'linear-gradient(97.21deg, #CC4014 5.61%, #FFC93D 92.46%)',
        items: [
            {value: 45, text: 'Public (35%) + Private Sale (10%)'},
            {value: 20, text: 'DEX Liquidity Pool'},
            {value: 10, text: 'Team'},
            {value: 10, text: 'Reserve, Farming and Burn'},
            {value: 10, text: 'Partners and Advisers'},
            {value: 5, text: 'CEX Liquidity'},
        ],
    },
    {
        title: 'Budget and spending',
        img: tokenomics_arrow2,
        background: 'linear-gradient(97.21deg, #B111FD 5.61%, #FF6363 92.46%)',
        items: [
            {value: 40, text: 'Liquidity'},
            {value: 20, text: 'Development'},
            {value: 10, text: 'Team'},
            {value: 10, text: 'Reserve, Farming and Burn'},
            {value: 10, text: 'Partners and Advisers'},
        ],
    },
];


export const Tokenomics = () => {
    const {ref, intersected} = useInter();

    return (
        <section className={style.tokenomics}
                 ref={ref}
        >

            <div className={style.coinWrapper}>
                <img className={style.coin} src={tokenomics_coin} alt=""/>
                <div className={style.mask}/>
            </div>


            <div className={clsx(style.inner, intersected && style.inner_inter)}>

                <h2 className={style.title}>Tokenomics</h2>

                <div className={style.blocks}>
                    <div className={style.topBlock}>

                        <div className={style.subtitle}>CASH token Data</div>

                        <div className={style.text}>{text}</div>

                        <div className={style.topBlockItems_mobile}>
                            {
                                columns.map((column, i) => (
                                    <div className={style.column} key={i}>
                                        {
                                            column.map((item, i) => (
                                                <div className={style.item} key={i}>
                                                    <div className={style.title}>{item.title}</div>
                                                    <div className={style.subtitle}>{item.subtitle}</div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ))
                            }



                        </div>

                        <div className={style.topBlockItems_tablet}>
                            {
                                topBlockItems.map((el, i) => (
                                    <div className={style.item} key={i}>
                                        <div className={style.title}>{el.title}</div>
                                        <div className={style.subtitle}>{el.subtitle}</div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className={style.bottomBlock}>
                        {
                            bottomBlocks.map((block, i) => (
                                <div className={style.bottomBlockItem} key={i}>

                                    <div className={style.title}>{block.title}</div>

                                    <div className={style.items}>
                                        {
                                            block.items.map((item, i) => {
                                                const arr = block.items.map(item => item.value);
                                                const max = Math.max(...arr);
                                                return (
                                                    <div className={style.item} key={i}>
                                                        <div className={style.header}>
                                                            <div className={style.imgWrapper}>
                                                                <img src={block.img} alt=""/>
                                                                <div className={style.value}>{`${item.value}%`}</div>
                                                            </div>
                                                            <div className={style.text}>{item.text}</div>
                                                        </div>
                                                        <div className={style.line}
                                                             style={{
                                                                 width: `${100 * item.value / max}%`,
                                                                 background: block.background
                                                             }}
                                                        />
                                                    </div>
                                                )
                                            }
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


            </div>
        </section>
    )
};