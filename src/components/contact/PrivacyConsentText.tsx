import { useLanguage } from '../../i18n/useLanguage.ts';

function PrivacyConsentText() {
  const formTexts = useLanguage().translation.form;
  return (
    <span>
      {formTexts.privacyBefore}{' '}
      <a href="/datenschutz" className="text-accent hover:underline">
        {formTexts.privacyLink}
      </a>{' '}
      {formTexts.privacyAfter}
    </span>
  );
}

export default PrivacyConsentText;
