
"use server"
import { addBlog, filterBlog } from "../services/blogs"
import { redirect } from "next/navigation"
import { findByIdAndGiveLike } from "../services/blogs"
import { revalidatePath } from "next/cache"

export const createBlog = async (formData : FormData) => {
    const title = formData.get('title') as string
    const author = formData.get('author') as string
    const url = formData.get('url') as string
    addBlog(title,author,url)
    revalidatePath('/blogs')
    redirect("/blogs")
}

export const giveLike = async(formData : FormData) => {
    const id = formData.get('id') as string
    await findByIdAndGiveLike(Number(id))
    revalidatePath('/notes')
    revalidatePath(`/notes/${id}`)
}

export const searchBlog = async(formData : FormData) => {
    const searchValue = formData.get("searchValue") as string
    filterBlog(searchValue)
    console.log(searchValue)
}