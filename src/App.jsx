import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import QualificationSection from './components/QualificationSection';
import AuthoritySection from './components/AuthoritySection';
import ProofDataSection from './components/ProofDataSection';
import SolutionSection from './components/SolutionSection';
import CtaSection from './components/CtaSection';
import LeadCaptureModal from './components/LeadCaptureModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <HeroSection onOpenModal={openModal} />
      <PainSection />
      <QualificationSection />
      <AuthoritySection />
      <ProofDataSection />
      <SolutionSection />
      <CtaSection onOpenModal={openModal} />
      
      <LeadCaptureModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
