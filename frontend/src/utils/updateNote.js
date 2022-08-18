import axios from 'axios'

export const updateNote = async (note) => {
    try {
        await axios.put(`http://[::1]:8080/api/notes/${note.id}`, note)
    } catch (error) {
        console.log(error)
    }
}