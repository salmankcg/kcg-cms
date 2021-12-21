import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../helpers/posts-util'
function HomePage(props) {
    return (
        <Fragment>
            <Hero></Hero>
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 3600
    }
}
export default HomePage;
