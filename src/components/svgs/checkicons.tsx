import * as React from 'react';

export default function CheckIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="130" height="130" viewBox="0 0 130 130">
            <defs>
                <filter id="Ellipse_7" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse">
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feFlood floodOpacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
                <clipPath id="clip-path">
                    <rect id="Rectangle_20" data-name="Rectangle 20" width="32.57" height="45.149" fill="none" />
                </clipPath>
            </defs>
            <g id="AccessiBe_Icon" data-name="AccessiBe Icon" transform="translate(425.785 -1040.215)">
                <g transform="matrix(1, 0, 0, 1, -425.78, 1040.22)" filter="url(#Ellipse_7)">
                    <circle id="Ellipse_7-2" data-name="Ellipse 7" cx="35" cy="35" r="35" transform="translate(30 20)" fill="#146ff8" />
                </g>
                <g id="Group_13" data-name="Group 13" transform="translate(-377.522 1072.318)">
                    <g id="Group_12" data-name="Group 12" clipPath="url(#clip-path)">
                        <path id="Path_9" data-name="Path 9" d="M56.91,10a5,5,0,1,0-5-5,5,5,0,0,0,5,5" transform="translate(-40.606)" fill="#fff" />
                        <path id="Path_10" data-name="Path 10" d="M30.623,37.842,18.175,41.237H14.4L1.948,37.842c-3.062,1.464-1.6,4.593-1.6,4.593L12.6,45.83l-.133,13.181L6.94,72.458a2.135,2.135,0,0,0,2.851,2.2L15.86,64l.425-.255L16.71,64l6.069,10.651a2.135,2.135,0,0,0,2.851-2.2L20.1,59.011,19.972,45.83l12.249-3.395s1.464-3.129-1.6-4.593" transform="translate(0 -29.602)" fill="#fff" />
                    </g>
                </g>
            </g>
        </svg>

    );
}
