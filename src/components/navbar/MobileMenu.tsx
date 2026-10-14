import NavigationLinks from './NavigationLinks.tsx';

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <NavigationLinks
      listClassName="md:hidden flex flex-col gap-4 px-4 pb-6 pt-2 font-mono border-t border-dress-blues/60"
      linkClassName="block text-muted hover:text-accent"
      onNavigate={onNavigate}
    />
  );
}

export default MobileMenu;
