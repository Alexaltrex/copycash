import React, {useEffect, useState} from 'react';
import style from './app.module.scss';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {Navigation, Mousewheel} from 'swiper';
import SwiperClass from 'swiper/types/swiper-class'
import clsx from "clsx";
import {Header} from "../A0_Header/Header";
import {LeftSidebar} from "../A1_LeftSidebar/LeftSidebar";
import {BurgerMenu} from "../A2_BurgerMenu/BurgerMenu";
import {RightSidebar} from "../A3_RightSidebar/RightSidebar";
import {Home} from "../B0_Home/Home";
import {About} from "../B1_About/About";
import {HowItWorks} from "../B2_HowItWorks/HowItWorks";
import {Defi} from "../B4_Defi/Defi";
import {Components} from "../B5_Components/Components";
import {Wallet} from "../B6_Wallet/Wallet";
import {Platform} from "../B7_Platform/Platform";
import {CashToken} from "../B8_CashToken/CashToken";
import {Tokenomics} from '../B9_Tokenomics/Tokenomics';
import {Reasons} from "../B10_Reasons/Reasons";
import {Team} from "../B12_Team/Team";
import {Partners} from "../B13_Partners/Partners";
import {Faq} from "../B14_Faq/Faq";
import {Subscriber} from "../A4_Subscriber/Subscriber";
import {Cookies} from "../A5_Cookies/Cookies";
import {Roadmap} from "../B11_Roadmap/Roadmap";
import {Traders} from "../B3_Traders/Traders";
import {Contacts} from "../B15_Contacts/Contacts";
import {slides, swiperSpeed} from "../../constants/constants";
import { Note } from '../A6_Note/Note';

SwiperCore.use([Navigation, Mousewheel]);

const components = [
    <Home/>,
    <About/>,
    <HowItWorks/>,
    <Traders/>,
    <Defi/>,
    <Components/>,
    <Wallet/>,
    <Platform/>,
    <CashToken/>,
    <Tokenomics/>,
    <Reasons/>,
    <Roadmap/>,
    <Team/>,
    <Partners/>,
    <Faq/>,
];


export const App = () => {
    const showCookiesFromLocal = !localStorage.getItem('showCookies')
        ? true
        : localStorage.getItem('showCookies') === 'true'
            ? true
            : false;
    const showSubscriberFromLocal = !localStorage.getItem('showSubscriber')
        ? true
        : localStorage.getItem('showSubscriber') === 'true'
            ? true
            : false;


    const [mainSwiper, setMainSwiper] = useState<SwiperClass>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [showSubscriber, setShowSubscriber] = useState(showSubscriberFromLocal);
    const [showCookies, setShowCookies] = useState(showCookiesFromLocal);
    const [showNote, setShowNote] = useState(false);

    useEffect(() => {
        if (isBurgerMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isBurgerMenuOpen]);


    return <div className={style.app}>

        <Header currentIndex={currentIndex}
                setCurrentIndex={(i: number) => setCurrentIndex(i)}
                swiper={mainSwiper}
                isSliding={isSliding}
                isBurgerMenuOpen={isBurgerMenuOpen}
                setIsBurgerMenuOpen={
                    () => {
                        setIsBurgerMenuOpen(!isBurgerMenuOpen)
                    }
                }
                showCookies={showCookies}
                onCloseHandler={() => setShowCookies(false)}
        />

        <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen}
                    currentIndex={currentIndex}
                    onClickHandler={(i: number) => setCurrentIndex(i)}
                    closeBurger={() => setIsBurgerMenuOpen(false)}
        />
        <LeftSidebar currentIndex={currentIndex}
                     swiper={mainSwiper}
        />
        <RightSidebar/>

        <Subscriber showSubscriber={showSubscriber}
                    onCloseHandler={() => {
                        localStorage.setItem('showSubscriber', 'false');
                        setShowSubscriber(false);
                    }}
                    onSubscribe={() => setShowNote(true)}
        />

        <Note showNote={showNote}
              onClose={() => setShowNote(false)}
              showCookies={showCookies}
        />

        <div className={clsx({
            [style.cookiesWrapper]: true,
            [style.cookiesWrapper_withoutSubscriber]: !showSubscriber,
            [style.cookiesWrapper_hide]: !showCookies,
        })}>
            <Cookies showCookies={showCookies}
                     onCloseHandler={() => {
                         setShowCookies(false);
                         localStorage.setItem('showCookies', 'false');
                     }}
            />
        </div>

        <Swiper className={style.swiper}
                direction='vertical'
                slidesPerView={1}
                mousewheel={{
                    //thresholdDelta: 300
                }}
                spaceBetween={0}
                allowTouchMove={false}
                onSwiper={setMainSwiper}
                speed={swiperSpeed}
                onSlideChange={(swiper: SwiperClass) => {
                    setCurrentIndex(swiper.realIndex);
                }}
                pagination={{
                    clickable: true
                }}
                onTransitionStart={(swiper) => setIsSliding(true)}
                onTransitionEnd={(swiper) => setIsSliding(false)}
        >
            {
                slides.map(
                    (slide, index) => (
                        <SwiperSlide className={style.slide}
                                     key={index}
                                     style={{
                                         background: slide.component
                                             ? 'none'
                                             : slide.id % 2 === 0 ? 'grey' : 'dark'
                                     }}
                        >
                            {
                                slide.id === 15
                                    ? <Contacts swiper={mainSwiper}
                                                onClickHandler={(i: number) => setCurrentIndex(i)}
                                    />
                                    : slide.component
                            }
                        </SwiperSlide>
                    )
                )
            }
        </Swiper>

        <div className={style.components}>
            {
                slides.map(slide => (
                    <div id={slide.hash} key={slide.id}>
                        {
                            slide.id === 15
                                ? <Contacts swiper={mainSwiper}
                                            onClickHandler={(i: number) => setCurrentIndex(i)}
                                />
                                : slide.comp
                        }
                    </div>
                ))
            }
        </div>
    </div>;
};


