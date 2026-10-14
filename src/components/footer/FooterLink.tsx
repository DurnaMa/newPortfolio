import { externalLinkProps } from '../shared/externalLinkProps.ts';

type Props = { href: string; label: string; external?: boolean };

function FooterLink({ href, label, external = false }: Props) {
  return (
    <a href={href} {...(external ? externalLinkProps : {})} className="hover:text-accent">
      {label}
    </a>
  );
}

export default FooterLink;
