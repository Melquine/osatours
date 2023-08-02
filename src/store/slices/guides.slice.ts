import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface GuideState {
  value: string | undefined
}

// Define the initial state using that type
const initialState: GuideState = {
  value: '',
}

export const GuideState = createSlice({
  name: 'guides',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setGuide: (state, action:PayloadAction<GuideState>) => {
        const { value } = action.payload
        if(value != state.value) {
            state.value = value
        } 
    }
  },
})

export const { setGuide } = GuideState.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.tours.value

export default GuideState.reducer