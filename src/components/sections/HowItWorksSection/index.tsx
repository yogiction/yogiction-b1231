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
    const steps = props.steps || [];
    const title = props.titleText || [];
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component  bg-white relative',
                'sb-component-section',
                'sb-component-contact-section md:pb-[140px]',
                'pt-[60px] 2xl:pt-[200px] md:pt-[150px] 2xl:px-[140px] md:px-[80px] pb-[60px] 2xl:pb-[306px]',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                sectionStyles.margin,
                'howitworksbg howitworksbg1'
            )}
        >
            <div className=' max-w-[353px] max-h-[365px] absolute 2xl:top-[-5.5vh] top-[-8vh] left-[138px] w-full'>
                <img src={`/images/howitworksbg1.png`} className={classNames("",
                    'z-40 2xl:w-[353px] 2xl:h-[365px] h-[310px] w-[310px]',
                    'howitworkstopsticker')} alt="" />
            </div>
            <h1 className={classNames(
                'text-center',
                'font-[PoppinsMedium]',
                'font-semibold  px-[41px]',
                'text-[25px] 2xl:text-[60px] md:text-[45px]',
                'leading-[38px] 2xl:leading-[90px] md:leading-[60px]'
            )}
                style={{
                    color: 'rgba(23,52,80,1)',
                }}>{title}</h1>
            <img src={`/images/howitworksbg1.png`}
                className={classNames(
                    "lg:hidden w-full max-w-[219.5px]",
                    "mt-[60px] mx-auto block",
                    'max-w-[219.51px] max-h-[227px]',
                )} alt="" />
            <p className={classNames(
                'mt-[60px]  px-[41px]',
                'text-left md:text-center',
                'font-[Poppins]',
                'font-normal',
                'text-[18px] 2xl:text-[40px] md:text-[30px]',
                'text-[#173450]',
                'leading-[27px] 2xl:leading-[60px] md:leading-[50px]',
            )}
            >{props.description}</p>
            <div className={classNames('pt-[60px] z-20 2xl:pt-[156px] md:pt-[120px] howitworksmobilebg')}>
                {steps.map((step, index) => {
                    return (<div key={index} className={classNames('flex mb-[50px]  px-[41px] flex-col md:flex-row justify-center',
                        (index === 3 ? ' md:mb-[110px]' : ' md:mb-[90px]'))}>
                        <div className={classNames(
                            "pt-[60px] md:pt-0 md:text-left text-center mr-0 md:mr-[40px]",
                            "md:mb-[40px] mb-[30px] min-h-[140px] md:min-h-full min-w-[132px]",
                            "text-[100px] 2xl:text-[200px] md:text-[150px] 2xl:leading-[150px] md:leading-[120px]",
                            'font-[Poppins] font-normal',
                            'font-semibold text-[#a6bf36]'
                        )}>
                            {index + 1}
                        </div>
                        <div className='flex flex-col max-w-[1048px]'>
                            <div className={classNames('leading-[27px] 2xl:leading-[60px] md:leading-[40px] mb-[20px] md:mb-[30px]',
                                'text-center md:text-left font-semibold',
                                '2xl:text-[40px] md:text-[32px] text-[18px]',
                                'font-[Poppins] font-normal text-[#173450]'
                            )}>{step.titleText}</div>
                            <div className={classNames("leading-[27px] 2xl:leading-[60px] text-center md:text-left ",
                                'font-[Poppins] not-italic md:leading-[40px]',
                                'font-normal max-w-[1037px] w-full',
                                '2xl:text-[40px] md:text-[30px] text-[18px] text-[#173450]')}>
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
                'text-[#173450] px-[41px]',
                'font-semibold'
            )}
            >{props.benefitsTitle}</h1>
            <div className={classNames('flex mt-[35px] px-[41px] lg:mt-[60px] flex-col  xl:flex-row justify-center')}>
                <div
                    className={classNames("max-w-[585px] w-full ml-auto mr-auto xl:mr-[25px] lg:mt-0 bg-[#a6bf36]")}>
                    <h1 className={classNames("text-center mb-[24px] mt-[55px]",
                        "leading-[27px] h-auto md:leading-[60px]",
                        'font-sans',
                        'not-italic',
                        'font-semibold',
                        'text-[18px] md:text-[40px]',
                        'text-[#173450]'
                    )} style={{
                    }}>{props.benefit1Title}</h1>
                    <p className={classNames(
                        'mb-[50px] md:mb-[55px] leading-[27px]',
                        '2xl:leading-[60px] md:leading-[50px] mx-[30px] md:mx-[55px] text-center',
                        'font-[Poppins]',
                        'font-normal',
                        'text-[18px] md:text-[36px] 2xl:text-[40px]',
                        'text-[#173450]'
                    )}>{props.benefit1Description}</p>
                </div>
                <div
                    className={classNames("max-w-[585px] w-full ml-auto mr-auto mt-[35px] xl:mt-0 xl:ml-[25px] bg-[#a6bf36]")}
                    style={{ height: "fit-content" }}>
                    <h1 className={classNames("text-center mb-[24px] mt-[55px]",
                        "leading-[27px] lg:leading-[60px]",
                        'font-sans',
                        'not-italic',
                        'font-semibold',
                        'text-[18px] md:text-[40px]',
                        'text-[#173450]'
                    )}
                    >{props.benefit2Title}</h1>
                    <p className={classNames('mb-[50px] md:mb-[55px] leading-[27px] 2xl:leading-[60px] md:leading-[50px]  mx-[30px] md:mx-[55px] text-center',
                        'font-[Poppins]',
                        'font-normal',
                        'text-[18px] md:text-[36px] 2xl:text-[40px]', 'text-[#173450]')}
                    >{props.benefit2Description}</p>
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