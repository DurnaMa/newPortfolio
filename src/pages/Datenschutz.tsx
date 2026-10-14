import { useLanguage } from '../i18n/useLanguage.ts';
import { datenschutz } from '../i18n/datenschutz.ts';
import LegalLayout from './legal/LegalLayout.tsx';
import LegalBlock from './legal/LegalBlock.tsx';

function Datenschutz() {
  const { language } = useLanguage();
  const page = datenschutz[language];
  return (
    <LegalLayout command="cat datenschutz.md" title={page.title}>
      {page.blocks.map((block, blockIndex) => (
        <LegalBlock key={blockIndex} block={block} />
      ))}
    </LegalLayout>
  );
}

export default Datenschutz;
