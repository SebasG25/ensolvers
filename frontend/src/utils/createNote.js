import axios from 'axios'
import { toast } from 'react-toastify'

export const createNote = async (note) => {
    try {
        await axios.post(`http://[::1]:8080/api/notes`, note)
        toast.success('Note created successfully!')
    } catch (error) {
        console.log(error)
        toast.error('Error creating note!')
    }
}