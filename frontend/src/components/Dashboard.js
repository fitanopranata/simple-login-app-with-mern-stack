import React, {useState, useEffect} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode";

const Dashboard = () => {
    const [name, setName] = useState('')
    const [token, setToken] = useState('')
    const [expire, setExpire] = useState()

    useEffect(() => {
        refreshToken()
    }, [])
    const navigate = useNavigate()

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/token')
            setToken(response.data.accessToken)
            const decoded = jwt_decode(response.data.accessToken)
            setName(decoded.name)
            setExpire(decoded.expire)
        } catch (error) {
            if (error.response) {
                navigate('/')
            }
        }
    }
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <h1>welcome {name}</h1>
    )
}

export default Dashboard