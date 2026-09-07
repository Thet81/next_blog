import {pgTable, serial, text, integer} from 'drizzle-orm/pg-core'

export const blogs = pgTable('blogs',{
    id : serial("id").primaryKey(),
    title : text("title").notNull(),
    url : text("url").notNull(),
    author : text("author").notNull(),
    likes : integer("likes").default(0),
    userId : integer("user_id").notNull().references(() => users.id)
})

export const users = pgTable("users", {
    id : serial("id").primaryKey(),
    username : text("username").notNull().unique(),
    name : text("name").notNull()
})