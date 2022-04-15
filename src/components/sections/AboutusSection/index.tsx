/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';

export default function AboutusSection(props) {
    const cssId = props.elementId || null;
    const bgSize = props.backgroundSize || 'full';
    const sectionStyles = props.styles?.self || {};
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    return (
        <div>
            <div
                id={cssId}
                {...getDataAttrs(props)}
                className={classNames(
                    'sb-component  bg-white',
                    'sb-component-section relative',
                    'sb-component-contact-section',
                    'pt-[60px] md:pt-[200px] px-[41px] md:px-[140px] pb-[60px] md:pb-[306px]',
                    bgSize === 'inset' ? 'flex' : null,
                    bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                    sectionStyles.margin,
                    'aboutusbottomrightbg',
                    'aboutusSmBg'
                )}
            >
                <img src={`/images/aboutusrightbg.png`} className={classNames(
                    "absolute hidden md:block ",
                    "top-[785px] md:top-[15px] left-[-30px] md:left-[-164px] z-20",
                    'w-[154px] md:w-[586px] h-[200px] md:h-[1018px]'
                )} alt="" />
                {/* <img src={`/images/aboutusleftbg.png`} className={classNames(
                    "absolute",
                    "top-[15rem]  md:bottom-[185px] right-[0px] md:right-[0px] z-20",
                    'w-[156px] md:w-[299px] h-[201px] md:h-[1018px] opacity-[0.7]'
                )} alt="" /> */}
                <div
                    className={classNames(
                        'flex',
                        'flex-col xl:flex-row',
                        'justify-center w-full mx-auto ',
                        bgSize === 'inset' ? '' : null,
                        bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                        mapMinHeightStyles(sectionHeight),
                    )}
                    style={{
                        borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
                    }}
                >
                    <div
                        className={classNames(
                            'max-w-[741px] md:mt-[60px] w-full hidden md:block z-30 relative mx-[56px] xl:ml-0 md:mx-auto md:mr-[82px]',
                        )}
                    >
                        <img className=' max-w-[292px] ml-[-25px] md:ml-0 md:max-w-[610px] max-h-[935px] mt-[225px] md:mt-0' src="/images/aboutus2.png" alt="" />
                        <img className=' max-w-[218px] md:max-w-[455px] max-h-[698px] mt-[474px]  md:mt-[-419px] ml-[70px] md:ml-[204px]' src="/images/aboutus1.png" alt="" />
                        <div className={classNames(
                            'hidden md:block  h-[319px]',
                            'mt-[-100px] ml-[-30px] bg-no-repeat bg-contain bg-left',
                            "content-[''] w-[434px] bg-aboutusbg1"
                        )} />
                    </div>
                    <div className={classNames('max-w-[899px]')}>
                        <h1 className={classNames(
                            'uppercase',
                            'text-center md:text-left',
                            'font-[Poppins] md:font-[Poppins]',
                            'font-semibold leading-[38px] md:leading-[60px]',
                            'mb-[30px]',
                            'text-[25px] md:text-[40px]',
                        )}
                            style={{
                                color: "rgba(166,191,54,1)",
                            }}>{props.titleHeader}</h1>
                        <h1 className={classNames('leading-[38px] md:leading-[90px]',
                            'text-center md:text-left',
                            'font-[Poppins]',
                            'font-semibold',
                            'text-[25px] md:text-[60px]',
                        )}
                            style={{
                                color: 'rgba(23,52,80,1)',
                            }}>{props.title}</h1>
                        <div
                            className={classNames(
                                'w-full block md:hidden  relative',
                            )}
                        >
                            <img className=' mx-auto ml-[15px] max-w-[292px]  md:ml-0 mt-[60px] object-cover w-full	 max-h-[935px]' src="/images/aboutus2.png" alt="" />
                            <img className=' max-w-[218px] object-cover w-full max-h-[698px] mt-[-199px] ml-[29%] md:ml-[204px]' src="/images/aboutus1.png" alt="" />
                            <div className={classNames(
                                'hidden md:block  h-[319px]',
                                'mt-[-100px] ml-[-30px] bg-no-repeat bg-contain bg-left',
                                "content-[''] w-[434px] bg-aboutusbg1"
                            )} />
                        </div>
                        <p className={classNames(
                            'md:mt-[60px] mt-[60px]',
                            'md:leading-[60px] leading-[27px]',
                            'text-left',
                            'font-[Poppins]',
                            'font-normal',
                            'md:text-[40px] text-[18px]',
                            'text-[#173450]',
                        )}>{props.text}</p>
                        <p className={classNames(
                            'md:mt-[60px] mt-[28px]',
                            'md:leading-[60px] leading-[27px]',
                            'text-left',
                            'font-[Poppins]',
                            'font-normal',
                            'md:text-[40px] text-[18px]',
                            'text-[#173450]'
                        )}>{props.text1}</p>
                    </div>
                </div>
                <div className='aboutusbottoms h-[104px] relative md:block '>
                    {heroActions(props)}
                    <div className={classNames(
                        'aboutusbottoms absolute h-[370px]',
                        'top-[-5vh] lg:right-[-0.7vw] xl:right-[2%]  bg-no-repeat bg-contain bg-left',
                        "content-[''] w-[488px] z-[10]  bg-aboutusbg2"
                    )} />
                </div>
            </div>
            {mobileCTA(props)}
        </div>
    );
}

function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = {};
    const actionStyle = {
        marginLeft: "auto",
        marginRight: "auto"
    };
    return (
        <>
            <div
                className={classNames('z-20 hidden md:block', {
                    'mt-8': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center align-base', '-mx-2',)}
                    data-sb-field-path=".actions"
                    style={actionStyle}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 mt-[6rem] mx-auto lg:whitespace-nowrap" />
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

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mobileCTA(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className={classNames("active:bg-[#2b4c68] hover:cursor-pointer md:hidden w-full bg-[#2c5d87] h-[60px] items-center flex justify-center")}>
            <div className='text-[25px]  font-medium leading-[38px] text-white text-center'>{actions.label}</div>
        </div>
    );
}