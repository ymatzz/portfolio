import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                {/* O container usa a classe .logo */}
                <div className={styles.logo}>
                    <img
                        src="/images/logo-horizontal.png"
                        alt="Logo Matheus Fernandes"
                        // Definimos dimensões base, mas o CSS controla o visual final
                        width={280}
                        height={60}
                        // A classe da imagem é .logoImage
                        className={styles.logoImage}
                    />
                </div>

                <ul className={styles.navLinks}>
                    <li><a href="#home" className={styles.link}>Sobre mim</a></li>
                    <li><a href="#skills" className={styles.link}>Tecnologias</a></li>
                    <li><a href="#projects" className={styles.link}>Projetos</a></li>
                </ul>
            </div>
        </nav>
    );
}