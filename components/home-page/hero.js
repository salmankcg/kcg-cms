import Image from 'next/image'
import classes from './hero.module.css'
function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/cem.jpg" alt="Cem's image" 
                    width={300} height={300} 
                />
            </div>
            <h1>Cem Celik</h1>
            <p>
                I blog about Web development
            </p>
        </section>
    )
}

export default Hero

