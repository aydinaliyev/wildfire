import { useState } from 'react'
import { ReactComponent as SearcIcon } from 'assets/icons/search.svg'

type Props = {
    onChange: (val: string) => void
    val: string
}
const Search: React.FC<Props> = ({ val, onChange }) => {
    return (
        <div className="w-[363px] flex flex-row px-3.5 py-2 gap-1 justify-start items-center rounded bg-comp-dark border border-solid border-comp-light">
            <SearcIcon />
            <input
                className="border-0 p-0 w-full font-jakartaSans text-xs font-medium leading-6 bg-transparent outline-0  text-white placeholde:text-text-placeholder "
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder="Search here ..."
                value={val}
            />
        </div>
    )
}

export default Search
