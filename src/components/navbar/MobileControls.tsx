import LanguageToggle from './LanguageToggle.tsx';
import MenuButton from './MenuButton.tsx';

type Props = { menuOpen: boolean; onToggleMenu: () => void };

function MobileControls({ menuOpen, onToggleMenu }: Props) {
  return (
    <div className="md:hidden flex items-center gap-4">
      <LanguageToggle />
      <MenuButton menuOpen={menuOpen} onClick={onToggleMenu} />
    </div>
  );
}

export default MobileControls;
