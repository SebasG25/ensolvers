import axios from 'axios'

export const getNotes = async () => {
    let res = {}
    try {
        const { data: response } = await axios.get('http://[::1]:8080/api/notes/')
        res = response
    } catch (error) {
        console.log(error)
    }
    return res
}