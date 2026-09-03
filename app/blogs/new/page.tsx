import { createBlog } from "@/app/actions/blogs"

const Page = () => {
    return (
        <div>
            <form action={createBlog}>
                <div>
                    <label htmlFor="title">
                        Title
                        <input placeholder="title" name="title"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Author
                        <input placeholder="author" name="author"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        Url
                         <input placeholder="url" name="url"/>
                    </label>
                </div>
                <button type="submit">Add Blog</button>
            </form>
        </div>
    )
}

export default Page