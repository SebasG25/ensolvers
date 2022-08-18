import axios from 'axios'
import { toast } from 'react-toastify'
import { getApi } from './getApi'

const Api = getApi()

export const updateNote = async (note) => {
    try {
        await axios.put(`${Api}/notes/${note.id}`, note)
        toast.success('Note updated successfully!')
    } catch (error) {
        toast.error('Error updating note!')
        console.log(error)
    }
}