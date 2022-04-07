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
    const title = props.title || '';
    const description = props.description || '';
    const bottomTitle = props.bottomTitle || '';
    return (
        <>
            <div className={classNames(
                'md:hidden max-w-[1200px]  w-auto  h-auto ',
                'flex flex-col  mx-auto ',
                'bg-white containershadow'
            )}>
                {console.log(props)}
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
                    'leading-[27px] max-w-[346px] mb-[29px] mx-auto w-full '
                )} style={{
                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
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
                    'pl-[140px] pb-[200px] relative',
                    sectionStyles.borderColor,
                    sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                    sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
                )}>

                <div className={classNames(
                    'max-w-[70%] md:flex  w-[100%]  h-auto min-h-[250px]',
                    'hidden flex-col xl:flex-row absolute top-[-110px] mx-auto left-[20vw]',
                    'bg-white'
                )} style={{
                    boxShadow: "0px 10px 30px #00000029"
                }}>
                    {console.log(props)}
                    <div className={classNames(
                        'max-w-[387px] w-[100%] h-auto',
                        'max-h-[218px] mr-[56px] ml-[100px]'
                    )}>
                        <img src={props.headerBoxImage.url} className={classNames(
                            'w-[100%] h-auto mt-[16px]]',
                            'max-h-[218px] mt-[16px]'
                        )} alt="" />
                    </div>
                    <div className={classNames(
                        'leading-[46px] max-w-[557px] mr-[100px] w-full mt-[81px]'
                    )} style={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '30px',
                        color: 'rgba(23,52,80,1)'
                    }}>{props.headerBoxTitle}</div>
                </div>
                <div className={classNames(
                    'flex'
                )}>
                    <div className={classNames(
                        "max-w-[899px] w-full"
                    )}>
                        <div className={classNames(
                            "text-[60px] leading-[90px] mt-[305px]"
                        )} style={{
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "bold",
                            fontSize: "60px",
                            color: "rgba(23,52,80,1)"
                        }}>{title}</div>
                        <div className={classNames(
                            "text-[40px] leading-[60px] mt-[60px]"
                        )} style={{
                            textAlign: "left",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontSize: "40px",
                            color: "rgba(23,52,80,1)",
                        }}>{description}</div>
                        {heroActions(props)}
                    </div>
                    <div className={classNames(
                        'w-full',
                        'relative',
                    )} style={{
                        overflowX: "hidden"
                    }}>
                        <div className={classNames(
                            'bg-white  h-[351px] rounded-[50%] mt-[436px] w-[351px] mx-auto',
                            'overflow-hidden'
                        )}> </div>
                        <img src={sectionImage} className={classNames(
                            "h-[100%] max-h-[798px] min-w-[1012px]  w-full",
                            'absolute top-[334px] left-[-14px]'
                        )} alt="" />
                    </div>
                </div>
                <div className={classNames(
                    'bg-gray-600 h-[1px] max-w-[1395px] w-[100%]',
                    'mx-auto mt-[200px] mb-[200px]',
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
                <div className={classNames(

                )} style={{
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "60px",
                    color: "rgba(23,52,80,1)"
                }}>{bottomTitle}</div>
                <div className={classNames("flex pl-[52px] justify-center")}>
                    {props.benefits.map((item, index) => {
                        return (
                            <div key={index} className={classNames(
                                'flex mt-[68px]',
                                index !== 0 ? "ml-[89px]" : "ml-0"
                            )}>
                                <CheckedCircle className={classNames(
                                    'mt-2'
                                )} />
                                <div className={classNames(
                                    'text-left font-sans',
                                    'text-[40px] leading-[60px] ml-[20px] font-normal'
                                )} style={{
                                    color: "rgba(23,52,80,1)"
                                }}>{item}</div>
                            </div>
                        )
                    })}
                </div>
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
                    'mt-8': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                    data-sb-field-path=".actions"
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 mx-2  border-t-0 border-b-0 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
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