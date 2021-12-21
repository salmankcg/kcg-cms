import PostHeader from './post-header'
import SanitizedHTML from 'react-sanitized-html';
import classes from './post-content.module.css'
function PostContent({ post }) {
    const imagePath = `/images/posts/${post.image}`
    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <SanitizedHTML html={post.content} />
        </article>
    )
}

export default PostContent
