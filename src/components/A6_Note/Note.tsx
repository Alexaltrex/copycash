import {FC} from "react";
import style from './note.module.scss';
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import check from '../../assets/png/check.png';
import clsx from "clsx";

interface INote {
    onClose: () => void
    showNote: boolean
    showCookies: boolean
}

export const Note: FC<INote> = ({
                                    showNote,
                                    onClose,
                                    showCookies
                                }) => {
    return (
        <div className={clsx({
            [style.note]: true,
            [style.note_show]: showNote,
            [style.note_show_with_coockies]: showNote && showCookies,
        })}
        >
            <div className={style.inner}>
                <img className={style.check} src={check} alt=""/>
                <div className={style.text}>Thank you! Please check your e-mail to confirm</div>
                <button className={style.btn}
                        onClick={onClose}
                >
                    <SvgIcon icon={svgIcons.close}/>
                </button>
            </div>

        </div>
    )
}