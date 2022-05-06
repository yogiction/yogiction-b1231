/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';
import CheckedCircle from '../../svgs/checkicon';

export default function IntroSection(props) {
    const cssId = props.elementId || null;
    const sectionStyles = props.styles?.self || {};
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionImage = props.sectionImage.url || '';
    const title = props.titleText || '';
    const description = props.description || '';
    const bottomTitle = props.bottomTitle || '';
    return (
        <>
            <div className={classNames(
                'md:hidden max-w-[1200px]  w-auto  h-auto ',
                'flex flex-col  mx-auto ',
                'bg-white containershadow'
            )}>
                <div className={classNames(
                    'max-w-[219px] w-[100%] h-auto',
                    'max-h-[123px] mt-[8px] mx-auto'
                )}>
                    <img src={props.headerBoxImage.url} className={classNames(
                        'w-[100%] h-auto mt-[16px]]',
                        'max-h-[218px]'
                    )} alt="" />
                </div>
                <div className={classNames(
                    'leading-[27px] font-medium text-center max-w-[346px] mb-[29px] mx-auto w-full '
                )} style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontSize: '18px',
                    color: 'rgba(23,52,80,1)'
                }}>{props.headerBoxTitle}</div>
            </div>
            <div
                id={cssId}
                {...getDataAttrs(props)}
                style={{
                    borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null,
                }}
                className={classNames(
                    'sb-component',
                    'sb-component-section',
                    'sb-component-hero-section',
                    'flex',
                    'flex-col z-0',
                    'justify-center',
                    mapMinHeightStyles(sectionHeight),
                    sectionStyles.margin,
                    'bg-no-repeat bg-center bg-[#e1e6ea] bg-cover',
                    'pl-0 pb-[140px] 2xl:pb-[200px] relative',
                    'introsectionbg',
                    sectionStyles.borderColor,
                    sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                    sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
                )}>

                <div className={classNames(
                    'max-w-[63%] md:flex  w-[100%] h-auto min-h-[250px]',
                    'hidden flex-col xl:flex-row absolute top-[-125px]  left-[18.5vw]',
                    'bg-white'
                )} style={{
                    boxShadow: "0px 10px 30px #00000029"
                }}>
                    <div className={classNames(
                        'max-w-[387px] w-[100%] h-auto',
                        'max-h-[218px] mx-auto xl:mr-[56px] my-auto xl:ml-[100px]'
                    )}>
                        <img src={props.headerBoxImage.url} className={classNames(
                            'w-[100%] h-auto',
                            'max-h-[218px]'
                        )} alt="" />
                    </div>
                    <h1 className={classNames(
                        'leading-[46px] text-center 2xl:mb-[80px]',
                        'font-medium  mx-[10%] my-[38px]  xl:ml-0 xl:mr-[100px] w-full 2xl:mt-[81px]',
                        'max-w-[80%]'
                    )} style={{
                        fontFamily: 'Poppins',
                        fontSize: '30px',
                        color: 'rgba(23,52,80,1)'
                    }}>{props.headerBoxTitle}</h1>
                </div>
                <div className={classNames(
                    "mt-[60px] md:mt-0 block md:hidden",
                    'text-center mb-[30px] md:mb-0 font-sans mx-auto max-w-[346px] font-bold text-[25px] leading-[38px]'
                )} style={{
                    color: "rgba(23,52,80,1)"
                }}>{title}</div>
                <div className={classNames(
                    'flex xl:flex-row pl-0 md:pl-[80px] 2xl:pl-[140px] flex-col justify-center'
                )}>
                    <div className={classNames(
                        "max-w-[899px] w-full order-last xl:order-1"
                    )}>
                        <div className={classNames(
                            "2xl:text-[60px] hidden md:block font-semibold 2xl:leading-[90px] mt-0 xl:mt-[305px]",
                            "text-[45px] leading-[60px]"
                        )} style={{
                            textAlign: "left",
                            fontFamily: "Poppins",
                            color: "rgba(23,52,80,1)"
                        }}>{title}</div>
                        <div className={classNames(
                            "max-w-[346px] md:max-w-[899px] mx-auto 2xl:leading-[60px] mt-[60px]",
                            "md:text-[30px] text-[18px] 2xl:text-[40px] ",
                            'md:leading-[45px] leading-[27px]'
                        )} style={{
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontWeight: "normal",
                            color: "rgba(23,52,80,1)",
                        }}>{description}</div>
                        {heroActions(props)}
                    </div>
                    <div className={classNames(
                        'w-full',
                        'order-1 xl:order-last',
                        'mt-0 md:mt-[375px]'
                    )} style={{
                        overflowX: "hidden"
                    }}>
                        <img src={sectionImage} className={classNames(
                            "h-auto md:max-h-[798px] md:max-w-[800px]  w-full",
                            'max-h-[227px] max-w-[238px] mx-auto',
                        )} alt="" />
                    </div>
                </div>
                <div className='flex'>
                    <div className={classNames(
                        'bg-gray-600 h-[1px] md:block hidden w-[100%]',
                        'mx-[13.7%] 2xl:mt-[200px] 2xl:mb-[200px]',
                        'my-[150px]'
                    )} style={{
                        opacity: '0.35',
                        fill: 'transparent',
                        stroke: 'rgba(23,52,80,1)',
                        strokeWidth: '1px',
                        strokeLinejoin: 'miter',
                        strokeLinecap: 'butt',
                        strokeMiterlimit: '4',
                        shapeRendering: 'auto',
                    }} />
                </div>
                <div className={classNames(
                    '2xl:leading-[90px] md:leading-[60px]',
                    '2xl:text-[60px] md:text-[45px] font-normal',
                    'text-center font-semibold',
                    'md:block hidden'
                )} style={{
                    fontFamily: "Poppins",
                    color: "rgba(23,52,80,1)"
                }}>{bottomTitle}</div>
                <div className={classNames("md:flex hidden items-center	 flex-col 2xl:flex-row justify-center")}>
                    {props.benefits.map((item, index) => {
                        return (
                            <div key={index} className={classNames(
                                'flex 2xl:mt-[68px] md:mt-[48px]',
                                index !== 0 ? "ml-0 lg:ml-[89px]" : "ml-0"
                            )}>
                                <CheckedCircle className={classNames(
                                    '2xl:mt-2 mt-0 h-[40px] w-[40px]'
                                )} />
                                <div className={classNames(
                                    'text-left font-sans',
                                    '2xl:text-[40px] 2xl:leading-[60px] ml-[20px] font-normal',
                                    'md:text-[35px] md:leading-[40px]'
                                )} style={{
                                    color: "rgba(23,52,80,1)"
                                }}>{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            {mobileCTA(props)}
            <div className={classNames(
                'leading-[38px] pt-[60px]',
                'text-[25px] font-semibold block md:hidden bg-[#e1e6ea] '
            )} style={{
                textAlign: "center",
                fontFamily: "Poppins",
                fontStyle: "normal",
                color: "rgba(23,52,80,1)"
            }}>{bottomTitle}</div>
            <div className={classNames("bg-[#e1e6ea] flex pb-[60px] md:hidden flex-col lg:flex-row justify-center")}>
                {props.benefits.map((item, index) => {
                    return (
                        <div key={index} className={classNames(
                            'flex flex-col  mt-[35px]',
                        )}>
                            <CheckedCircle className={classNames(
                                'mx-auto',
                                'h-[35px] w-[35px]'
                            )} />
                            <div className={classNames(
                                'text-center mt-[15px] mx-auto font-sans',
                                'text-[18px] leading-[27px] font-normal'
                            )} style={{
                                color: "rgba(23,52,80,1)"
                            }}>{item}</div>
                        </div>
                    )
                })}
            </div>
        </>
    );
}


function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    return (
        <>
            <div
                className={classNames('overflow-x-hidden hidden md:block', {
                    'mt-[70px]': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                    data-sb-field-path=".actions"
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-0 mx-2  max-w-[456px] w-full max-h-[95px]  border-t-0 border-b-0 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            </div>
        </>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mobileCTA(props) {
    const actions = props.actions[0] || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className={classNames("active:bg-[#2b4c68]  hover:bg-[#2f6899] hover:cursor-pointer md:hidden w-full bg-[#2c5d87] h-[60px] items-center flex justify-center")}>
            <div className='text-[25px]  font-medium leading-[38px] text-white text-center'>{actions.label}</div>
        </div>
    );
}