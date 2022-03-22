import * as React from 'react';
import classNames from 'classnames';

import { Social, Action, Link } from '../../atoms';

export default function Footer(props) {
    const colors = props.colors || 'colors-a';
    const footerStyles = props.styles?.self || {};
    const footerWidth = footerStyles.width || 'narrow';
    const primaryLinks = props.primaryLinks || [];
    const socialLinks = props.socialLinks || [];
    const legalLinks = props.legalLinks || [];
    return (
        <footer
            className={classNames('sb-component', 'sb-component-footer bg-[#173450] text-white', colors, 'py-[60px] px-0 md:py-[100px] md:px-[140px]')}
            data-sb-field-path={`${props.annotationPrefix}:footer`}
        >
            <div className={classNames('')}>

                {(primaryLinks.length > 0 || socialLinks.length > 0 || props.contacts) && (
                    <div className="sm:flex flex-col  lg:flex-row sm:justify-between sm:items-start">
                        <div className="max-w-[680px] mx-[41px] mb-[53px] md:mb-0 md:mx-0">
                            <div className='mb-[40px] md:mb-[60px] leading-[38px] md:leading-[60px] text-[25px] md:text-[40px] md:text-left text-center font-semibold' style={{ fontFamily: "Poppins" }}>Contact Us</div>
                            <div className='flex h-full flex-col justify-between'>
                                <div className='leading-[27px] md:mb-[48px] mb-8 md:leading-[46px]  md:text-[30px] text-[18px]'
                                    style={{
                                        textAlign: "left",
                                        fontFamily: "Poppins",
                                        fontStyle: "normal",
                                        fontWeight: "normal",
                                        color: 'rgba(255,255,255,1)',
                                    }}>Have any questions? We are standing by to support you.</div>
                                <div>
                                    {props.contacts && <Contacts {...props.contacts} />}
                                </div>
                            </div>
                        </div>
                        <div className="md:mb-0 mb-[0px] md:w-full mt-[120px] md:mt-0 md:max-w-[680px] mx-[41px]">
                            <div className='md:mb-[60px] mb-[40px] leading-[38px] md:leading-[60px]  md:text-left text-center text-[25px] md:text-[40px]   font-semibold' style={{ fontFamily: "Poppins" }}>Connect with us</div>
                            {socialLinks.length > 0 && (
                                <ul className="flex justify-evenly md:space-x-[34.18px] md:px-0 px-[27.79px] md:justify-start items-center mb-[40.5px] md:mb-[83px]" data-sb-field-path=".socialLinks">
                                    {socialLinks.map((link, index) => (
                                        <li className='md:w-[50px] w-[38.5px] md:h-[50px] h-[38.5px]' key={index} style={{
                                            color: '#a6bf36',
                                            transform: 'matrix(1,0,0,1,0,0)',
                                        }}>
                                            <Social {...link} className="md:w-[50px] w-[38.5px] md:h-[50px] h-[38.5px]" data-sb-field-path={`.${index}`} />
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
                                Join us on our social channels to get tips on how to improve your nutrition, exercise and well-being.
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
                color: '#a6bf36',
                textDecoration: "underline",
            }}>
            {props.phoneNumber && (
                <p>
                    <a
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
                        href={`mailto:${props.email}`}
                        aria-label={props.emailAltText}
                        title={props.emailAltText}
                        data-sb-field-path=".email .email#@href .emailAltText#@title"
                    >
                        {props.email}
                    </a>
                </p>
            )}
            {props.address && (
                <p>
                    <a
                        href={`https://www.google.com/maps/search/${props.address}`}
                        aria-label={props.addressAltText}
                        title={props.addressAltText}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-sb-field-path=".address .address#@href .addressAltText#@title"
                    >
                        {props.address}
                    </a>
                </p>
            )}
        </div>
    );
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-xl';
        case 'wide':
            return 'max-w-screen-2xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}
