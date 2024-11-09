import Form from "../components/Form"
import styles from "./Login.module.css"

function Login() {
    return (
    <div className={styles.container}>
        <div className={styles.loginBox}>
            <h1>Sistema Academia de Natação</h1>
            <Form route="/api/token/" method="login" />
        </div>
    </div>
    )
}

export default Login