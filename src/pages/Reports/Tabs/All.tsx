import Search from 'components/Search'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

import styled from '@emotion/styled'
import { Box, Paper, TableContainer } from '@mui/material'

import './style.css'

const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
        background-color: #312d5b;
    }
    &:nth-of-type(even) {
        background-color: #1d1a3b;
    }
    &:not(:first-child):hover {
        outline: #6557ff solid 1.2px;
        background-color: rgba(101, 87, 255, 0.2);
    }
`

const data = [
    {
        id: 1,
        username: 'username',
        location: {
            address: 'address',
            city: 'city',
            state: 'state',
            long: 'long',
            lat: 'lat',
        },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam iure cumque suscipit recusandae. Soluta accusantium iste, corrupti, dolores nesciunt suscipit qui dolorum reiciendis culpa minima totam doloremque in molestias!',
    },
    {
        id: 1,
        username: 'username',
        location: {
            address: 'address',
            city: 'city',
            state: 'state',
            long: 'long',
            lat: 'lat',
        },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam iure cumque suscipit recusandae. Soluta accusantium iste, corrupti, dolores nesciunt suscipit qui dolorum reiciendis culpa minima totam doloremque in molestias!',
    },
    {
        id: 1,
        username: 'username',
        location: {
            address: 'address',
            city: 'city',
            state: 'state',
            long: 'long',
            lat: 'lat',
        },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam iure cumque suscipit recusandae. Soluta accusantium iste, corrupti, dolores nesciunt suscipit qui dolorum reiciendis culpa minima totam doloremque in molestias!',
    },
    {
        id: 1,
        username: 'username',
        location: {
            address: 'address',
            city: 'city',
            state: 'state',
            long: 'long',
            lat: 'lat',
        },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ullam iure cumque suscipit recusandae. Soluta accusantium iste, corrupti, dolores nesciunt suscipit qui dolorum reiciendis culpa minima totam doloremque in molestias!',
    },
]

const All = () => {
    return (
        <div className="px-[21px] pt-[33px] flex flex-col gap-[33px]">
            <Search />
            <TableContainer component={Box}>
                <Table>
                    <TableRowStyled>
                        <TableCell>
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: '6 0',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <span className="tableHeader-text">ID</span>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: '6 0',
                                    alignItems: 'center',
                                    justifyContent: 'center',
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
                                    padding: '6 0',
                                    alignItems: 'center',
                                    justifyContent: 'center',
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
                                    padding: '6 0',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <span className="tableHeader-text">
                                    Description
                                </span>
                            </Box>
                        </TableCell>
                        <TableCell>
                            <Box
                                sx={{
                                    display: 'flex',
                                    padding: '6 0',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <span className="tableHeader-text">Action</span>
                            </Box>
                        </TableCell>
                    </TableRowStyled>

                    {data.map((item, index) => (
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
                                        {item.username}
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
                                    <span className="tableBody-text ">
                                        {item.location.address}
                                    </span>
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
                                    <span className="tableBody-text truncate ...">
                                        {item.description}
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
                                    <span className="tableBody-text ">
                                        Action
                                    </span>
                                </Box>
                            </TableCell>
                        </TableRowStyled>
                    ))}
                </Table>
            </TableContainer>
        </div>
    )
}

export default All
