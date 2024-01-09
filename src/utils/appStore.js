import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import livechatSlice from "./livechatSlice";

const store = configureStore({
    reducer:{
        app: appSlice,
        search : searchSlice,
        livechat : livechatSlice,
    },   
})

export default store;