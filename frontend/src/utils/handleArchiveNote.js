import axios from 'axios'
import { toast } from 'react-toastify'

export const handleArchiveNote = async (id, condition) => {
    try {
        await axios.put(`http://[::1]:8080/api/notes/${id}`, { archived: condition })
        toast.success(`Note ${!condition ? 'desarchived' : 'archived' } successfully!`)
    } catch (error) {
        console.log(error)
        toast.error('Error archiving note!')
    }
}