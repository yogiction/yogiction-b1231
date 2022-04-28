/* eslint-disable @next/next/no-html-link-for-pages */
import * as React from 'react';
import classNames from 'classnames';
import { Social } from '../../atoms';
import { getDataAttrs } from '../../../utils/get-data-attrs';

export default function Footer(props) {
    const colors = props.colors || 'colors-a';
    const leftSectionTitle = props.leftSectionTitle || '';
    const leftSectionText = props.leftSectionText || '';
    const rightSectionTitle = props.rightSectionTitle || '';
    const rightSectionText = props.rightSectionText || '';
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const needHelMouseEnterHandler = () => {
    }
    const cssId = props.elementId || null;
    const needHelpCloseHandler = () => {
        //let endDate = new Date().setDate(new Date().getDate() + 30);
        let endDate = new Date().getTime() + 60000;

        if (typeof window !== "undefined") {
            localStorage.setItem('endDate', endDate.toString());
        }
    }
    return (
        <footer
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames('sb-component', 'sb-component-footer bg-[#173450] text-white', colors, 'py-[60px] px-0 md:py-[100px] md:px-[140px]')}
        >
            <div className={classNames('')}>

                {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                    <div className="sm:flex flex-col  lg:flex-row sm:justify-between sm:items-start">
                        <div className="max-w-[680px] mx-[41px] mb-[53px] md:mb-0 md:mx-0">
                            <div className='mb-[40px] md:mb-[60px] leading-[38px] md:leading-[60px] text-[25px] md:text-[40px] md:text-left text-center font-semibold' style={{ fontFamily: "Poppins" }}>{leftSectionTitle}</div>
                            <div className='flex h-full flex-col justify-between'>
                                <div className='leading-[27px] md:mb-[48px] mb-8 md:leading-[46px]  md:text-[30px] text-[18px]'
                                    style={{
                                        textAlign: "left",
                                        fontFamily: "Poppins",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        color: 'rgba(255,255,255,1)',
                                    }}>
                                    {leftSectionText}</div>
                                <div>
                                    {props.contacts && <Contacts {...props.contacts} />}
                                </div>
                            </div>
                        </div>
                        <div className="md:mb-0 mb-[0px] md:w-full mt-[120px] md:mt-0 md:max-w-[680px] mx-[41px]">
                            <div className='md:mb-[60px] mb-[40px] leading-[38px] md:leading-[60px]  md:text-left text-center text-[25px] md:text-[40px]   font-semibold' style={{ fontFamily: "Poppins" }}>{rightSectionTitle}</div>
                            {socialLinks.length > 0 && (
                                <ul className="flex justify-evenly md:space-x-[34.18px] md:px-0 px-[27.79px] md:justify-start items-center mb-[40.5px] md:mb-[83px]" data-sb-field-path=".socialLinks">
                                    {socialLinks.map((link, index) => (
                                        <li className='md:w-[50px] w-[38.5px] md:h-[50px] text-white hover:text-[#a6bf36] h-[38.5px]' key={index} style={{
                                            transform: 'matrix(1,0,0,1,0,0)',
                                        }}>
                                            <Social {...link} className="md:w-[50px] w-[38.5px] md:h-[50px] h-[38.5px]" />
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <div className='text-[18px] leading-[27px] md:text-[30px] md:leading-[46px]' style={{
                                textAlign: 'left',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                overflow: "auto",
                                fontWeight: 'normal',
                                color: 'rgba(255,255,255,1)',
                            }}>
                                {rightSectionText}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
}

function Contacts(props) {
    return (
        <div className="text-lg leading-[27px] md:leading-[46px] text-[18px] md:text-[30px]" data-sb-field-path=".contacts"
            style={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "normal",
            }}>
            {props.phoneNumber && (
                <p>
                    <a
                        className='hover:text-[#a6bf36] no-underline hover:underline'
                        href={`tel:${props.phoneNumber}`}
                        aria-label={props.phoneAltText}
                        title={props.phoneAltText}
                        data-sb-field-path=".phoneNumber .phoneNumber#@href .phoneAltText#@title"
                    >
                        {props.phoneNumber}
                    </a>
                </p>
            )}
            {props.email && (
                <p>
                    <a
                        className='hover:text-[#a6bf36] no-underline hover:underline'
                        href={`mailto:${props.email}`}
                        aria-label={props.emailAltText}
                        title={props.emailAltText}
                        data-sb-field-path=".email .email#@href .emailAltText#@title"
                    >
                        {props.email}
                    </a>
                </p>
            )}
            {props.siteUrl && (
                <p>
                    <a
                        className='hover:text-[#a6bf36] no-underline hover:underline'
                        href={props.siteUrl}
                        aria-label={props.siteUrl}
                        title={props.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                    >
                        {props.siteUrl}
                    </a>
                </p>
            )}
        </div>
    );
}