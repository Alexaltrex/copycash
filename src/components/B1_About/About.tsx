import React, {useState} from "react";
import style from './about.module.scss'
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import about from '../../assets/png/about.png';
import back from '../../assets/jpeg/about.jpg';
import ReactPlayer from "react-player";

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.\n' +
    'Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate ...';

const url = 'https://user-images.githubusercontent.com/56224288/143682321-534ae799-1d84-41a1-a9f1-7429eac7c751.mp4';

export const About = () => {
    const [playing, setPlaying] = useState(false);

    return (
        <div className={style.about}>
            <div className={style.card}>
                <div className={style.innerWrapper}>

                    <div className={style.left}>
                        <h2 className={style.left_title}>About us</h2>

                        <p className={style.left_text}>{text}</p>

                        <a href="#" className={style.left_link}>
                            <span className={style.left_link_text}>
                                READ MORE
                            </span>
                            <SvgIcon icon={svgIcons.arrow_drop_right_line}
                                     className={style.left_link_icon}
                            />
                        </a>

                        <div className={style.left_people}>
                            <div style={{
                                backgroundImage: `url(${back})`,
                                mixBlendMode: 'luminosity',
                            }}
                                 className={style.left_people_back}
                            />


                            <div className={style.left_people_inner}>
                                <img className={style.people}
                                     src={about} alt=""/>
                                <div className={style.texts}>
                                    <SvgIcon icon={svgIcons.logo}/>
                                    <p className={style.texts_text}>
                                        “We know everything
                                        about trading”
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className={style.right}>

                        <div className={style.right_videoWrapper}>
                            <ReactPlayer
                                className={style.right_video}
                                url={url}
                                width='100%'
                                height='auto'
                                playing={playing}
                                loop={true}
                                muted={true}
                                playsinline={true}
                            />

                            {
                                !playing &&
                                <div className={style.right_videoWrapper_control}
                                     onClick={() => setPlaying(true)}
                                >
                                    <SvgIcon icon={svgIcons.play}
                                             className={style.right_videoWrapper_control_icon}
                                    />
                                    <p className={style.right_videoWrapper_control_text}>
                                        PLAY VIDEO
                                    </p>
                                </div>
                            }

                        </div>


                        <div className={style.right_divider}>
                            <div className={style.right_divider_line}/>
                            <div className={style.right_divider_text}>
                                AS SEEN ON:
                            </div>
                            <div className={style.right_divider_line}/>
                        </div>

                        <div className={style.right_logos}>
                            <SvgIcon icon={svgIcons.about_logo0}/>
                            <SvgIcon icon={svgIcons.about_logo1}/>
                            <SvgIcon icon={svgIcons.about_logo2}/>
                            <SvgIcon icon={svgIcons.about_logo3}/>
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}