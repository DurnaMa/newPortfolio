import { navLinks } from '../../data/content.ts';
import { useLanguage } from '../../i18n/useLanguage.ts';

type Props = { listClassName: string; linkClassName: string; onNavigate?: () => void };

function NavigationLinks({ listClassName, linkClassName, onNavigate }: Props) {
  const { translation } = useLanguage();
  return (
    <ul className={listClassName}>
      {navLinks.map((link, index) => (
        <li key={link.href}>
          <a href={`/${link.href}`} className={linkClassName} onClick={onNavigate}>
            <span className="text-accent">0{index + 1}.</span> {translation.nav[link.key]}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavigationLinks;
