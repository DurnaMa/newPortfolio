const honeypotAttributes = { id: 'website', name: 'website', type: 'text', tabIndex: -1, autoComplete: 'off' };

// Fangfeld: für Menschen unsichtbar, Bots füllen es aus
function HoneypotField({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
      <label htmlFor="website">Website</label>
      <input {...honeypotAttributes} value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}

export default HoneypotField;
