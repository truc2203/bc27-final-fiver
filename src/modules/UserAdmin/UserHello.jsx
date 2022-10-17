import React from 'react'

const UserHello = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if(user === null || user.user.role !== 'ADMIN')
    {
      return
    }
  return (
    <div>Hello! {user.user.name}</div>
  )
}

export default UserHello