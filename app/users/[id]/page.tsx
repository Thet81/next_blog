import { getUserById } from "@/app/services/users"
import { notFound } from "next/navigation"
const UserPage = async({params} : {params : Promise<{id:string}>})=>{
    const {id} = await params
    const user = await getUserById(Number(id))
    if(!user) {
        notFound()
    }
    return (
        <div>
            <h2>User</h2>
            <p>Username : {user.username}</p>
            <p>Name : {user.name}</p>
        </div>
    )
}

export default UserPage