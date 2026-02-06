'use client'
import styles from './Skills.module.css';

export default function Skills() {
    const skills = [
        "Java", "Spring Boot", "Python", "AWS",
        "NodeJS", "Docker", "Kafka", "RabbitMQ", "SQL", "NoSQL"
    ];

    // Duplicamos a lista para garantir o loop infinito perfeito
    const carouselSkills = [...skills, ...skills];

    return (
        <section className={styles.sectionWrapper} id="skills">
            <div className={styles.container}>
                <h2 className={styles.heading}>Tecnologias</h2>

                {/* Container que esconde o excesso (janela de visualização) */}
                <div className={styles.slider}>
                    {/* Pista que se move */}
                    <div className={styles.slideTrack}>
                        {carouselSkills.map((skill, index) => (
                            // Usamos index na key porque temos itens duplicados
                            <div key={`${skill}-${index}`} className={styles.skillItem}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className={styles.certBadge}
                    onClick={() => window.open('https://www.credly.com/badges/8abc4bf0-a5f5-4b69-9e7c-294a13300da4/public_url', '_blank')}
                    style={{ cursor: 'pointer' }} // Adicionei cursor pointer para indicar clique
                >
                    🏆 AWS Certified Cloud Practitioner
                </div>
            </div>
        </section>
    );
}