import EmailLink from '../shared/EmailLink.tsx';

function ContactEmail() {
  return (
    <p className="font-mono text-sm text-muted">
      <span className="text-accent">$</span> echo $EMAIL
      <br />
      <EmailLink className="text-accent hover:underline" />
    </p>
  );
}

export default ContactEmail;
