import axios from "axios"

export const homeAPI = async() =>{
try {
    const response = await axios.get("https://backendtetsingcorscookies.onrender.com",{withCredentials:true})
    return response.data

    
} catch (error) {
    console.log("err in get ", error)    
}

} 


export const getCookieAPI = async() =>{
    try {
        const response = await axios.get("https://backendtetsingcorscookies.onrender.com/cookie",{withCredentials:true})
        return response.data
    
        
    } catch (error) {
        console.log("err in cookie ", error)    
    }
    
    } 