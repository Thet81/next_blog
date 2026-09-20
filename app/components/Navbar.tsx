"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"

export default function Navbar () {
    const {data : session} = useSession()

    return (
        <>
            <Link href="/">home</Link>
            {" | "}
            <Link href="/blogs">blogs</Link>
            {" | "}
            <Link href="/users">users</Link>
            {" | "}
            {
                session ? (
                    <>
                        <Link href="/new">create new blog</Link>
                        {" | "}
                        <em>{session?.user?.name} logged in</em> {" | "}
                        <button onClick={()=> signOut()}>logout</button>
                    </>
                ) : (
                    <Link href="/login">login</Link>
                )
            }
        </>
    )
}