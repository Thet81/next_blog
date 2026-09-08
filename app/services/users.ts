import { eq } from "drizzle-orm"
import { db } from "../../db"
import {users, blogs} from '../../db/schema'

export const getUsers = async() => {
    return db.query.users.findMany()
}

export const getUserById = async (id : number)=> {
    return db.query.users.findFirst({
        where : eq(users.id,id),
        with : {blogs : true}
    })
}

export const getBlogsByUserId = async (id : number) => {
    return db.query.blogs.findMany({
        where : eq(blogs.userId, id)
    })
}

export const getUserByUsername = async (username : string) => {
    return db.query.users.findFirst({
       where : (users, {ilike}) => ilike(users.name, `%${username}%`),
       with : {blogs : true}
    })
}