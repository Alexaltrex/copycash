import React, {FC, useState} from "react";
import style from './subscriber.module.scss';
import {Formik, FormikHelpers, FormikProps} from "formik";
import clsx from "clsx";
import {SvgIcon} from "../../common/SvgIcon/SvgIcon";
import {svgIcons} from "../../assets/svg/svgIcons";
import axios from "axios";

interface IValues {
    email: string
}


export interface ISubscriber {
    showSubscriber: boolean
    onCloseHandler: () => void
    onSubscribe: () => void
}


export const Subscriber: FC<ISubscriber> = ({
                                                showSubscriber,
                                                onCloseHandler,
                                                onSubscribe
}) => {
    const [focus, setFocus] = useState(false);
    const initialValues = {
        email: ''
    };
    const onSubmitHandler = async (
        values: IValues,
        formikHelpers: FormikHelpers<IValues>
    ) => {
        try {
            if (values.email) {
                const api_key = '6o9gu3udym84o3jqdgzse6ut1yunoy38ztoswcde';
                const instance = axios.create({
                    baseURL: 'https://api.unisender.com/en/api/',
                    withCredentials: true,
                });
                const response = await instance.get(`subscribe?format=json&api_key=${api_key}&list_ids=1&fields[email]=${values.email}&double_optin=0&overwrite=0`);
            }
        } catch (e: any) {
            console.log(e.message)
        } finally {
            if (values.email) {
                onSubscribe();
            }
            formikHelpers.setSubmitting(false);
            onCloseHandler();
        }


    };
    const onFocusHandler = () => {
        setFocus(true);
    };

    return (
        <div className={clsx({
            [style.subscriber]: true,
            [style.subscriber_hidden]: !showSubscriber,
        })}
        >
            <SvgIcon icon={svgIcons.newspaper} className={style.newspaper}/>
            <div className={style.title}>Subscribe to our newsletter</div>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmitHandler}
            >
                {
                    (props: FormikProps<IValues>) => (
                        <form onSubmit={props.handleSubmit}
                              className={clsx({
                                  [style.form]: true,
                                  [style.form_selected]: focus,
                              })}
                        >
                            <SvgIcon icon={svgIcons.mail} className={style.icon}/>
                            <input className={clsx({
                                [style.input]: true,
                                [style.input_selected]: focus,
                            })}
                                   type="text"
                                   id="email"
                                   placeholder='Enter your e-mail'
                                   onChange={props.handleChange}
                                   onBlur={
                                       (e) => {
                                           props.handleBlur(e);
                                           setFocus(false);
                                       }
                                   }
                                   value={props.values.email}
                                   onFocus={onFocusHandler}
                            />

                            <button type="submit"
                                    disabled={props.isSubmitting}
                                    className={style.button}
                            >
                                <SvgIcon icon={svgIcons.send}/>
                            </button>

                        </form>
                    )
                }
            </Formik>
            <button className={style.close}
                    onClick={() => onCloseHandler()}
            >
                <SvgIcon icon={svgIcons.close}/>
            </button>
        </div>
    )
};