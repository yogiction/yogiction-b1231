import * as React from 'react';
import classNames from 'classnames';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action } from '../../atoms';

export default function CtaSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    return (
        <div
            id={cssId}
            {...getDataAttrs(props)}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-cta-section'
            )}
        >
            <div
                className={classNames(
                    colors,
                    'flex',
                    'flex-col lg:flex-row',
                    'justify-between',
                    'relative pt-[37px] md:pt-[71px] pb-[53px] md:pb-[102px]',
                )}
                style={{
                    backgroundColor: props.backgroundColor || "",
                }}
            >
                <div
                    className={classNames("pl-[17%] md:pl-[140px] w-[100%] max-w-[385px] md:w-[748px] h-[175px] md:h-[333px] md:max-w-[750px] relative")}
                >
                    <div className={classNames('absolute md:w-[333px] w-[175px] md:h-[333px] h-[175px] bg-[#2C5D87] rounded-[50%]')} />
                    <div className={classNames(
                        'leading-[41px] md:leading-[80px]',
                        'md:text-[65px] text-[2.14rem]',
                        'md:top-[49px] top-[27px] left-[28vw] md:left-[224px]',
                        'text-white',
                        'font-[PoppinsMedium]',
                        'font-semibold',
                        'md:max-w-[520px] w-auto max-w-[258px]',
                        'absolute z-10'
                    )}>{props.leftSectionTitle}</div>
                </div>
                <div className={classNames("pr-[140px] md:block hidden pt-[56px]")}>
                    <div className={classNames(
                        "md:leading-[90px] leading-[56px]",
                        "md:text-[60px] text-[45px] text-right",
                        "text-white"
                    )}>{props.rightSectionTitle}</div>
                    {ctaActions(props)}
                </div>
            </div>
            {mobileCTA(props)}
        </div>
    );
}

function ctaActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    return (
        <>
            <div
                className={classNames('flex flex-row justify-end')}
                data-sb-field-path=".actions"
            >
                {actions.map((action, index) => {
                    return <Action key={index} {...action} className="mt-[40px]  lg:whitespace-nowrap" />
                })}
            </div>
        </>
    );
}

function mobileCTA(props) {
    let actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    } else {
        actions = props.actions[0];
    }
    return (
        <div className={classNames("active:bg-[#2b4c68] hover:cursor-pointer md:hidden w-full bg-[#2c5d87] h-[60px] items-center flex justify-center")}>
            <div className='text-[25px]  font-medium leading-[38px] text-white text-center'>{actions.label}</div>
        </div>
    );
}