import { Icon } from '../../components/ui/Icons';
import { stops, includes, plans, audiences, faqs } from './HomeData';
import './Home.css';

export default function HomeScreen() {
  return (
    <div className="home">
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__copy">
          <h1>VIBE FEST LATAM</h1>
          <p>Vas directo al concierto. Nosotros hacemos lo demás.</p>
          <div className="hero__actions">
            <button type="button" className="btn btn--dark">Reservar</button>
            <button type="button" className="btn btn--outline">Conocenos</button>
          </div>
        </div>
      </section>

      {/* ---------- PROBLEMA ---------- */}
      <section className="banner">
        <h2>La logística no debería competir con la música</h2>
        <ul>
          <li>Llegas de un vuelo largo y todavía te toca buscar transporte con las maletas a cuestas.</li>
          <li>No hay tiempo de comer bien entre el aeropuerto y la puerta del concierto.</li>
          <li>Cargar la maleta durante el show, o dejarla en un lugar del que no estás seguro.</li>
        </ul>
      </section>

      {/* ---------- ITINERARIO ---------- */}
      <section className="block">
        <div className="block__head">
          <h2>Tu itinerario, de principio a fin</h2>
          <p>Cinco tramos, un solo boleto.</p>
        </div>
        <ol className="timeline">
          {stops.map((s, i) => (
            <li key={s.title} className={`timeline__item tone-${i % 5}`}>
              <span className="timeline__dot">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- QUÉ INCLUYE ---------- */}
      <section className="block">
        <div className="block__head">
          <h2>Qué incluye Vibe Fest</h2>
          <p>Seis piezas que se coordinan solas para que tú no tengas que hacerlo.</p>
        </div>
        <div className="tiles">
          {includes.map((it, i) => (
            <article key={it.title} className={`tile tone-${i % 5}`}>
              <span className="tile__icon"><Icon name={it.icon} /></span>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- PARA QUIÉN ---------- */}
      <section className="block">
        <div className="block__head">
          <h2>Para quién es Vibe Fest</h2>
        </div>
        <div className="audiences">
          {audiences.map((a) => (
            <article key={a.title} className="aud">
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- PLANES ---------- */}
      <section className="block">
        <div className="block__head">
          <h2>Planes piloto</h2>
          <p>Estamos en fase de acceso anticipado; estos son los paquetes con los que arrancamos en Bogotá.</p>
        </div>
        <div className="plans">
          {plans.map((p) => (
            <article key={p.name} className={`plan ${p.featured ? 'plan--featured' : ''}`}>
              <h3>{p.name}</h3>
              <div className="plan__price">{p.price}</div>
              <div className="plan__unit">{p.unit}</div>
              <ul>
                {p.items.map((it) => (
                  <li key={it}><Icon name="check" />{it}</li>
                ))}
              </ul>
              <button type="button" className={`btn ${p.featured ? 'btn--dark' : 'btn--outline'}`}>{p.cta}</button>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- FASE PILOTO ---------- */}
      <section className="pilot">
        <h2>Fase piloto</h2>
        <p>
          Vibe Fest está arrancando en Bogotá. Estamos afinando rutas, tiempos y alianzas con hoteles junto
          con las primeras personas que reservan. Si entras ahora, tu experiencia nos ayuda a mejorar el
          servicio, y tú te ahorras la logística desde tu primer viaje.
        </p>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="block">
        <div className="block__head">
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="cta">
        <h2>Reserva tu lugar en el itinerario</h2>
        <p>Cuéntanos qué concierto vas a ver y armamos tu logística. Es una solicitud de acceso anticipado, sin ningún compromiso.</p>
        <button type="button" className="btn btn--dark">Reserva tu lugar</button>
      </section>

      <footer className="footer">
        <b>VIBE FEST</b>
        <span>Logística de conciertos en Bogotá.</span>
        <span>hola@vibefest.co</span>
      </footer>
    </div>
  );
}