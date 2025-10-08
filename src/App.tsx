import GlobalStyle from './components/GlobalStyle';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Idea from './components/sections/Idea';
import HowItWorks from './components/sections/HowItWorks';
import Safety from './components/sections/Safety';
import MBTIBlock from './components/sections/MBTIBlock';
import TranslationModeration from './components/sections/TranslationModeration';
import FAQ from './components/sections/FAQ';
import FSISupport from './components/sections/FSISupport';
import RuntimeTests from './components/RuntimeTests';

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text-1)' }}>
      <GlobalStyle />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-[var(--active)] focus:text-[var(--bg)] focus:px-3 focus:py-2 focus:rounded-md"
      >
        Перейти к содержанию
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Idea />
        <HowItWorks />
        <Safety />
        <MBTIBlock />
        <TranslationModeration />
        <FAQ />
        <FSISupport />
      </main>

      <Footer />
      <RuntimeTests />
    </div>
  );
}
