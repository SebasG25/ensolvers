import axios from 'axios'

export const handleArchiveNote = async (id, condition) => {
    try {
        await axios.put(`http://[::1]:8080/api/notes/${id}`, { archived: condition })
    } catch (error) {
        console.log(error)
    }
}