/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames'
import React from 'react'

export default function VedioSection(props) {
    return (
        <div>
            {/* <iframe src="https://player.vimeo.com/video/**yourvideonumberhere**" width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
            <iframe
                width="100%"
                className={classNames(
                    'h-[241px] md:h-[1080px]'
                )}
                src={props.videoLink}
                title="YouTube video player"
                frameBorder="0"
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
