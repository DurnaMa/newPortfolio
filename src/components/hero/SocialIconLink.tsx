import { externalLinkProps } from '../shared/externalLinkProps.ts';

type Props = { href: string; label: string; icon: string; external?: boolean };

function SocialIconLink({ href, label, icon, external = false }: Props) {
  return (
    <a href={href} {...(external ? externalLinkProps : {})} aria-label={label}>
      <img src={icon} alt="" className="h-7 opacity-70 hover:opacity-100 transition-opacity" />
    </a>
  );
}

export default SocialIconLink;
