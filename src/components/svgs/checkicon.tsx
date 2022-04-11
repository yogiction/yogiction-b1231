import * as React from 'react';

export default function CheckedCircle({ className }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path id="regular_check-circle" data-name="regular check-circle" d="M28,8A20,20,0,1,0,48,28,20,20,0,0,0,28,8Zm0,3.871A16.129,16.129,0,1,1,11.871,28,16.12,16.12,0,0,1,28,11.871M39.307,22.376l-1.817-1.832a.968.968,0,0,0-1.369-.005l-11.4,11.308L19.9,26.985a.968.968,0,0,0-1.369-.006L16.7,28.8a.968.968,0,0,0-.005,1.369l7.321,7.38a.968.968,0,0,0,1.369.005L39.3,23.745a.968.968,0,0,0,.005-1.369Z" transform="translate(-8 -8)" fill="#a6bf36" />
        </svg>
    );
}
