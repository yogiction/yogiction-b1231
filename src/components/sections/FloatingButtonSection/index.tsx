/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function FloatingButtonSection(props) {
    console.log(props);
    const icons = props.icons;
    return (
        <div className="hidden md:block fixed bottom-[2.75rem] right-[2.75rem] z-[9999]">
            {icons && icons.map((icon, index) => {
                console.log(icon)
                return <a key={index} href={icon.link}>
                    <img src={icon.icon.url} alt='' />
                </a>
            })}
        </div>
    )
}
