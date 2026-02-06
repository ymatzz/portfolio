import Head from 'next/head';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

export default function Home() {
    return (
        <>
            <Head>
                <title>Matheus Fernandes | Desenvolvedor Full Stack</title>
                <meta name="description" content="Portfolio de Matheus Fernandes" />
            </Head>

            {/* A Navbar fica fora da main para ficar fixa no topo */}
            <Navbar />

            <main>
                <Hero />
                <Skills />
                <Experience />
            </main>

            {/* Footer simples */}
            <footer style={{ textAlign: 'center', padding: '4rem 2rem', color: '#666', fontSize: '0.9rem' }}>
                <p>© 2026 Matheus Fernandes. Todos os direitos reservados.</p>
            </footer>
        </>
    );
}