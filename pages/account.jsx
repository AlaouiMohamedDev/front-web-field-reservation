import React from 'react'
import {useSession,signOut, getSession} from 'next-auth/react'

export default function account() {
const {data:session,status} = useSession()
    if(status === 'authenticated')
    {
    return (
        <div>
            <p>Account , {session.user.email}</p>
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
            </div>
        )
    }
}

