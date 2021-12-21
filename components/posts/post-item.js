import Link from 'next/link'
import Image from 'next/image'
import classes from './post-item.module.css'
function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post;
    const displayDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const imagePath = `/images/posts/${image}`
    const linkPath = `/posts/${slug}`
    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div>
                        <Image 
                            src={imagePath}
                            className={classes.image} 
                            alt={title}
                            width={200}
                            height={100}
                            layout='responsive'
                        />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{displayDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostItem
