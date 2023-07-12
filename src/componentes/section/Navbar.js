import styles from './Navbar.module.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Nav from 'react-bootstrap/Nav';
import logo from '../../Images/logo-branco.png'


function Navbar () {
    return (
        <div className={styles.navbar}>
              {/* <img src={logo}/> */}
            <ul>
            
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Skills</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Contacts'>Contatos</Nav.Link></li>
            </ul>

            <ul>
                <li><a href='https://github.com/ThamiresFigueiredo' target='_blank'><BsGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/thamires-figueiredo/</li>' target='_blank'><BsLinkedin size={30}/></a></li>
                <li><a href='mailto:thamiresfcdejesus@gmail.com?subject=Contato&body=' target='_blank'><FiMail size={30}/></a></li>
            </ul>

        </div>
    )
}

export default Navbar