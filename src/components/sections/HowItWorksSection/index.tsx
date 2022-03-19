/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';

export default function HowItWorksSection(props) {

    const cssId = props.elementId || null;
    const bgSize = props.backgroundSize || 'full';
    const sectionStyles = props.styles?.self || {};
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component  bg-white relative',
                'sb-component-section',
                'sb-component-contact-section',
                'pt-[60px] md:pt-[200px] px-[41px] md:px-[140px] pb-[60px] md:pb-[306px]',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                sectionStyles.margin
            )}
        >
            <img src={`/images/aboutusrightbg.png`} className={classNames(
                "hidden lg:block absolute",
                "top-0 left-[-200px] z-20",
                'w-[586px] h-[1018px]'
            )} alt="" />
            <img src={`/images/aboutusleftbg.png`} className={classNames(
                "hidden lg:block absolute",
                "bottom-[600px] right-[0px] z-20",
                'w-[299px] h-[1018px] opacity-[0.7]'
            )} alt="" />
            <img src={`/images/howitworksbg1.png`} className={classNames("absolute top-[-4.5vh] left-[138px]",
                'z-40', 'howitworkstopsticker')} alt="" />
            <h1 className={classNames(
                'text-center ',
                'font-[PoppinsMedium]',
                'font-semibold',
                'text-[25px] md:text-[60px]',
                'leading-[38px] md:leading-[90px]'
            )}
                style={{
                    color: 'rgba(23,52,80,1)',
                }}>{props.title}</h1>
            <img src={`/images/howitworksbg1.png`}
                className={classNames(
                    "lg:hidden w-full max-w-[219.5px]",
                    "mt-[60px] mx-auto block",
                    'max-w-[219.51px] max-h-[227px]',
                )} alt="" />
            <p className={classNames(
                'mt-[60px]',
                'text-left md:text-center',
                'font-[Poppins]',
                'font-normal',
                'text-[18px] md:text-[40px]',
                'text-[#173450]',
                'leading-[27px] md:leading-[60px]',
            )}
            >{props.description}</p>
            <div className={classNames('pt-[60px] md:pt-[156px]')}>
                {props.steps.map((step, index) => {
                    return (<div key={index} className='flex mb-[50px]  md:mb-[130px] flex-col md:flex-row justify-center'>
                        <div className={classNames(
                            "pt-0 md:text-left text-center mr-0 md:mr-[40px]",
                            "md:mb-[40px] mb-[30px] min-h-[140px] md:min-h-full min-w-[132px]",
                            "text-[100px] md:text-[200px] leading-[150px]",
                            'font-[Poppins] font-normal',
                            'font-semibold text-[#a6bf36]'
                        )}>
                            {index + 1}
                        </div>
                        <div className='flex flex-col max-w-[1048px]'>
                            <div className={classNames('leading-[27px] md:leading-[60px] mb-[20px] md:mb-[30px]',
                                'text-center md:text-left md:font-bold font-semibold',
                                'md:text-[40px] text-[18px]',
                                'font-[Poppins] font-normal text-[#173450]'
                            )}>{step.title}</div>
                            <div className={classNames("leading-[27px] md:leading-[60px] text-center md:text-left ",
                                'font-[Poppins] not-italic',
                                'font-normal max-w-[1037px] w-full',
                                'md:text-[40px] font-[18px] text-[#173450]')}>
                                {step.description}</div>
                        </div>
                    </div>)
                })}
            </div>
            <h1 className={classNames(
                'text-center',
                'font-[PoppinsMedium]',
                'font-[500]',
                'text-[18px] md:text-[40px]',
                'leading-[27px] md:leading-[60px]',
                'text-[#173450]',
                'font-semibold'
            )}
            >{props.benefitsTitle}</h1>
            <div className={classNames('flex mt-[35px] md:mt-[60px] flex-col  md:flex-row justify-center')}>
                <div
                    className={classNames("max-w-[585px] w-full ml-auto mr-auto md:mr-[25px] md:mt-0 bg-[#a6bf36]")}>
                    <h1 className={classNames("text-center mb-[24px] mt-[55px] leading-[27px] md:leading-[60px]",
                        'font-sans',
                        'not-italic',
                        'font-semibold',
                        'text-[18px] md:text-[40px]',
                        'text-[#173450]'
                    )} style={{
                    }}>{props.benefits[0].title}</h1>
                    <p className={classNames('mb-[55px] leading-[27px] md:leading-[60px] mx-[55px] text-center', 'font-[Poppins]', 'font-normal', 'text-[18px] md:text-[40px]', 'text-[#173450]')}>{props.benefits[0].description}</p>
                </div>
                <div
                    className={classNames("max-w-[585px] w-full ml-auto mr-auto mt-[35px] md:mt-0 md:ml-[25px] bg-[#a6bf36]")}>
                    <h1 className={classNames("text-center mb-[24px] mt-[55px] leading-[27px] md:leading-[60px]",
                        'font-sans',
                        'not-italic',
                        'font-semibold',
                        'text-[18px] md:text-[40px]',
                        'text-[#173450]'
                    )}
                    >{props.benefits[1].title}</h1>
                    <p className={classNames('mb-[55px] leading-[27px] md:leading-[60px] mx-[55px] text-center', 'font-[Poppins]', 'font-normal', 'text-[18px] md:text-[40px]', 'text-[#173450]')}>{props.benefits[1].description}</p>
                </div>
            </div>
        </div>
    );
}

function heroActions(props) {
    const actions = [props.actions] || [];
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
                className={classNames('overflow-x-hidden hidden md:block', {
                    'mt-8': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2',)}
                    data-sb-field-path=".actions"
                    style={actionStyle}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 mx-auto lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
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