import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Videos/projects/lpdnc.mp4'

function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
                video={lpdnc}
                title="Landing Page DNC"
                tech="HTML, CSS, JS"
                description="Desenvolvimento de uma Landing Page para o lançamento de uma formação em tecnologia. A página tem um formulário associado com campos de preenchimento obrigatório, ao preencher esses dados e clicar no botão enviar, os leads as ifnormações ficam registradas em uma planilha do google drive e o usuário tem acesso a ementa do curso."
                repo="https://github.com/ThamiresFigueiredo/landing-page-curso-DNC"
                site="https://lading-page-curso-dnc.netlify.app/"
            />


        </div>
    )
}

export default Projects
