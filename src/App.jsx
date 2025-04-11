import { useState } from 'react';
import { Computer, Wifi, Video, Send, School, ArrowLeft, RefreshCw, ChevronLeft } from 'lucide-react';
import './App.css'; 
import smk from './smk9.jpg';


function App() {
  const [jenisKerusakan, setJenisKerusakan] = useState('');
  const [lokasi, setLokasi] = useState('');
  const [detail, setDetail] = useState('');
  const [step, setStep] = useState(1);
  
  const waNumber = '+6285161671965';
  
  const handleSubmit = () => {
    const message = `Halo, saya ingin melaporkan kerusakan ${jenisKerusakan} di Kelas ${lokasi}. Detail: ${detail}`;
    const encodedMessage = encodeURIComponent(message);
    
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
  };
  
  const resetForm = () => {
    setJenisKerusakan('');
    setLokasi('');
    setDetail('');
    setStep(1);
  };
  const ruangList = [
    ...Array.from({ length: 21 }, (_, i) => `Ruang ${i + 1}`),
    'Lab PM', 'Lab AP', 'Lab BTC',
    'Lab AKL 1', 'Lab AKL 2',
    'Lab RPL 1', 'Lab RPL 2',
    'Lab Kasir'
  ];
  
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="container">
          <div className="header-content">
            <div className="logo-container">
              <Computer size={22} className="logo-icon" />
            </div>
            <h1 className="app-title">Layanan Teknisi Komputer & Jaringan</h1>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="main-content">
        {/* Progress Indicator */}
        {step <= 3 && (
          <div className="progress-container">
            <div className="progress-steps">
              <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                <div className="step-circle">1</div>
                <span className="step-label">Jenis</span>
              </div>
              <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                <div className="step-circle">2</div>
                <span className="step-label">Lokasi</span>
              </div>
              <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
              <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                <div className="step-circle">3</div>
                <span className="step-label">Detail</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="content-wrapper">
          {/* Hero Section */}
          {step === 1 && (
            <div className="hero-card">
              <div className="hero-image-container">
                <div className="hero-image">
                 
                  <img src={smk}
                    alt="Teknisi Komputer" 
                  />
                  <div className="image-overlay">
                  
                  </div>
                </div>
              </div>
              <div className="hero-content">
                <h2 className="hero-title">Layanan Teknisi</h2>
                <p className="hero-description">
                  Laporkan masalah teknis dengan mudah. Tim teknisi kami siap membantu
                  menyelesaikan masalah komputer, jaringan, atau proyektor.
                </p>
                <div className="info-box">
                  <p className="info-text">
                    Silahkan pilih jenis kerusakan di bawah ini untuk melanjutkan.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 1: Pilih Jenis Kerusakan */}
          {step === 1 && (
            <div className="card">
              <h2 className="card-title">
                <span className="step-number">1</span>
                Pilih Jenis Kerusakan
              </h2>
              <div className="options-grid">
                <div 
                  className={`option-card ${jenisKerusakan === 'Komputer' ? 'selected' : ''}`}
                  onClick={() => {
                    setJenisKerusakan('Komputer');
                    setStep(2);
                  }}
                >
                  <div className="option-icon">
                    <Computer size={28} />
                  </div>
                  <h3 className="option-title">Komputer</h3>
                </div>
                <div 
                  className={`option-card ${jenisKerusakan === 'Jaringan' ? 'selected' : ''}`}
                  onClick={() => {
                    setJenisKerusakan('Jaringan');
                    setStep(2);
                  }}
                >
                  <div className="option-icon">
                    <Wifi size={28} />
                  </div>
                  <h3 className="option-title">Jaringan</h3>
                </div>
                <div 
                  className={`option-card ${jenisKerusakan === 'Proyektor' ? 'selected' : ''}`}
                  onClick={() => {
                    setJenisKerusakan('Proyektor');
                    setStep(2);
                  }}
                >
                  <div className="option-icon">
                    <Video size={28} />
                  </div>
                  <h3 className="option-title">Proyektor</h3>
                </div>
              </div>
            </div>
          )}
          
          {/* Step 2: Pilih Lokasi */}
          {step === 2 && (
            <div className="card">
              <h2 className="card-title">
                <span className="step-number">2</span>
                Pilih Lokasi Kelas
              </h2>
              <div className="selection-summary">
                <div className="summary-icon">
                  {jenisKerusakan === 'Komputer' && <Computer size={20} />}
                  {jenisKerusakan === 'Jaringan' && <Wifi size={20} />}
                  {jenisKerusakan === 'Proyektor' && <Video size={20} />}
                </div>
                <p className="summary-text">
                  Anda memilih kerusakan: <span className="bold">{jenisKerusakan}</span>
                </p>
              </div>
              <div className="options-grid">
              {ruangList.map((room) => (
                  <div 
                    key={room}
                    className={`option-card ${lokasi === room ? 'selected' : ''}`}
                    onClick={() => {
                      setLokasi(room);
                      setStep(3);
                    }}
                  >
                    <div className="option-icon">
                      <School size={24} />
                    </div>
                    <h3 className="option-title">{room}</h3>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setStep(1)} 
                className="back-button"
              >
                <ChevronLeft size={18} />
                Kembali
              </button>
            </div>
          )}
          
          {/* Step 3: Detail Kerusakan */}
          {step === 3 && (
            <div className="card">
              <h2 className="card-title">
                <span className="step-number">3</span>
                Detail Kerusakan
              </h2>
              
              <div className="form-content">
                <div className="info-summary">
                  <h3 className="summary-title">Informasi Laporan</h3>
                  <div className="summary-grid">
                    <div className="summary-item">
                      <div className="summary-icon">
                        {jenisKerusakan === 'Komputer' && <Computer size={20} />}
                        {jenisKerusakan === 'Jaringan' && <Wifi size={20} />}
                        {jenisKerusakan === 'Proyektor' && <Video size={20} />}
                      </div>
                      <div>
                        <p className="item-label">Jenis Kerusakan</p>
                        <p className="item-value">{jenisKerusakan}</p>
                      </div>
                    </div>
                    <div className="summary-item">
                      <div className="summary-icon">
                        <School size={20} />
                      </div>
                      <div>
                        <p className="item-label">Lokasi</p>
                        <p className="item-value">Kelas {lokasi}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="form-field">
                  <label htmlFor="detail" className="field-label">
                    Detail Permasalahan:
                  </label>
                  <textarea
                    id="detail"
                    rows="4"
                    className="textarea-field"
                    placeholder="Jelaskan permasalahan yang Anda alami dengan detail agar teknisi dapat mempersiapkan penanganan..."
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                  ></textarea>
                </div>
                
                <div className="button-group">
                  <button 
                    onClick={() => setStep(2)} 
                    className="secondary-button"
                  >
                    <ArrowLeft size={16} />
                    Kembali
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className={`primary-button ${!detail ? 'disabled' : ''}`}
                    disabled={!detail}
                  >
                    <Send size={16} />
                    Kirim via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Reset Button */}
          {step > 1 && (
            <div className="reset-container">
              <button 
                onClick={resetForm}
                className="reset-button"
              >
                <RefreshCw size={16} />
                Reset Formulir
              </button>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <footer className="app-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-logo">
                <Computer size={20} />
                <span>Layanan Teknisi</span>
              </div>
              <p className="copyright">© 2025 Layanan Teknisi Komputer. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a href="#" className="footer-link">Tentang Kami</a>
              <a href="#" className="footer-link">Kontak</a>
              <a href="#" className="footer-link">Bantuan</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Privasi</a>
              <a href="#" className="footer-link">Syarat</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;