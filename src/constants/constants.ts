import {svgIcons} from "../assets/svg/svgIcons";
import {Home} from "../components/B0_Home/Home";
import {About} from "../components/B1_About/About";
import {HowItWorks} from "../components/B2_HowItWorks/HowItWorks";
import {Defi} from "../components/B4_Defi/Defi";
import {Components} from "../components/B5_Components/Components";
import {Wallet} from "../components/B6_Wallet/Wallet";
import {Platform} from "../components/B7_Platform/Platform";

export interface ISlide {
    id: number
    text: string
    disableInHeader: boolean
    component?: any //JSX.Element | undefined
}

export interface ISocialLink {
    url: string
    icon: JSX.Element
}



export const swiperSpeed = 500;

export const socialLinks: ISocialLink[] = [
    {
        url: '#',
        icon: svgIcons.telegramm
    },
    {
        url: '#',
        icon: svgIcons.facebook
    },
    {
        url: '#',
        icon: svgIcons.twitter
    },
    {
        url: '#',
        icon: svgIcons.medium
    },
    {
        url: '#',
        icon: svgIcons.bitcoin
    },
    {
        url: '#',
        icon: svgIcons.youtube
    },
    {
        url: '#',
        icon: svgIcons.instagram
    },
];

export const slides: ISlide[] = [ // all - 16, active in header - 9
    {
        id: 0,
        text: 'home',
        disableInHeader: false,
        component: Home,
    },
    {
        id: 1,
        text: 'About us',
        disableInHeader: false,
        component: About
    },
    {
        id: 2,
        text: 'How it works',
        disableInHeader: false,
        component: HowItWorks,
    },
    {
        id: 3,
        text: 'Best traders',
        disableInHeader: true
    },
    {
        id: 4,
        text: 'DEFI+CEX',
        disableInHeader: false,
        component: Defi
    },

    {
        id: 5,
        text: 'Components',
        disableInHeader: true,
        component: Components
    },
    {
        id: 6,
        text: 'Wallet & Cards',
        disableInHeader: true,
        component: Wallet
    },
    {
        id: 7,
        text: 'Platform',
        disableInHeader: true,
        component: Platform
    },
    {
        id: 8,
        text: 'Cash token',
        disableInHeader: true
    },
    {
        id: 9,
        text: 'Tokenomics',
        disableInHeader: true
    },
    {
        id: 10,
        text: 'Reasons',
        disableInHeader: true
    },
    {
        id: 11,
        text: 'Roadmap',
        disableInHeader: false
    },
    {
        id: 12,
        text: 'Team',
        disableInHeader: false
    },
    {
        id: 13,
        text: 'Partners',
        disableInHeader: false
    },
    {
        id: 14,
        text: 'FAQ',
        disableInHeader: false
    },
    {
        id: 15,
        text: 'Contacts',
        disableInHeader: false
    },
];