import axios from "axios";
import router from "/src/router";
import {reactive} from 'vue'
const key = "AIzaSyBuoa3iAy6JtfpBUpcqL4k1gsrMT631TPw"
const SPREADSHEETS_ID = {
    chef4babe: "1oSqCmxAYkwFawuxfUBDsexSyUpbNO36O4S3fxu1m7G8"
}

export const c4bApi = axios.create({
    baseURL: `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEETS_ID.chef4babe}/`
})

export const httpCommonReactiveVars = reactive({
    current_curry_info: {}
})

export const httpCommonFuncs = {
    readByCategory: async (sheet) => {
        const retData = await c4bApi.get(`values/${sheet}?key=${key}`)
        return retData.data.values[0]
    },
    read: async (sheet) => {
        const retData = await c4bApi.get(`values/${sheet}?key=${key}`)
        return retData.data.values
    }
    

}