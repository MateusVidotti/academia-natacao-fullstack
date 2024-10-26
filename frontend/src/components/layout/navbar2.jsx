import { Link } from 'react-router-dom'
import Container from './container'
import styles from './navbar.module.css'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
            {/* <Link to='/'> <img src={logo} alt='Academia Natação'/> </Link> */}
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Painel</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Usuários</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Alunos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Fornecedores</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Pagamentos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Recebimentos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/company'>Logout</Link>
                    </li> 
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar