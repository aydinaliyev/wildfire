import React, { FC, HTMLAttributes, ReactNode } from 'react'

interface CustomProps extends HTMLAttributes<HTMLDivElement> {
    text: string
    startIcon?: ReactNode
    onClick?: () => void
}

const Button: FC<CustomProps> = ({ text, startIcon, onClick }) => {
    return (
        <div
            className="flex flex-row py-3.5 px-4 gap-[5px] bg-[#6E44FF] rounded-md shadow-button cursor-pointer"
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
