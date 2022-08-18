import axios from 'axios'
import { toast } from 'react-toastify'

export const deleteNote = async (id) => {
    try {
        await axios.delete(`http://[::1]:8080/api/notes/${id}`)
        toast.success('Note deleted successfully!')
    } catch (error) {
        console.log(error)
        toast.error('Error deleting note!')
    }
}