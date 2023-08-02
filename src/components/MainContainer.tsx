import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
    fixed?: boolean
}
const MainContainer: FC<Props> = ({ children, fixed }) => {
    return (
        <div
            className={`flex flex-col w-full h-fit max-h-[90%] grow-0 rounded-lg bg-comp-main shadow-lg ${
                fixed ? null : 'overflow-y-auto'
            }`}
        >
            {children}
        </div>
    )
}

export default MainContainer
