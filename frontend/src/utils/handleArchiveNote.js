import axios from 'axios'
import { toast } from 'react-toastify'
import { getApi } from './getApi'

const Api = getApi()

export const handleArchiveNote = async (id, condition) => {
    try {
        await axios.put(`${Api}/notes/${id}`, { archived: condition })
        toast.success(`Note ${!condition ? 'desarchived' : 'archived' } successfully!`)
    } catch (error) {
        console.log(error)
        toast.error('Error archiving note!')
    }
}