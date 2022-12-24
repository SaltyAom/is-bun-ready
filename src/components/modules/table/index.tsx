import { ChangeEvent, useState } from 'react'

import {
    Box,
    Collapse,
    IconButton,
    TablePagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableSortLabel
} from '@mui/material'

import {
    KeyboardArrowDown as KeyboardArrowDownIcon,
    KeyboardArrowUp as KeyboardArrowUpIcon,
    Launch as LaunchIcon
} from '@mui/icons-material'

import Markdown from 'react-markdown'
import type { NormalComponents } from 'react-markdown/lib/complex-types'
import type { SpecialComponents } from 'react-markdown/lib/ast-to-react'

import { Search } from '@components'
import { symbol, data as rows } from '@stores'
import type { Item } from '@models'
import type { Sort, SortBy } from './types'

const components: Partial<Omit<NormalComponents, keyof SpecialComponents>> = {
    a(props) {
        return (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a {...props} className="text-blue-500 underline" target="_blank" />
        )
    }
}

function Row({
    name,
    type,
    supports,
    bunVersion,
    lastUpdate,
    detail,
    link
}: Item) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    {detail ? (
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                            className="h-8"
                        >
                            {open ? (
                                <KeyboardArrowUpIcon />
                            ) : (
                                <KeyboardArrowDownIcon />
                            )}
                        </IconButton>
                    ) : (
                        <div className="h-8" />
                    )}
                </TableCell>
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="center">{symbol[supports]}</TableCell>
                <TableCell align="left" className="capitalize">
                    {type}
                </TableCell>
                <TableCell align="left">{bunVersion}</TableCell>
                <TableCell align="left">{lastUpdate}</TableCell>
                <TableCell align="right">
                    <IconButton href={link} target="_blank">
                        <LaunchIcon className="transform scale-90 text-gray-400" />
                    </IconButton>
                </TableCell>
            </TableRow>
            {detail && (
                <TableRow>
                    <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={7}
                    >
                        <Collapse in={open} unmountOnExit>
                            <Box sx={{ margin: 3 }}>
                                <Markdown components={components}>
                                    {detail}
                                </Markdown>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            )}
        </>
    )
}

const handleSort = ({
    name,
    orderBy,
    setOrderBy
}: {
    name: Sort
    orderBy: string
    // eslint-disable-next-line no-unused-vars
    setOrderBy: (newValue: SortBy) => void
}) => {
    return {
        active: orderBy === `${name}.asc`,
        direction: (orderBy === `${name}.asc` ? 'asc' : 'desc') as
            | 'asc'
            | 'desc',
        onClick: () => {
            if (orderBy === `${name}.asc`) setOrderBy(`${name}.desc`)
            else if (orderBy === `${name}.desc`) setOrderBy('index.asc')
            else setOrderBy(`${name}.asc`)
        }
    }
}

export default function CollapsibleTable() {
    const [search, setSearch] = useState<string[]>([])
    const [orderBy, setOrderBy] = useState<SortBy>('index.asc')

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(25)

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <TableContainer component={Paper}>
            <Search value={search} set={setSearch} />
            <Table stickyHeader size="small">
                <TableHead>
                    <TableRow>
                        <TableCell className="w-8">
                            <TableSortLabel
                                {...handleSort({
                                    name: 'index',
                                    orderBy,
                                    setOrderBy
                                })}
                            />
                        </TableCell>
                        <TableCell>
                            <TableSortLabel
                                {...handleSort({
                                    name: 'name',
                                    orderBy,
                                    setOrderBy
                                })}
                            >
                                Library
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="center">
                            <TableSortLabel
                                {...handleSort({
                                    name: 'supports',
                                    orderBy,
                                    setOrderBy
                                })}
                            >
                                Supports
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="left">Type</TableCell>
                        <TableCell align="left">Tested on</TableCell>
                        <TableCell align="left">
                            <TableSortLabel
                                {...handleSort({
                                    name: 'lastUpdate',
                                    orderBy,
                                    setOrderBy
                                })}
                            >
                                Last update
                            </TableSortLabel>
                        </TableCell>
                        <TableCell align="right">Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows
                        .filter(
                            ({ name }) =>
                                !search.length ||
                                search.find((request) => request.includes(name))
                        )
                        .sort((a, b) => {
                            let [key, order] = orderBy.split('.') as [
                                Sort,
                                'asc' | 'desc'
                            ]

                            if (key === 'index') return order === 'asc' ? 1 : -1

                            if (key === 'lastUpdate')
                                if (order === 'asc')
                                    return (
                                        new Date(a[key]).getTime() -
                                        new Date(b[key]).getTime()
                                    )
                                else
                                    return (
                                        new Date(b[key]).getTime() -
                                        new Date(a[key]).getTime()
                                    )

                            if (order === 'asc')
                                return a[key].localeCompare(b[key])

                            return b[key].localeCompare(a[key])
                        })
                        .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => (
                            <Row key={row.name} {...row} />
                        ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
}
