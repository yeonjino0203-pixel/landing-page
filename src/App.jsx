import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import DiagnosisSection from './components/DiagnosisSection';
import WarningSection from './components/WarningSection';
import AuthoritySection from './components/AuthoritySection';
import PrescriptionSection from './components/PrescriptionSection';
import BarrierSection from './components/BarrierSection';
import OjoSolutionSection from './components/OjoSolutionSection';
import CtaSection from './components/CtaSection';
import LeadCaptureModal from './components/LeadCaptureModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Background Glow Blobs */}
      <div className="glow-blob-1"></div>
      <div className="glow-blob-2"></div>
      <div className="glow-blob-3"></div>

      <div className="app-content-wrapper">
        <HeroSection onOpenModal={openModal} />
        <DiagnosisSection />
        <WarningSection />
        <AuthoritySection />
        <PrescriptionSection />
        <BarrierSection />
        <OjoSolutionSection />
        <CtaSection onOpenModal={openModal} />
      </div>
      
      <LeadCaptureModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
