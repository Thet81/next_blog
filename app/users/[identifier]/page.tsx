import { getUserById, getUserByUsername } from "@/app/services/users"
import { notFound } from "next/navigation"

const UserPage = async({params} : {params : Promise<{identifier:string}>})=>{
    const {identifier} = await params

    const isNumericId = /^\d+$/.test(identifier)
    console.log(identifier)
    let user = null
    
    if(isNumericId){
        user = await getUserById(Number(identifier))
    }else {
        user = await getUserByUsername(identifier)
    }
    console.log("Matching user is " ,user)
    // const blogs = await getBlogsByUserId(Number(id))
    if(!user) {
        notFound()
    }
    return (
        <div>
            <h2>User</h2>
            <p>Username : {user.username}</p>
            <p>Name : {user.name}</p>
            <ul>
                {
                   user?.blogs.map(blog => (
                    <li key={blog.id}>
                        <h4>Title : {blog.title}</h4>
                        <p>Url : {blog.url}</p>
                        <p>Likes : {blog.likes}</p>
                    </li>
                   ))
                }
            </ul>
        </div>
    )
}

export default UserPage