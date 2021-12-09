import React from "react";
import style from './team.module.scss';
import team_0 from '../../assets/png/team_0.png';
import team_1 from '../../assets/png/team_1.png';
import team_2 from '../../assets/png/team_2.png';
import team_3 from '../../assets/png/team_3.png';
import team_4 from '../../assets/png/team_4.png';
import team_5 from '../../assets/png/team_5.png';
import team_6 from '../../assets/png/team_6.png';
import back from '../../assets/jpeg/team_back.jpg';
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

const team = [
    {
        src: team_0,
        name: 'Haiden Rivera',
        job: 'Haiden Rivera',
        mail: '#',
        in: '#'
    },
    {
        src: team_1,
        name: 'Ashanti Steele',
        job: 'SEO & founder',
        mail: '#',
        in: '#'
    },
    {
        src: team_2,
        name: 'Kester Barnett',
        job: 'SEO & founder',
        mail: '#',
        in: '#'
    },
    {
        src: team_3,
        name: 'Chantal Wickens',
        job: 'SEO & founder',
        mail: '#',
        in: '#'
    },
    {
        src: team_4,
        name: 'King Crane',
        job: 'SEO & founder',
        mail: '#',
        in: '#'
    },
    {
        src: team_5,
        name: 'Syed Mcclain',
        job: 'SEO & founder',
        mail: '#',
        in: '#'
    },
    {
        src: team_6,
        name: 'Raheem Farrow',
        job: 'SEO & founder',
        mail: '#',
        in: '#'
    },
];

const row1 = [team[0], team[1], team[2], team[3]];
const row2 = [team[4], team[5], team[6]];
const rowsDesktop = [row1, row2];


export const Team = () => {
    const {ref, intersected} = useInter();
    return (
        <section className={style.team} ref={ref}>
            <div className={clsx(style.inner, intersected && style.inner_inter)}>

                <h2 className={style.title}>Team and advisors</h2>

                <div className={style.team_mobile}>
                    {
                        team.map((el, i) => (
                            <div className={style.card} key={i}>
                                <div className={style.border}/>
                                <div className={style.card_inner}>
                                    <img className={style.back} src={back} alt=""/>
                                    <div className={style.content}>
                                        <img className={style.photo} src={el.src} alt=""/>
                                        <div className={style.name}>{el.name}</div>
                                        <div className={style.job}>{el.job}</div>
                                        <div className={style.social}>
                                            <a className={style.link}
                                               href={el.mail}>
                                                <SvgIcon icon={svgIcons.mail}/>
                                            </a>
                                            <a className={style.link}
                                               href={el.in}>
                                                <SvgIcon icon={svgIcons.in}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={style.team_desktop}>
                    {
                        rowsDesktop.map((row, i) => (
                            <div className={style.team_desktop_row} key={i}>
                                {
                                    row.map((el, j) => (
                                        <div className={style.card} key={j}>
                                            <div className={style.border}/>
                                            <div className={style.card_inner}>
                                                <img className={style.back} src={back} alt=""/>
                                                <div className={style.content}>
                                                    <img className={style.photo} src={el.src} alt=""/>
                                                    <div className={style.name}>{el.name}</div>
                                                    <div className={style.job}>{el.job}</div>
                                                    <div className={style.social}>
                                                        <a className={style.link}
                                                           href={el.mail}>
                                                            <SvgIcon icon={svgIcons.mail}/>
                                                        </a>
                                                        <a className={style.link}
                                                           href={el.in}>
                                                            <SvgIcon icon={svgIcons.in}/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }

                </div>

            </div>
        </section>
    )
};