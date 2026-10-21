import type { ReactNode } from 'react';
import { Icon, type IconName } from '../ui/Icons';
import './AppShell.css'; // Crearemos este archivo después

const tabs: { icon: IconName; label: string; active?: boolean }[] = [
  { icon: 'home', label: 'Inicio', active: true },
  { icon: 'ticket', label: 'Itinerario' },
  { icon: 'tag', label: 'Planes' },
  { icon: 'user', label: 'Servicios' }, // Cambiado "Perfil" por "Servicios"
];

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      {/* ---------- BARRA SUPERIOR (Escritorio) ---------- */}
      <header className="topbar">
        <div className="topbar__row">
          <span className="brand">VIBE FEST LATAM</span>
          <nav className="topbar__links">
            {tabs.map((t) => (
              <button key={t.label} type="button" className={t.active ? 'is-active' : ''}>
                {t.label}
              </button>
            ))}
          </nav>
          {/* Cambiado el ícono de "bell" (notificaciones) por "user" (perfil) */}
          <button type="button" className="icon-btn" aria-label="Perfil de usuario">
            <Icon name="user" />
          </button>
        </div>
      </header>

      {/* ---------- CONTENIDO DINÁMICO ---------- */}
      <main className="main-content">
        {children}
      </main>

      {/* ---------- BARRA INFERIOR (Móvil) ---------- */}
      <nav className="tabbar" aria-label="Navegación principal">
        {tabs.map((t) => (
          <button key={t.label} type="button" className={t.active ? 'is-active' : ''}>
            <Icon name={t.icon} />
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}