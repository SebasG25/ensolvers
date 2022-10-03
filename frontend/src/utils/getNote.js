import axios from 'axios'
import { getApi } from './getApi'

const Api = getApi()

export const getNote = async (id) => {
    let res = {}
    try {
        const { data: response } = await axios.get(`${Api}/note/${id}`)
        res = response
    } catch (error) {
        console.log(error)
    }
    return res
}