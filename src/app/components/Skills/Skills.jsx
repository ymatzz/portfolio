'use client'
import { useEffect, useRef } from 'react';
import styles from './Skills.module.css';

export default function Skills() {
    const skills = [
        "Java", "Spring Boot", "Python", "AWS",
        "NodeJS", "Docker", "Kafka", "RabbitMQ", "SQL", "NoSQL"
    ];

    const carouselSkills = [...skills, ...skills];
    const canvasRef = useRef(null);

    // Lógica do Efeito Matrix
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Caracteres que vão cair (Mistura de Katakana e Latino)
        const columns = Math.floor(width / 20); // 20px de largura por coluna
        const drops = [];

        // Inicializa as gotas em posições aleatórias no eixo Y para não caírem todas juntas no início
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        const draw = () => {
            // Fundo preto com opacidade muito baixa para criar o rastro (trail effect)
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#0F0'; // Cor Verde Matrix
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));

                // Desenha o caractere
                ctx.fillText(text, i * 20, drops[i] * 20);

                // Reinicia a gota se ela passar da tela (com uma chance aleatória para variar)
                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move a gota para baixo
                drops[i]++;
            }
        };

        // Roda a animação
        const interval = setInterval(draw, 50); // 50ms = 20fps (velocidade clássica)

        // Ajusta o tamanho da tela se o usuário redimensionar
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Limpeza ao desmontar o componente
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className={styles.sectionWrapper} id="skills">
            {/* O Canvas do Matrix fica no fundo */}
            <canvas ref={canvasRef} className={styles.matrixCanvas} />

            {/* Overlay para escurecer o Matrix e dar leitura ao texto */}
            <div className={styles.matrixOverlay} />

            <div className={styles.container}>
                <h2 className={styles.heading}>Tecnologias</h2>

                <div className={styles.slider}>
                    <div className={styles.slideTrack}>
                        {carouselSkills.map((skill, index) => (
                            <div key={`${skill}-${index}`} className={styles.skillItem}>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className={styles.certBadge}
                    onClick={() => window.open('https://www.credly.com/badges/8abc4bf0-a5f5-4b69-9e7c-294a13300da4/public_url', '_blank')}
                >
                    🏆 AWS Certified Cloud Practitioner
                </div>
            </div>
        </section>
    );
}