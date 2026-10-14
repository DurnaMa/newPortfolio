import LanguageToggle from './LanguageToggle.tsx';
import NavigationLinks from './NavigationLinks.tsx';

function DesktopNavigation() {
  return (
    <div className="hidden md:flex items-center gap-8">
      <NavigationLinks
        listClassName="flex items-center gap-8 font-mono text-sm"
        linkClassName="text-muted hover:text-accent transition-colors"
      />
      <LanguageToggle />
    </div>
  );
}

export default DesktopNavigation;
