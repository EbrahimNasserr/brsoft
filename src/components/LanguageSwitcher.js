import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Assuming this is the correct path

const LanguageSwitcher = ({ isSpecialPage, isScrolled }) => {
    const context = useContext(LanguageContext);

    if (!context) {
        return null; // Or some fallback UI
    }

    const { translations, toggleLanguage } = context;

    return (
        <button
            onClick={toggleLanguage}
            className={`language-switcher ${isSpecialPage || isScrolled ? "text-slate-800" : "text-slate-50"
                }`}
        >
            {translations.buttonLang}
        </button>
    );
};

export default LanguageSwitcher; 