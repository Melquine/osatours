import { configureStore } from '@reduxjs/toolkit'

//reducers
import tours from './slices/tours.slice'
import guides from './slices/guides.slice'

export const store = configureStore({
    reducer: {
        tours,
        guides
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch