import styles from './Experience.module.css';

export default function Experience() {
    const experiences = [
        {
            title: "Desenvolvedor Backend (Modernização)",
            company: "Itaú Unibanco",
            description: "Atuação no desenvolvimento e modernização da plataforma de débitos automáticos. Criação de microsserviços críticos utilizando arquitetura hexagonal.",
            stack: ["Java", "Spring Boot", "AWS ECS", "AWS Lambda", "Kafka"]
        },
        {
            title: "Automação de Processos (RPA)",
            company: "Projeto CRM Delta",
            description: "Desenvolvimento de robôs para automação de processos repetitivos, aumentando a eficiência operacional das equipes.",
            stack: ["Python", "Selenium", "Automação"]
        },
        {
            title: "API Restful com Python",
            company: "Projeto Pessoal",
            description: "Desenvolvimento de um sistema completo através de lambdas que gerenciam CRUDs e ORM robusto.",
            stack: ["Python", "FastAPI", "SQLAlchemy", "Pydantic"]
        }
    ];

    return (
        <section className={styles.section} id="projects">
            <h2 className={styles.heading}>Experiência & Projetos</h2>
            <div>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.card}>
                        <h3 className={styles.roleTitle}>{exp.title}</h3>
                        <span className={styles.company}>@ {exp.company}</span>
                        <p className={styles.description}>{exp.description}</p>
                        <div className={styles.techStack}>
                            {exp.stack.map(tech => <span key={tech}>{tech}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}