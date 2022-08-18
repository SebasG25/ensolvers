import axios from 'axios'
import { toast } from 'react-toastify'

export const updateNote = async (note) => {
    try {
        await axios.put(`http://[::1]:8080/api/notes/${note.id}`, note)
        toast.success('Note updated successfully!')
    } catch (error) {
        toast.error('Error updating note!')
        console.log(error)
    }
}