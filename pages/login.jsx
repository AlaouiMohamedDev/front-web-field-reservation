import React from 'react'
import {useSession,signIn,signOut} from 'next-auth/react'

export default function login() {
    const {data:session} = useSession()
    console.log("🚀 ~ file: login.jsx:6 ~ login ~ session:", session)
  if(session)
  {
    return (
        <div>
            <p>Welcome , {session.user.email}</p>
            <img src={session.user.image} />
            <button onClick={()=>signOut()}>Sign Out</button>
        </div>
      )
  }
  else
  {
    return (
        <div>
            <p>You are not logged int </p>
            <button onClick={()=>signIn()}>Sign in</button>
            </div>
      )
  }
}
