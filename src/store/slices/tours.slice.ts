import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface TourState {
  value: string | undefined
}

// Define the initial state using that type
const initialState: TourState = {
  value: '',
}

export const tourSlice = createSlice({
  name: 'tours',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTour: (state, action:PayloadAction<TourState>) => {
        const { value } = action.payload
        if(value != state.value) {
            state.value = value
        } 
    }
  },
})

export const { setTour } = tourSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tours.value

export default tourSlice.reducer