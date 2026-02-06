// components/Hero/Hero.jsx
import Image from 'next/image';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

export default function Hero() {
    return (
        <section className={styles.section} id="home">
            {/* Bloco de Texto */}
            <div className={styles.content}>
                <span className={styles.greeting}>Olá, eu sou</span>
                <h1 className={styles.title}>Matheus Fernandes dos Santos.</h1>
                <h2 className={styles.subtitle}>Desenvolvedor Java & Python & AWS.</h2>

                <p className={styles.description}>
                    Sou um <strong>desenvolvedor full stack</strong> e estudante de sistemas de informação.
                    Tenho experiência em criar <strong>soluções escaláveis na nuvem</strong>, automações,
                    APIs robustas e transformar problemas complexos em <strong>microsserviços eficientes</strong>.
                </p>

                <a href="#projects" className={styles.ctaButton}>
                    Ver Projetos
                </a>

                {/* Contêiner dos Ícones de Contato */}
                <div className={styles.contactIcons}>
                    <a
                        href="https://github.com/ymatzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matheus-fernandes-1b3386234/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="mailto:matheus.fernandes.2012@hotmail.com"
                        className={styles.iconLink}
                        aria-label="Email"
                    >
                        <PiMicrosoftOutlookLogo />
                    </a>
                </div>
            </div>

            {/* Bloco da Imagem */}
            <div className={styles.imageContainer}>
                <img
                    src="/images/profile.jpeg" // Certifique-se que o nome do arquivo está correto
                    alt="Foto de Matheus Fernandes"
                    // MUDANÇA AQUI: Formato Retrato (Vertical) para alinhar com a altura do texto
                    width={400}
                    height={500}
                    className={styles.profileImage}
                    priority
                />
            </div>
        </section >
    );
}