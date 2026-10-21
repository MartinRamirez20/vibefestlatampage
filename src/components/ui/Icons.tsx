export type IconName = 'plane' | 'fork' | 'bag' | 'bed' | 'car' | 'moon' | 'check' | 'home' | 'ticket' | 'tag' | 'user' | 'bell';

const paths: Record<IconName, string> = {
  plane: 'M3 13.5 21 5.5l-6.5 15-2-7-7-2Z',
  fork: 'M6 2v8a2 2 0 0 0 4 0V2M8 10v12M18 2c-1.4 0-2.5 1.7-2.5 4.5S16.6 11 18 11v11',
  bag: 'M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2ZM9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18',
  bed: 'M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 13v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3',
  car: 'M4 16V11l2-5h12l2 5v5ZM7.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM16.5 15a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z',
  moon: 'M21 12.6A9 9 0 1 1 11.4 3a7 7 0 0 0 9.6 9.6Z',
  check: 'M4 12.5 9 17.5 20 6.5',
  home: 'M3 11 12 3l9 8M5 10v10h14V10',
  ticket: 'M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4ZM14 6v12',
  tag: 'M3 12V4h8l10 10-8 8ZM7.5 8h.01',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0',
  bell: 'M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7ZM10 20a2 2 0 0 0 4 0',
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}