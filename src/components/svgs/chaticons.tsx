import * as React from 'react';

export default function ChatIcon({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="130" height="130" viewBox="0 0 130 130">
            <defs>
                <filter id="Ellipse_7" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse">
                    <feOffset dy="10" />
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feFlood floodOpacity="0.161" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                </filter>
            </defs>
            <g id="Newtopia_Chat_Icon" data-name="Newtopia Chat Icon" transform="translate(-1767 -856)">
                <g id="Group_15" data-name="Group 15" transform="translate(2192.785 -184.215)">
                    <g transform="matrix(1, 0, 0, 1, -425.78, 1040.22)" filter="url(#Ellipse_7)">
                        <circle id="Ellipse_7-2" data-name="Ellipse 7" cx="35" cy="35" r="35" transform="translate(30 20)" fill="#a6bf36" />
                    </g>
                </g>
                <path id="solid_comment" data-name="solid comment" d="M16,32C7.163,32,0,37.819,0,45a11.539,11.539,0,0,0,3.563,8.169A15.9,15.9,0,0,1,.138,59.156a.5.5,0,0,0-.094.544A.489.489,0,0,0,.5,60a14.293,14.293,0,0,0,8.788-3.213A19.061,19.061,0,0,0,16,58c8.837,0,16-5.819,16-13S24.837,32,16,32Z" transform="translate(1816 865)" fill="#fff" />
            </g>
        </svg>

    );
}
