import React from 'react'
import ChatIcon from '../../svgs/chaticons'
import CheckIcon from '../../svgs/checkicons'

export default function FloatingButtonSection(props) {
    console.log(props);
    return (
        <div className="hidden md:block fixed bottom-[2.75rem] right-[2.75rem] z-[9999]">
            <div><ChatIcon className="" /></div>
            <div><CheckIcon className="" /></div>
        </div>
    )
}
