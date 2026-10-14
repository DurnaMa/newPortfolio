import HomeLink from '../shared/HomeLink.tsx';
import FooterLinks from './FooterLinks.tsx';

function Footer() {
  return (
    <footer className="border-t border-dress-blues/60 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between font-mono text-sm text-muted">
        <HomeLink />
        <p>© Mahir Durna {new Date().getFullYear()}</p>
        <FooterLinks />
      </div>
    </footer>
  );
}

export default Footer;
