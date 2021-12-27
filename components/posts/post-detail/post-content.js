import PostHeader from './post-header'
import Script from 'next/script'
import classes from './post-content.module.css'
function PostContent({ post }) {
    console.log("post", post.content)
    const imagePath = `/images/posts/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <Script src={post.content} />
        </article>
    )
}

export default PostContent
