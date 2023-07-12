import styles from './Cards.module.css'
import ButtonB from './ButtonB'

function Card({ video, title, tech, description, repo, site }) {
    return (
        <div className={styles.card}>
            <a href={site} target='_blank'>
            <video src={video} autoPlay loop muted />
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>{tech}</strong></p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
                <ButtonB text='Acesse o site' link={site}/>
            </section>
        </div>
    )
}

export default Card
