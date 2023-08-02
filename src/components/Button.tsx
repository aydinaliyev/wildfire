import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface CustomProps extends HTMLAttributes<HTMLDivElement> {
    text: string
    startIcon?: ReactNode
    onClick?: () => void
    variant?: 'outlined'
}

const Button: FC<CustomProps> = ({ text, startIcon, onClick, variant }) => {
    return (
        <div
            className={`flex flex-row min-w-[130px]  justify-center py-3.5 px-4 gap-[5px] bg-${
                !!variant ? 'transparent' : '[#6E44FF]'
            } rounded-md shadow-button cursor-pointer
            ${!!variant ? 'border border-[#4C4876]' : null} 
            `}
            onClick={onClick}
        >
            {!!startIcon && startIcon}
            <span className="font-manrope text-base font-bold leading-5 text-white whitespace-nowrap">
                {text}
            </span>
        </div>
    )
}

export default Button
