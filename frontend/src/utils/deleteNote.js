import axios from 'axios'

export const deleteNote = async (id) => {
    try {
        await axios.delete(`http://[::1]:8080/api/notes/${id}`)
    } catch (error) {
        console.log(error)
    }
}