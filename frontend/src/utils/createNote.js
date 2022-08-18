import axios from 'axios'
import { toast } from 'react-toastify'
import { getApi } from './getApi'

const Api = getApi()

export const createNote = async (note) => {
    try {
        await axios.post(`${Api}/notes`, note)
        toast.success('Note created successfully!')
    } catch (error) {
        console.log(error)
        toast.error('Error creating note!')
    }
}