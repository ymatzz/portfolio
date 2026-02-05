// components/Hero/Hero.jsx
import Image from 'next/image';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

export default function Hero() {
    return (
        <section className={styles.section}>
            {/* Bloco de Texto */}
            <div className={styles.content}>
                <span className={styles.greeting}>Olá, eu sou</span>
                <h1 className={styles.title}>Matheus Fernandes dos Santos.</h1>
                <h2 className={styles.subtitle}>Desenvolvedor Java & Python & AWS.</h2>
                <p className={styles.description}>
                    Sou um desenvolvedor full stack, estudante de sistemas de informação com experiência em desenvolvimento de software.
                    Posso desenvolver soluções escaláveis na nuvem, sites, automações, APIs e muito mais. Transformo problemas complexos em
                    microsserviços eficientes.
                </p>
                <a href="#projects" className={styles.ctaButton}>
                    Ver Projetos
                </a>

                {/* Contêiner dos Ícones de Contato */}
                <div className={styles.contactIcons}>
                    <a
                        href="https://github.com/ymatzz" // Substitua pelo seu link
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/matheus-fernandes-1b3386234/" // Substitua pelo seu link
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="mailto:matheus.fernandes.2012@hotmail.com" // Substitua pelo seu email
                        className={styles.iconLink}
                        aria-label="Email"
                    >
                        <PiMicrosoftOutlookLogo />
                    </a>
                </div>
            </div>

            {/* Bloco da Imagem */}
            <div className={styles.imageContainer}>
                <Image
                    src="/images/profile.jpg"
                    alt="Foto de Matheus Fernandes"
                    width={350}
                    height={350}
                    className={styles.profileImage}
                    priority
                />
            </div>
        </section >
    );
}