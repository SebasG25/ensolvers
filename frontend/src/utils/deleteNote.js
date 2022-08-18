import axios from 'axios'
import { toast } from 'react-toastify'
import { getApi } from './getApi'

const Api = getApi()

export const deleteNote = async (id) => {
    try {
        await axios.delete(`${Api}/notes/${id}`)
        toast.success('Note deleted successfully!')
    } catch (error) {
        console.log(error)
        toast.error('Error deleting note!')
    }
}