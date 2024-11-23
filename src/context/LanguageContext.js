"use client"
import React, { createContext, useState } from 'react';
import enTranslations from '../translations/en.json';
import arTranslations from '../translations/ar.json';

export const LanguageContext = React.createContext({
  translations: {
    switchLanguage: 'Switch Language'
  },
  toggleLanguage: () => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState(enTranslations);

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ar');
      setTranslations(arTranslations);
      document.dir = 'rtl'; // For RTL support
    } else {
      setLanguage('en');
      setTranslations(enTranslations);
      document.dir = 'ltr';
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}; 