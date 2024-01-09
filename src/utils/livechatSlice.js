import { createSlice } from "@reduxjs/toolkit";
import {LIVE_CHAT_COUNT} from '../utils/constants'

const livechatSlice = createSlice({
    name:'livechat',
    initialState :{
        messages:[],
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(LIVE_CHAT_COUNT,1);
            state.messages.unshift(action.payload);
        }
    }
})

export const {addMessage} = livechatSlice.actions;
export default livechatSlice.reducer