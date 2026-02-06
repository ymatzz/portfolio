import Link from 'next/link'; // Opcional, mas bom para router interno se precisar
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                {/* Logo / Nome no canto esquerdo */}
                <Link href="/" className={styles.logo}>
                    Matheus
                </Link>

                {/* Links de navegação */}
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#home" className={styles.link}>Sobre mim</a>
                    </li>
                    <li>
                        <a href="#skills" className={styles.link}>Tecnologias</a>
                    </li>
                    <li>
                        <a href="#projects" className={styles.link}>Projetos</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}