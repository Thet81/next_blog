import { notFound } from "next/navigation"
import { getBlogById } from "@/app/services/blogs"
import { giveLike } from "@/app/actions/blogs"

type Param = {
   params : Promise<{id : string}>
}
const BlogPage = async ({params} : Param) => {
    console.log('params is ', await params)
    const {id} = await params
    const blog = getBlogById(Number(id))

    if(!blog) {
        notFound()
    }
    return (
        <div>
            <h2>Blog title : {blog.title}</h2>
            <p>Blog author : {blog.author}</p>
            <p>You can access the blog at <a href={blog.url}>{blog.url}</a></p>
            <p>Likes : {blog.likes}</p>
            <form action={giveLike}>
                <input type="hidden" value={blog.id} name="id"/>
                <button>Give like</button>
            </form>
        </div>
    )
}

export default BlogPage