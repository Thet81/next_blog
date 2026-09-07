

import { getBlogs } from "../services/blogs"


const Page = async ({searchParams} : {searchParams : Promise<{filter : string}>}) => {
    const {filter} = await searchParams
    console.log('search value is ',filter)

    const allBlogs = await getBlogs()
    const blogs = filter
        ? allBlogs.filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase()))
        : allBlogs

    return (
        <div>
            <ul>
                {
                    blogs.map(blog => (
                      <div key={blog.id}>
                          <li>{blog.title}</li>
                          <p>{blog.author}</p>
                      </div>
                    ))
                }
            </ul>
            <div>
                <form >
                    <input type="text" placeholder="Search" name="filter"/>
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Page