import PrivacyConsentText from './PrivacyConsentText.tsx';

function PrivacyCheckbox({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex items-start gap-3 text-sm text-muted cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 accent-accent"
      />
      <PrivacyConsentText />
    </label>
  );
}

export default PrivacyCheckbox;
