/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/views/HomeView';
import { ServicesView } from './components/views/ServicesView';
import { PortfolioView } from './components/views/PortfolioView';
import { AboutView } from './components/views/AboutView';
import { HowWeWorkView } from './components/views/HowWeWorkView';
import { ContactView } from './components/views/ContactView';
import { FaqView } from './components/views/FaqView';
import { PrivacyView } from './components/views/PrivacyView';
import { TermsView } from './components/views/TermsView';
import { WhatsAppButton } from './components/common/WhatsAppButton';

const MainContent: React.FC = () => {
  const { currentPage } = useLanguage();

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'services':
        return <ServicesView />;
      case 'portfolio':
        return <PortfolioView />;
      case 'about':
        return <AboutView />;
      case 'process':
        return <HowWeWorkView />;
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FaqView />;
      case 'privacy':
        return <PrivacyView />;
      case 'terms':
        return <TermsView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-[#F5F5F3] selection:bg-[#7F77DD]/30 selection:text-white">
      {/* 3-Zone Top Bar Navigation */}
      <Header />

      {/* Main View Router */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* Floating direct WhatsApp affordance */}
      <WhatsAppButton />

      {/* Complete Footer with legal, hours, and navigation */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
