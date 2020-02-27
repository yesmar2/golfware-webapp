import React from 'react';

const GolfBall = ({ className }) => (
    <svg
        width="12"
        height="18"
        viewBox="0 0 12 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 13.5L5.53791 15.7151V18H6.46209V15.7151L8.5 13.5H3.5Z"
            fill="white"
        />
        <path
            d="M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z"
            fill="white"
        />
    </svg>
);

// TODO: when more icons are added we can remove eslint disable
// eslint-disable-next-line import/prefer-default-export
export { GolfBall };
