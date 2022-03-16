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
    const sectionWidth = sectionStyles.width || 'wide';
    const sectionHeight = sectionStyles.height || 'auto';
    const sectionJustifyContent = sectionStyles.justifyContent || 'center';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component overflow-x-hidden bg-white relative',
                'sb-component-section',
                'sb-component-contact-section',
                'pt-[60px] md:pt-[200px] px-[41px] md:px-[140px] pb-[60px] md:pb-[306px]',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                sectionStyles.margin
            )}
        >
            <img src={`/images/howitworksbg1.png`} className={classNames("absolute top-[-8vh] left-[138px]",
                'z-40')} alt="" />
            {/* <div className={classNames(
                'hidden md:block after:absolute after:h-[370px]',
                'after:top-[-19vh] after:left-[138px]  after:bg-no-repeat after:bg-contain after:bg-left',
                "after:content-[''] after:w-[488px] after:z-[40]  after:bg-howitworksbgsticker"
            )} /> */}
            <h1 className={classNames(
                'text-center',
                'font-[PoppinsMedium]',
                'font-semibold',
                'text-[60px]',
                'leading-[90px]'
            )}
                style={{
                    color: 'rgba(23,52,80,1)',
                }}>{props.title}</h1>
            <p className={classNames(
                'mt-[60px]',
                'text-center',
                'font-[Poppins]',
                'font-normal',
                'text-[40px]',
                'text-[#173450]',
                'leading-[60px]',
            )}
            >{props.description}</p>
            <div className={classNames('pt-[156px]')}>
                {props.steps.map((step, index) => {
                    return (<div key={index} className='flex mb-[130px] flex-row justify-center'>
                        <div className={classNames("pt-[81px] mr-[40px] min-w-[132px]")} style={{
                            textAlign: 'left',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '200px',
                            color: 'rgba(166,191,54,1)',
                        }}>
                            {index + 1}
                        </div>
                        <div className='flex flex-col max-w-[1048px]'>
                            <div className='leading-[60px] mb-[30px]    ' style={{
                                textAlign: 'left',
                                fontFamily: ' Poppins',
                                fontStyle: 'normal',
                                fontWeight: ' bold',
                                fontSize: '40px',
                                color: 'rgba(23,52,80,1)'
                            }}>{step.title}</div>
                            <div className={classNames("leading-[60px] ")} style={{
                                textAlign: 'left',
                                fontFamily: 'Poppins',
                                fontStyle: ' normal',
                                fontWeight: 'normal',
                                fontSize: ' 40px',
                                color: ' rgba(23,52,80,1)',
                            }}>{step.description}</div>
                        </div>
                    </div>)
                })}
            </div>
            <h1 className={classNames(
                'text-center',
                'font-[PoppinsMedium]',
                'font-[500]',
                'text-[40px]',
                'leading-[60px]',
                'text-[#173450]'
            )}
            >{props.benefitsTitle}</h1>
            <div className={classNames('flex mt-[60px] flex-row justify-center')}>
                {props.benefits.map((benefit, index) => {
                    console.log(benefit)
                    return <div key={index}
                        className={classNames("max-w-[585px] ml-[50px] bg-[#a6bf36]")}>
                        <h1 className={classNames("text-center mb-[24px] mt-[55px] leading-[60px]")} style={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '40px',
                            color: 'rgba(23,52,80,1)',
                        }}>{benefit.title}</h1>
                        <p className={classNames('mb-[55px] leading-[60px] mx-[55px] text-center', 'font-[Poppins]', 'font-normal', 'text-[40px]', 'text-[#173450]')}>{benefit.description}</p>
                    </div>
                })}
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