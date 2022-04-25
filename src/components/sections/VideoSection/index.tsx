/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'

export default function VedioSection(props) {
    return (
        <div>
            <iframe
                width="100%"
                className={classNames(
                    'h-[241px] md:h-[1080px]'
                )}
                src={props.videoLink}
                title="YouTube video player"
                frameBorder="0px"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            {/* <div className="vidcontainer">
                    <div className="viditem">
                        <img src="InspiratorDifference-Thumbnail-wPlayArrow.png" alt='' />
                    </div>
                </div> */}
        </div>
    )
}
