import {svgIcons} from "../assets/svg/svgIcons";
import {Home} from "../components/B0_Home/Home";
import {About} from "../components/B1_About/About";
import {HowItWorks} from "../components/B2_HowItWorks/HowItWorks";
import {Defi} from "../components/B4_Defi/Defi";
import {Components} from "../components/B5_Components/Components";
import {Wallet} from "../components/B6_Wallet/Wallet";
import {Platform} from "../components/B7_Platform/Platform";
import {CashToken} from "../components/B8_CashToken/CashToken";
import {Tokenomics} from "../components/B9_Tokenomics/Tokenomics";
import {Reasons} from "../components/B10_Reasons/Reasons";
import {Team} from "../components/B12_Team/Team";
import {Partners} from "../components/B13_Partners/Partners";
import {Faq} from "../components/B14_Faq/Faq";
import {Roadmap} from "../components/B11_Roadmap/Roadmap";
import {Traders} from "../components/B3_Traders/Traders";
import {Contacts} from "../components/B15_Contacts/Contacts";

export interface ISlide {
    id: number
    text: string
    hash: string
    disableInHeader: boolean
    component?: any //JSX.Element | undefined
    comp: any
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
        hash: 'home',
        disableInHeader: false,
        component: Home,
        comp: <Home/>
    },
    {
        id: 1,
        text: 'About us',
        hash: 'about',
        disableInHeader: false,
        component: About,
        comp: <About/>
    },
    {
        id: 2,
        text: 'How it works',
        hash: 'how',
        disableInHeader: false,
        component: HowItWorks,
        comp: <HowItWorks/>
    },
    {
        id: 3,
        text: 'Copy traders',
        hash: 'traders',
        disableInHeader: true,
        component: Traders,
        comp: <Traders/>
    },
    {
        id: 4,
        text: 'Hybrid finance',
        hash: 'defi',
        disableInHeader: false,
        component: Defi,
        comp: <Defi/>
    },

    {
        id: 5,
        text: 'Core components',
        hash: 'components',
        disableInHeader: true,
        component: Components,
        comp: <Components/>
    },
    {
        id: 6,
        text: 'Wallet and cards',
        hash: 'wallet',
        disableInHeader: true,
        component: Wallet,
        comp: <Wallet/>
    },
    {
        id: 7,
        text: 'Trading platform',
        hash: 'platform',
        disableInHeader: true,
        component: Platform,
        comp: <Platform/>
    },
    {
        id: 8,
        text: 'Token application',
        hash: 'cashtoken',
        disableInHeader: true,
        component: CashToken,
        comp: <CashToken/>
    },
    {
        id: 9,
        text: 'Tokenomics',
        hash: 'tokenomics',
        disableInHeader: true,
        component: Tokenomics,
        comp: <Tokenomics/>
    },
    {
        id: 10,
        text: 'Reasons',
        hash: 'reasons',
        disableInHeader: true,
        component: Reasons,
        comp: <Reasons/>
    },
    {
        id: 11,
        text: 'Roadmap',
        hash: 'roadmap',
        disableInHeader: false,
        component: Roadmap,
        comp: <Roadmap/>
    },
    {
        id: 12,
        text: 'Team and advisors',
        hash: 'team',
        disableInHeader: false,
        component: Team,
        comp: <Team/>
    },
    {
        id: 13,
        text: 'Partners',
        hash: 'partners',
        disableInHeader: false,
        component: Partners,
        comp: <Partners/>
    },
    {
        id: 14,
        text: 'F.A.Q',
        hash: 'faq',
        disableInHeader: false,
        component: Faq,
        comp: <Faq/>
    },
    {
        id: 15,
        text: 'Contacts',
        hash: 'contacts',
        disableInHeader: false,
        //component: Contacts,
        comp: null
    },
];