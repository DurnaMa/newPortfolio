import { contact } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';
import SocialIconLink from './SocialIconLink.tsx';

function SocialLinks() {
  const { translation } = useLanguage();
  return (
    <div className="flex gap-6 items-center pt-4">
      <SocialIconLink href={contact.github} label="GitHub" icon="/svg/Github.svg" external />
      <SocialIconLink href={contact.linkedin} label="LinkedIn" icon="/svg/Linkedin.svg" external />
      <SocialIconLink href={`mailto:${contact.email}`} label={translation.hero.email} icon="/svg/mail.svg" />
    </div>
  );
}

export default SocialLinks;
