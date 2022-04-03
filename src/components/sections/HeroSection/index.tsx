/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action, Badge } from '../../atoms';

export default function HeroSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const titleStyles = props.styles?.title || {};
    const sectionHeight = sectionStyles.height || 'auto';
    const bgImage = props.backgroundImage || '';
    const logo = props.logo || '';
    const title = props.title || '';
    return (
        <>
            <div
                id={cssId}
                {...getDataAttrs(props)}
                style={{
                    borderWidth: sectionStyles.borderWidth ? `${sectionStyles.borderWidth}px` : null,
                    backgroundImage: `url('${bgImage.url}')`,
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
                    'bg-no-repeat bg-center bg-cover',
                    'pl-[39px] md:pl-[140px] pt-[25px] md:pt-[100px] pb-[20px] md:pb-[209px] pr-1',
                    sectionStyles.borderColor,
                    sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : 'border-none',
                    sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null
                )}
            >
                <div>
                    <div>
                        <img src={logo.url} className="h-[50px] w-[94px] md:h-[142px] md:w-[284px]" alt="" />
                        <div style={titleStyles} className={classNames('mt-[15px]  md:mt-[85px] text-[35px] leading-[53px] md:leading-[150px] md:text-[100px]',
                            "max-w-[300px]  md:max-w-[805px]")}>{title}</div>
                    </div>
                    <div>{heroActions(props)}</div>
                </div>
            </div>
            <div className={classNames("md:hidden w-full active:bg-[#2b4c68] hover:cursor-pointer bg-[#2c5d87] h-[60px] items-center flex justify-center")}>
                <div className='text-[25px] font-medium leading-[38px] text-white text-center'>SIGN UP NOW</div>
            </div>
        </>
    );
}


function heroBody(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.badge && <Badge {...props.badge} data-sb-field-path=".badge" />}
            {props.title && (
                <h2 className={classNames('h1', styles.title ? mapStyles(styles.title) : null, { 'mt-4': props.badge?.label })} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
        </div>
    );
}

function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const actionStyle = props.styles.actions || {};
    return (
        <>
            <div
                className={classNames('overflow-x-hidden z-20 hidden md:block', {
                    'mt-8': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                    data-sb-field-path=".actions"
                    style={actionStyle}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                    ))}
                </div>
            </div>
             <div
                className={classNames('z-20 hidden md:block', {
                    'mt-8': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center align-base', '-mx-2',)}
                    data-sb-field-path=".actions"
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} className="mb-3 border-b-0 mt-[6rem] mx-auto lg:whitespace-nowrap" />
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

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
    }
    return null;
}
