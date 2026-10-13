import { useLanguage } from '../i18n/LanguageContext.tsx';
import { contact } from '../data/content.ts';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-dress-blues/60 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between font-mono text-sm text-muted">
        <a href="/#top" className="hover:text-accent transition-colors">
          <span className="text-accent">~/</span>mahir-durna
        </a>
        <p>© Mahir Durna {new Date().getFullYear()}</p>
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href="/impressum" className="hover:text-accent">
            {t.footer.legal}
          </a>
          <a href="/datenschutz" className="hover:text-accent">
            {t.footer.privacy}
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
