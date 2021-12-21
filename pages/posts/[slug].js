import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostFiles } from '../../helpers/posts-util'
function PostDetailPage(props) {
    return (
        <PostContent post={props.post} />
    )
}
export function getStaticProps(context) {
    const slug = context.params.slug
    const postData = getPostData(slug)
    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}
export function getStaticPaths() {
    const allPosts = getPostFiles()
    const slugs = allPosts.map(fn => fn.replace(/\.json$/, ''))
    return {
        paths: slugs.map(slug => ({ params: {slug: slug } })),
        fallback: false
    }
}

// Below is a scenario each rendered dynamically by server
// We could just render popular ones to speed up those ones only
/* export function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
} */
export default PostDetailPage
