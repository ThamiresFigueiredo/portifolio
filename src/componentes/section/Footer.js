import styles from './Footer.module.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

function Footer () {
    return(
        <div className={styles.footer}>

            <ul>
                <li><a href='https://github.com/ThamiresFigueiredo' target='_blank'><BsGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/thamires-figueiredo/</li>' target='_blank'><BsLinkedin size={30}/></a></li>
                <li><a href='mailto:thamiresfcdejesus@gmail.com?subject=Contato&body=' target='_blank'><FiMail size={30}/></a></li>
            </ul>
            <p>Thamires Figueiredo © 2023</p>
           
        </div>
    )
}

export default Footer