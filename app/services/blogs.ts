
const blogs = [
    {
        id : 1,
        title : 'Blog Title',
        author : 'John Doe',
        url : 'http://jonhdoe.com',
        likes : 10
    },
      {
        id : 2,
        title : 'Second Blog title',
        author : 'James Doe',
        url : 'http://james.com',
        likes : 20
    }
]
let nextId = 3

export const getBlogs = () => {
    return blogs
}

export const addBlog = (title : string,author : string, url : string, likes :number) => {
    blogs.push({id : nextId ++, title, author, url, likes})
}

export const getBlogById = (id : number) => {
    return blogs.find(blog => blog.id === id)
}

export const findByIdAndGiveLike = async (id : number) => {
    const blogToUpdate = await getBlogById(id)
    if(blogToUpdate) {
        blogToUpdate.likes += 1;
        return blogToUpdate
    }
}

export const filterBlog = (value : string) => {
    return blogs.filter(blog => blog.title === value)
}

