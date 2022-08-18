import axios from 'axios'

export const createNote = async (note) => {
    try {
        await axios.post(`http://[::1]:8080/api/notes`, note)
    } catch (error) {
        console.log(error)
    }
}