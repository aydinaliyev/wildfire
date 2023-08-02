import React from 'react'
import { Select as MuiSelect, SelectProps } from '@mui/material'

const Select = React.forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
    return (
        <MuiSelect
            ref={ref}
            {...props}
            sx={{
                '& .MuiInputBase-input': {
                    background: '#1C1939',
                    padding: '9.5px',
                    boxSizing: 'border-box',
                    height: '42px',
                    borderRadius: '4px',
                    border: '1px solid #312D5B',
                    color: 'white',
                },
            }}
        />
    )
})

export default Select
