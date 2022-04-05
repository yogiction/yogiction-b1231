/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import classNames from 'classnames';
import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { getDataAttrs } from '../../../utils/get-data-attrs';
import { Action, Badge } from '../../atoms';

export default function IntroSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const titleStyles = props.styles?.title || {};
    const sectionHeight = sectionStyles.height || 'auto';
    const bgImage = props.backgroundImage || '';
    const logo = props.logo || '';
    const title = props.title || '';
    return (
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
        >Intro Section
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
                className={classNames('overflow-x-hidden hidden md:block', {
                    'mt-8': props.title || props.subtitle || props.text || props.badge
                })}
            >
                <div
                    className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null)}
                    data-sb-field-path=".actions"
                    style={actionStyle}
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