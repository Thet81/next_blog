import {db} from '../../db'
import {blogs} from '../../db/schema'
import { eq } from 'drizzle-orm'

// const blogs = [
//     {
//         id : 1,
//         title : 'Blog Title',
//         author : 'John Doe',
//         url : 'http://jonhdoe.com',
//         likes : 10
//     },
//       {
//         id : 2,
//         title : 'Second Blog title',
//         author : 'James Doe',
//         url : 'http://james.com',
//         likes : 20
//     }
// ]
// let nextId = 3

export const getBlogs = async() => {
    return await db.query.blogs.findMany()
}

export const addBlog = async(title : string,author : string, url : string) => {
    await db.insert(blogs).values({title,author,url})
}

export const getBlogById = (id : number) => {
    return db.query.blogs.findFirst({
        where : eq(blogs.id,id)
    })
}

export const findByIdAndGiveLike = async (id : number) => {
    const blogToUpdate = await getBlogById(id)
    if(blogToUpdate) {
        blogToUpdate.likes += 1;
        return blogToUpdate
    }
}

export const filterBlog = async (value : string) => {
    // return blogs.filter(blog => blog.title === value)
    return await db.query.blogs.findMany({
        where : eq(blogs.title,value)
    })
}

