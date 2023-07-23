import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({ video, title, tech, description, repo, site }) {

    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return (
        <div className={styles.card}>
            <a onMouseLeave={infoOff} onMouseEnter={infoOn} href={site} target='_blank'>
            <video src={video} autoPlay loop muted aLT='ERROR'/>
            </a>
            
            {info === true &&(

            <section>
                <h3>{title}</h3>
                <p><strong>{tech}</strong></p>
                <p>{description}</p>
                <ButtonB text='Acesse o repositório' link={repo}/>
                <ButtonB text='Acesse o site' link={site}/>
            </section>
            )}
        </div>
    )
}

export default Card
