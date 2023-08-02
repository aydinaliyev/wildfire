import React, { FC, ReactNode } from 'react'

type Props = {
    children: ReactNode
}
const MainContainer: FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-col w-full h-fit max-h-full grow-0 rounded-lg bg-comp-main shadow-lg">
            {children}
        </div>
    )
}

export default MainContainer
