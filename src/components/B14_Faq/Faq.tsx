import React, {useState} from "react";
import style from './faq.module.scss';
import back from '../../assets/webp/faq.webp';
import ellips from '../../assets/png/home_ellips.png';
import {Accordion, Theme} from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {createStyles, makeStyles} from "@mui/styles";
import {useInter} from "../../hooks/useInter";
import clsx from "clsx";

const items = [
    {
        panel: 'panel1',
        summary: 'HOW CAN I PARTICIPATE IN COPYCASH TOKENSALE PROGRAM?',
        details: 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    },
    {
        panel: 'panel2',
        summary: 'What is social trading?',
        details: 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    },
    {
        panel: 'panel3',
        summary: 'What can i trade?',
        details: 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    },
    {
        panel: 'panel4',
        summary: 'How to upgrade account to premium?',
        details: 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    },
    {
        panel: 'panel5',
        summary: 'what is the margin level?',
        details: 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    },
    {
        panel: 'panel6',
        summary: 'how to buy and sell stocks with copycash?',
        details: 'CASH token is based on the Binance protocol and will fully comply with the BEP20 standard. Support of this standard ensures compatibility of the token with third-party services and also provides ease of integration.',
    },
];

export const Faq = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const {ref, intersected} = useInter();

    return (
        <section className={style.faq} ref={ref}
        >
            <img className={style.back} src={back} alt=""/>
            <div className={clsx(style.inner, intersected && style.inner_inter)}>

                <div className={style.titleWrapper}>
                    <h2 className={style.title}>Frequently asked</h2>
                    <h2 className={style.title}>questions</h2>
                    <img className={style.ellips} src={ellips} alt=""/>
                </div>

                <div className={style.accordion}>
                    {
                        items.map(({panel, summary, details}, i) => (
                            <Accordion classes={{
                                root: classes.accordionRoot,
                                expanded: classes.expanded,
                            }}
                                       expanded={expanded === panel}
                                       onChange={handleChange(panel)}
                                       key={i}
                                       style={{
                                           border: expanded === panel
                                               ? '1px solid rgb(17, 126, 255)'
                                               : '1px solid transparent'
                                       }}
                            >
                                <AccordionSummary
                                    classes={{
                                        root: classes.summaryRoot,
                                        content: classes.summaryContent
                                    }}
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls={`${panel}bh-content`}
                                    id={`${panel}bh-header`}
                                >
                                    <div className={style.summary}>{summary}</div>
                                </AccordionSummary>
                                <AccordionDetails
                                    classes={{
                                        root: classes.detailsRoot
                                    }}
                                >
                                    <div className={style.details}>{details}</div>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </div>


            </div>
        </section>
    )
};

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        accordionRoot: {
            //transition: '3s',
            transition: 'margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background 0.3s, border 0.3s!important',
            background: 'rgba(255, 255, 255, 0.04)!important',
            backdropFilter: 'blur(9px)',
            borderRadius: '16px!important',
            padding: '12px 16px',
            '&:not(:first-child)': {
                marginTop: '8px',
            },
            [theme.breakpoints.up('md')]: {
                padding: '16px 24px',
            },
            '&:hover': {
                background: 'rgba(255, 255, 255, 0.1)!important',
                border: '1px solid rgb(17, 126, 255)!important'
            }
        },
        expanded: {
            margin: '0!important',
            '&:not(:first-child)': {
                margin: '8px 0 0!important',
            }
        },
        summaryRoot: {
            minHeight: '24px!important',
            padding: '0px!important',
        },
        summaryContent: {
            margin: '0!important',
        },
        detailsRoot: {
            padding: '8px 0px 0px!important',
        }
    })
);