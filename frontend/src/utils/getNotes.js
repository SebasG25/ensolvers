import axios from 'axios'
import { getApi } from './getApi'

const Api = getApi()

export const getNotes = async () => {
    let res = {}
    try {
        const { data: response } = await axios.get(`${Api}/notes/`)
        res = response
    } catch (error) {
        console.log(error)
    }
    return res
}