import wavesLight from '../assets/waves.svg';
import wavesDark from '../assets/waveswhite.svg';
import '../styles/hero.css';

const Hero = ({ darkMode }) => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${darkMode ? wavesDark : wavesLight})`
      }}
    >
      <div className="hero-content selection:bg-[var(--accent)]">
        <div className="hero-box">
          <h1 className="hero-title">
            Konzeption & prototypische Entwicklung einer Mixed Reality Version der
            ZDFmediathek im Ansatz von Spatial User Interfaces
          </h1>
          <p className="hero-name">Julian Gruber</p>
          <p className="hero-study">Medieninformatik (M.Sc.)</p>
          <p className="hero-date">September 2024</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;