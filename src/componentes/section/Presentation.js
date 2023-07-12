import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
import profile from '../../Images/profile-photo.png'

function Presentation () {
    return(
        <div className={styles.presentation} id='Presentation'>
             
             <div>
             <h4><strong>Bem-vindo(a) ao meu portifólio</strong></h4>
             <h1>Meu nome é Thamires Figueiredo,</h1> 
        
                <p>Eu sou product manager, mas também programadora full stack que fez o desevolvimento e design deste site.<br/>
                Atuo na área de produtos há mais de 2 anos com enfoque em fintechs, atuando na área de negócios há mais de 4 anos, inclusive com iniciativas próprias de empreendedorismo. <br/>
                Possuo capacidade de realização muito forte o que me permite trazer resultados de forma mais eficiente. 
                Você pode conhecer um pouco mais sobre meu perfil clicando no botão abaixo.</p>

                <ButtonA link='https://www.linkedin.com/in/thamires-figueiredo/' text='Conecte-se comigo!'/>
            </div>
            <div>
            <img src={profile}/> 
            </div>

        </div>
    )
}

export default Presentation