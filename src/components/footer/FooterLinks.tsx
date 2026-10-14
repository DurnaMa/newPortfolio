import { contact } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import FooterLink from './FooterLink.tsx';

function FooterLinks() {
  const { translation } = useLanguage();
  return (
    <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      <FooterLink href={contact.github} label="GitHub" external />
      <FooterLink href={contact.linkedin} label="LinkedIn" external />
      <FooterLink href="/impressum" label={translation.footer.legal} />
      <FooterLink href="/datenschutz" label={translation.footer.privacy} />
    </nav>
  );
}

export default FooterLinks;
