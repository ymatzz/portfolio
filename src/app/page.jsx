import Head from 'next/head';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';

export default function Home() {
    return (
        <>
            <Head>
                <title>Portfolio Dev | Matheus Fernandes dos Santos</title>
                <meta name="description" content="Portfolio de desenvolvedor Java, Pyhton e AWS" />
            </Head>

            <main>
                <Hero />
                <Skills />
                <Experience />
            </main>

            <footer style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <p>Desenvolvido com Next.js & CSS Modules</p>
            </footer>
        </>
    );
}