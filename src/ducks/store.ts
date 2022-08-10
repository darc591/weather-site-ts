import { configureStore} from "@reduxjs/toolkit";
import { weekDataReducer } from "./weekDataSlice";
import { actualDataReducer } from "./actualDataSlice";
//configureStore
const store = configureStore({
    reducer: {
        actualData: actualDataReducer,
        weekData: weekDataReducer
    }
})

export type AppDispatch = typeof store.dispatch

export default store
