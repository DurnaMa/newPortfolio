import { emailAddress } from '../../data/emailAddress.ts';

function EmailLink({ className }: { className?: string }) {
  const address = emailAddress();
  return (
    <a href={`mailto:${address}`} className={className}>
      {address}
    </a>
  );
}

export default EmailLink;
