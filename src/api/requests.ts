import axios from "axios";

const mainUrl = "https://jsonplaceholder.typicode.com";
const errorUrl = "https://fakerapi.it/api/v1"

export const getPosts = async () => {
    try {
        const response = await axios({
            url: `${mainUrl}/posts/unknown`,
            method: "get",
            params: {
                offset: 0,
                limit: 10
            }
        })
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data.errText, "error")
        } else if (error instanceof Error) {
            console.log(error.message)
        }
    }
}

