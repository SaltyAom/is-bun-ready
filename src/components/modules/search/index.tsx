import { data } from '@stores'

import { Autocomplete, Chip, TextField } from '@mui/material'

import styles from './search.module.sass'

export default function SearchInput({
    value,
    set
}: {
    value: string[]
    // eslint-disable-next-line no-unused-vars
    set: (newValue: string[]) => void
}) {
    return (
        <div className={styles['search-outer']}>
            <Autocomplete
                id="search"
                value={value}
                multiple
                onChange={(event, newValue) => set(newValue)}
                renderTags={(_, getTagProps) =>
                    value.map((option: string, index: number) => (
                        <Chip
                            variant="filled"
                            size="small"
                            label={option}
                            {...getTagProps({ index })}
                        />
                    ))
                }
                options={data.map(({ name }) => name)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        variant="filled"
                        label="Find library"
                        InputProps={{
                            ...params.InputProps,
                            className: styles['search-inner']
                        }}
                    />
                )}
            />
        </div>
    )
}
