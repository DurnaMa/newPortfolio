import { contact } from '../../data/content.ts';

function EmailLink({ className }: { className?: string }) {
  return (
    <a href={`mailto:${contact.email}`} className={className}>
      {contact.email}
    </a>
  );
}

export default EmailLink;
