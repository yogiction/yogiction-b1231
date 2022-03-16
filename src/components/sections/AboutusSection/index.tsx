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
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component overflow-x-hidden bg-white',
                'sb-component-section relative',
                'sb-component-contact-section',
                'pt-[60px] md:pt-[200px] px-[41px] md:px-[140px] pb-[60px] md:pb-[306px]',
                bgSize === 'inset' ? 'flex' : null,
                bgSize === 'inset' ? mapStyles({ justifyContent: sectionJustifyContent }) : null,
                sectionStyles.margin
            )}
        >
            <div
                className={classNames(
                    'flex',
                    'flex-col md:flex-row',
                    'justify-center w-full mx-auto',
                    bgSize === 'inset' ? '' : null,
                    bgSize === 'inset' ? mapMaxWidthStyles(sectionWidth) : null,
                    mapMinHeightStyles(sectionHeight),
                )}
                style={{
                    borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null
                }}
            >
                {/* <div className={classNames(
                    'after:absolute after:h-[1018px]',
                    'after:top-[-200px] after:right-0  after:bg-no-repeat after:bg-contain after:bg-left',
                    "after:content-[''] after:relative  after:w-[1018px] after:opacity-[0.7] after:z-[-10]  after:bg-aboutustopleft"
                )} /> */}
                <div
                    className={classNames(
                        'min-w-[741px] w-full relative mx-[56px] md:mx-auto',
                    )}
                >
                    <img className='absolute z-[20] top-0 left-0 max-w-[292px] ml-[-25px] md:ml-0 md:max-w-[610px] max-h-[935px] mt-[225px] md:mt-0' src="/images/aboutus2.png" alt="" />
                    <img className='absolute top-0 z-[20] left-0 max-w-[218px] md:max-w-[455px] max-h-[698px] mt-[474px]  md:mt-[516px] ml-[70px] md:ml-[204px]' src="/images/aboutus1.png" alt="" />
                    <div className={classNames(
                        'hidden md:block after:absolute after:h-[319px]',
                        'after:top-[114vh] after:left-[-3vw]  after:bg-no-repeat after:bg-contain after:bg-left',
                        "after:content-[''] after:w-[434px] after:z-[10]  after:bg-aboutusbg1"
                    )} />
                </div>
                <div>
                    <h1 className={classNames(
                        'uppercase',
                        'text-center md:text-left',
                        'font-[Poppins] md:font-[PoppinsMedium]',
                        'font-semibold leading-[60px]',
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
                    <p className={classNames(
                        'md:mt-[60px] mt-[700px]',
                        'md:leading-[60px] leading-[27px]',
                        'text-left',
                        'font-[Poppins]',
                        'font-normal',
                        'md:text-[40px] text-[18px]',
                        'text-[#173450]'
                    )}>{props.text}</p>
                    <p className={classNames(
                        'md:mt-[60px] mt-[54px]',
                        'md:leading-[60px] leading-[27px]',
                        'text-left',
                        'font-[Poppins]',
                        'font-normal',
                        'md:text-[40px] text-[18px]',
                        'text-[#173450]'
                    )}>{props.text1}</p>
                </div>
            </div>

            <div className='hidden relative md:block mt-[267px]'>

                {heroActions(props)}
                <div className={classNames(
                    'hidden md:block absolute h-[370px]',
                    'top-[-16vh] right-[-0.7vw]  bg-no-repeat bg-contain bg-left',
                    "content-[''] w-[488px] z-[10]  bg-aboutusbg2"
                )} />
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
                className={classNames('z-20 hidden md:block', {
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