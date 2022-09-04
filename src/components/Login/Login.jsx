import React, { useState } from 'react'
import axios from '../../api/api'
import { Button, TextField, Typography } from '@mui/material'
import './Login.css'

const LOGIN_URL = '/auth'

const Login = () => {

  let [user, setUser] = useState('')
  let [pwd, setPwd] = useState('')
  let [errMsg, setErrMsg] = useState('')
  let [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }),
        {
          headers: { "content-type": "application/json" },
          withCredentials: true
        })

      setUser('')
      setPwd('')
      setSuccess(true)
      console.log(success);
      window.location.href = 'http://localhost:3000/todo'
    } catch (err) {
      if (!err.response) {
        setErrMsg('No server response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login falid')
      }
    }
  }

  return (
    <>
      <form style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '200px auto',
        gap: '15px'
      }} onSubmit={handleSubmit}>
        <Typography gutterBottom style={{ color: 'red' }}>{errMsg}</Typography>
        <Typography gutterBottom variant='h2'>Log in</Typography>
        <TextField sx={{ width: '30%' }} label="Username" variant="standard" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        <TextField sx={{ width: '30%' }} label="Password" variant="standard" type="text" value={pwd} onChange={(e) => setPwd(e.target.value)} />
        <Button type='submit' sx={{ width: '30%' }} variant='outlined'>Send</Button>
      </form>
    </>
  )
}

export default Login