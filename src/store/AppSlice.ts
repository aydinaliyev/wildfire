import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the wildfire object
export interface Wildfire {
    id: string
    userName: string
    location: {
        city: string
        option: string
        address: string
        long: string
        lat: string
    }
    description: string
    date: number
    type: string
}

// Define a type for the slice state
interface WildfireState {
    data: Wildfire[] // Array of wildfire objects
    searchText: string // Search text as a string
}

// Define the initial state using that type
const initialState: WildfireState = {
    data: [],
    searchText: '',
}

export const AppSlice = createSlice({
    name: 'counter',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addWildfireReport: (state, action: PayloadAction<Wildfire>) => {
            state.data.push(action.payload)
        },
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload
        },
        setSolved: (state, action: PayloadAction<number>) => {
            state.data[action.payload].type = 'solved'
        },
    },
})

export const { addWildfireReport, setSearchText, setSolved } = AppSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectReports = (state: RootState) => state.appReducer.data
export const selectSearchText = (state: RootState) =>
    state.appReducer.searchText

export default AppSlice.reducer
