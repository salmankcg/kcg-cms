import fs from 'fs'
import path from 'path'

const postsPath = path.join(process.cwd(), 'content/posts')

export function getPostFiles() {
    return fs.readdirSync(postsPath)
}

export function getPostData(postId) {
    const postSlug = postId.replace(/\.json$/, ''); // removes file extension
    const post = require(`../content/posts/${postSlug}.json`)
    return {...post, slug: postSlug}
}

export function getAllPosts() {
    const postFiles = getPostFiles()
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.data ? -1 : 1)
    return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts
}