import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'

const Input = React.forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => {
        return (
            <TextField
                ref={ref}
                {...props}
                sx={{
                    '& .css-8ewcdo-MuiInputBase-root-MuiOutlinedInput-root': {
                        padding: '0px',
                    },
                    '& .MuiInputBase-input': {
                        background: '#1C1939',
                        padding: '9.5px',
                        boxSizing: 'border-box',
                        height: '42px',
                        borderRadius: '4px',
                        border: '1px solid #312D5B',
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            borderColor: '#312D5B',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#6E44FF', // Replace with your desired color
                        },
                    },
                }}
            />
        )
    }
)

export default Input
