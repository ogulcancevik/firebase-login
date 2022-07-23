import { register } from '@/services/auth.service'
import { Input, Modal } from 'antd'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const SignupModal = ({ show, setShow }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signUp = async () => {
    try {
      const newUser = await register(email, password)
      if (newUser) {
        toast.success('User created')
        setShow(false)
        setEmail('')
        setPassword('')
      }
    } catch (error) {
      toast.error(error.message)
      setEmail('')
      setPassword('')
    }
  }
  const onClose = () => {
    setShow(false)
  }
  return (
    <Modal title="Sign up" visible={show} onOk={signUp} onCancel={onClose}>
      <div>
        <Input
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <Input.Password
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </Modal>
  )
}

export default SignupModal
