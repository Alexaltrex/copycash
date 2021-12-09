import style from './roadmap.module.scss';
import React from "react";
import back from '../../assets/png/roadmap.png';
import line from '../../assets/png/roadmap_line.png';
import line_tablet from '../../assets/png/roadmap_line_tablet.png';
import {steps} from "./steps";
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";


export const Roadmap = () => {
    const {ref, intersected} = useInter();
    return (
        <>
            <section className={style.roadmap_mobile}
            >
                <div className={style.back}
                     style={{
                         backgroundImage: `url(${back})`
                     }}
                />

                <div className={style.inner}>

                    <h2 className={style.title}>Roadmap</h2>

                    <div className={style.steps}>
                        {
                            steps.map((step, i) => (
                                <div className={style.wrapper} key={i}>
                                    <div className={style.dot}/>
                                    <div className={style.header}>
                                        <div className={style.title}>{step.title}</div>
                                        <div className={style.year}>{step.year}
                                        </div>
                                    </div>
                                    <div className={style.items}>
                                        {
                                            step.items.map((item, i) => (
                                                <div className={style.item} key={i}>{item}</div>
                                            ))
                                        }
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className={style.roadmap_tablet}
                     id="roadmap">
                <h2 className={style.title}>Roadmap</h2>
                <div className={style.wrapper}>

                    <div className={style.inner}>
                        <div className={style.back}
                             style={{
                                 backgroundImage: `url(${back})`
                             }}
                        />
                        <img className={style.line} src={line_tablet} alt=""/>
                        <div className={style.steps}>
                            {
                                steps.map((step, i) => (
                                    <div className={style.step} key={i}>
                                        <div className={style.header}>
                                            <div className={style.header_title}>{step.title}</div>
                                            <div className={style.year}>{step.year}</div>
                                        </div>
                                        <div className={style.dot}/>
                                        <div className={style.items}>
                                            {
                                                step.items.map((item, i) => (
                                                    <div className={style.item} key={i}>{item}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>


            </section>

            <section className={style.roadmap_desktop} ref={ref}>
                <div className={style.back}
                     style={{
                         backgroundImage: `url(${back})`
                     }}
                />
                <img className={style.line_desktop} src={line} alt=""/>
                <div className={clsx(style.inner, intersected && style.inner_inter)}>
                    <h2 className={style.title_desktop}>Roadmap</h2>
                    <div className={style.steps}>
                        {
                            steps.map((step, i) => (
                                <div className={style.step} key={i}>
                                    <div className={style.header}>
                                        <div className={style.header_title}>{step.title}</div>
                                        <div className={style.year}>{step.year}</div>
                                    </div>
                                    <div className={style.dot}/>
                                    <div className={style.items}>
                                        {
                                            step.items.map((item, i) => (
                                                <div className={style.item} key={i}>{item}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>


    )
}