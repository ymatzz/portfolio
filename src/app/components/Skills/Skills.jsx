'use client'
import styles from './Skills.module.css';

export default function Skills() {
    const skills = [
        "Java", "Spring Boot", "Python", "AWS",
        "NodeJS", "Docker", "Kafka", "RabbitMQ", "SQL", "NoSQL"
    ];

    return (
        <section className={styles.section} id="skills">
            <h2 className={styles.heading}>Tecnologias</h2>
            <div className={styles.grid}>
                {skills.map((skill) => (
                    <div key={skill} className={styles.skillItem}>
                        {skill}
                    </div>
                ))}
            </div>

            {/* Destaque para a certificação encontrada nos seus dados */}
            <div className={styles.certBadge} onClick={() => window.open('https://www.credly.com/badges/8abc4bf0-a5f5-4b69-9e7c-294a13300da4/public_url', '_blank')}>
                🏆 AWS Certified Cloud Practitioner
            </div>
        </section>
    );
}