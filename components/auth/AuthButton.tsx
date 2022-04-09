import { useSession, signOut, signIn } from 'next-auth/react'
import React from 'react'

function AuthButton() {
    const { data: session } = useSession()

    if (session) {
      console.log(session)
      return (
        <>
          Signed in as {session?.user?.id} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
}

export default AuthButton