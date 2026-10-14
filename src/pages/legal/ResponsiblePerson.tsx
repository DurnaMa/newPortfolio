import { useLanguage } from '../../i18n/useLanguage.ts';
import EmailLink from '../../components/shared/EmailLink.tsx';
import PostalAddress from './PostalAddress.tsx';

function ResponsiblePerson() {
  const { translation } = useLanguage();
  return (
    <PostalAddress>
      <br />
      {translation.impressum.email} <EmailLink />
    </PostalAddress>
  );
}

export default ResponsiblePerson;
