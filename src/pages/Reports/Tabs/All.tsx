import { useState, useEffect } from 'react'
import Search from 'components/Search'
import Table from '@mui/material/Table'
import { TableHead } from '@mui/material'
import { TableBody } from '@mui/material'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import styled from '@emotion/styled'
import { Box, TableContainer } from '@mui/material'

import { useAppSelector } from 'store/hooks'
import { selectReports } from 'store/AppSlice'
import { ReactComponent as LocationIcon } from 'assets/icons/location.svg'
import './style.css'
import Button from 'components/Button'
import { notOlderThan10Minutes } from 'helpers/helpers'
import { Wildfire } from 'store/AppSlice'
import { setSolved } from 'store/AppSlice'
import { useAppDispatch } from 'store/hooks'
const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
        background-color: #1d1a3b;
    }
    &:nth-of-type(even) {
        background-color: #312d5b;
    }
    &:not(:first-of-type):hover {
        outline: #6557ff solid 1.2px;
        background-color: rgba(101, 87, 255, 0.2);
    }
`
type Props = {
    type: number
}
const All: React.FC<Props> = ({ type }) => {
    const dispatch = useAppDispatch()
    const data = useAppSelector(selectReports)
    const [details, setDetails] = useState<boolean[]>(
        new Array(data.length).fill(false)
    )
    const [displayData, setDisplayData] = useState<Wildfire[]>([])
    const [search, setSearch] = useState<string>('')
    useEffect(() => {
        if (type === 0) {
            setDisplayData(data)
        } else if (type === 1) {
            setDisplayData(
                data.filter((item) => notOlderThan10Minutes(item.date))
            )
        } else {
            setDisplayData(data.filter((item) => item.type === 'solved'))
        }
    }, [type, data])
    useEffect(() => {
        if (search !== '') {
            setDisplayData((prev) => {
                const newData = [...prev]
                return newData.filter(
                    (item) =>
                        item.userName.includes(search) ||
                        item.description.includes(search) ||
                        item.location.city.includes(search)
                )
            })
        } else {
            if (type === 0) {
                setDisplayData(data)
            } else if (type === 1) {
                setDisplayData(
                    data.filter((item) => notOlderThan10Minutes(item.date))
                )
            } else {
                setDisplayData(data.filter((item) => item.type === 'solved'))
            }
        }
    }, [search])
    const handleOnDetails = (index: number) => {
        setDetails((prev) => {
            const newDetails = [...prev] // Create a copy of the details array
            newDetails[index] = !newDetails[index] // Toggle the value at the specified index
            return newDetails // Return the updated array
        })
    }
    const handleSolve = (index: number) => {
        dispatch(setSolved(index))
    }

    return (
        <div className="px-[21px] py-[33px] flex flex-col gap-[33px]">
            <Search val={search} onChange={(val) => setSearch(val)} />
            <TableContainer component={Box}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#312d5b' }}>
                            <TableCell width="50px">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '6px 16px ',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <span className="tableHeader-text">ID</span>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '6px 16px',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <span className="tableHeader-text">
                                        UserName
                                    </span>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '6px 16px',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <span className="tableHeader-text">
                                        Location
                                    </span>
                                </Box>
                            </TableCell>
                            <TableCell style={{ width: '400px' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '6px 16px',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <span className="tableHeader-text">
                                        Description
                                    </span>
                                </Box>
                            </TableCell>
                            <TableCell style={{ width: '300px' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        padding: '6px 16px',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <span className="tableHeader-text">
                                        Action
                                    </span>
                                </Box>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayData.map((item, index) => (
                            <TableRowStyled key={index}>
                                <TableCell>
                                    <Box
                                        sx={{
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            paddingLeft: '16px',
                                            paddingTop: '14px',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <span className="tableBody-text">
                                            {item.id}
                                        </span>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            paddingLeft: '16px',
                                            paddingTop: '14px',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <span className="tableBody-text">
                                            {item.userName}
                                        </span>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            paddingLeft: '16px',
                                            paddingTop: '14px',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <div className="flex flex-row gap-2">
                                            <div className="flex justify-center items-center p-2.5 border border-[#312D56] rounded-full">
                                                <LocationIcon />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="tableBody-text">
                                                    {' '}
                                                    {item.location.city}
                                                </span>
                                                <span className="text-text-secondary text-[10px] ">{`${item.location.long}, ${item.location.lat}`}</span>
                                            </div>
                                        </div>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            overflow: 'hidden',
                                            maxWidth: '400px',
                                            paddingLeft: '16px',
                                            paddingTop: '14px',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <span
                                            className={`tableBody-text ${
                                                details[index]
                                                    ? null
                                                    : 'truncate ...'
                                            }`}
                                        >
                                            {item.description}
                                        </span>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '4px',
                                            paddingLeft: '16px',
                                            paddingTop: '14px',
                                            paddingBottom: '15px',
                                        }}
                                    >
                                        <Button
                                            text={`${
                                                details[index]
                                                    ? 'Show Less'
                                                    : 'View Details'
                                            }`}
                                            variant="outlined"
                                            onClick={() =>
                                                handleOnDetails(index)
                                            }
                                        />
                                        <Button
                                            text={`${
                                                item.type === 'solve'
                                                    ? 'Solve'
                                                    : 'Solved'
                                            }`}
                                            variant="outlined"
                                            onClick={() => {
                                                if (item.type === 'solved') {
                                                    return null
                                                }
                                                handleSolve(index)
                                            }}
                                        />
                                    </Box>
                                </TableCell>
                            </TableRowStyled>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default All
