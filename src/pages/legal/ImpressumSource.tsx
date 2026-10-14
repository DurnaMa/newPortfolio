import { useLanguage } from '../../i18n/useLanguage.ts';
import { externalLinkProps } from '../../components/shared/externalLinkProps.ts';

function ImpressumSource() {
  const { translation } = useLanguage();
  return (
    <p className="text-sm">
      {translation.impressum.source}{' '}
      <a href="https://www.e-recht24.de" {...externalLinkProps}>
        eRecht24
      </a>
    </p>
  );
}

export default ImpressumSource;
