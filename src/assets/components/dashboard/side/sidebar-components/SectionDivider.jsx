import React from 'react'

const SectionDivider = () => {
  return (
    <svg
    className="w-full m-[1rem_0_1rem]"
    width="100%"
    height="4"
    viewBox="0 0 100 4"
    fill="none"
    >
        <path
            d="M0 2H100"
            stroke="url(#paint0_linear_divider2)"
            strokeWidth="3"
        />
        <defs>
            <linearGradient
            id="paint0_linear_divider2"
            x1="0"
            y1="2"
            x2="100"
            y2="2"
            gradientUnits="userSpaceOnUse"
            >
            <stop stopColor="#E0E1E2" stopOpacity="0" />
            <stop offset="0.5" stopColor="#E0E1E2" />
            <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625" />
            </linearGradient>
        </defs>
    </svg>
  )
}

export default SectionDivider