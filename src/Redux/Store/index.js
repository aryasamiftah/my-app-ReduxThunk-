import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import regionReducers from "../Reducer/regionReducer";

const reducer = combineReducers({
    regionReducers : regionReducers
});

const store = configureStore({
    reducer,
    middleware : (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck : false
    })
})

export default store