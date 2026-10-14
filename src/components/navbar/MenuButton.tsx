import { useLanguage } from '../../i18n/useLanguage.ts';
import MenuIcon from './MenuIcon.tsx';

type Props = { menuOpen: boolean; onClick: () => void };

function MenuButton({ menuOpen, onClick }: Props) {
  const { translation } = useLanguage();
  return (
    <button
      type="button"
      className="flex flex-col gap-1.5 p-2"
      aria-label={translation.nav.openMenu}
      aria-expanded={menuOpen}
      onClick={onClick}
    >
      <MenuIcon menuOpen={menuOpen} />
    </button>
  );
}

export default MenuButton;
