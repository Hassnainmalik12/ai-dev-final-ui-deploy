import React, { useState } from 'react';
import Select from 'react-select';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const countries = [
    { value: 'ar', label: 'Arabic', flag: 'SA', languages: ['Arabic'] }, // Saudi Arabia
    { value: 'en', label: 'English', flag: 'GB', languages: ['English'] }, // United Kingdom
    { value: 'zh', label: 'Chinese', flag: 'CN', languages: ['Chinese'] }, // China (Mandarin)
    { value: 'cs', label: 'Czech', flag: 'CZ', languages: ['Czech'] }, // Czech Republic
    { value: 'nl', label: 'Dutch', flag: 'NL', languages: ['Dutch'] }, // Netherlands
    { value: 'fr', label: 'French', flag: 'FR', languages: ['French'] }, // France
    { value: 'de', label: 'German', flag: 'DE', languages: ['German'] }, // Germany
    { value: 'el', label: 'Greek', flag: 'GR', languages: ['Greek'] }, // Greece
    { value: 'hu', label: 'Hungarian', flag: 'HU', languages: ['Hungarian'] }, // Hungary
    { value: 'id', label: 'Indonesian', flag: 'ID', languages: ['Indonesian'] }, // Indonesia
    { value: 'it', label: 'Italian', flag: 'IT', languages: ['Italian'] }, // Italy
    { value: 'ja', label: 'Japanese', flag: 'JP', languages: ['Japanese'] }, // Japan
    { value: 'ko', label: 'Korean', flag: 'KR', languages: ['Korean'] }, // South Korea
    { value: 'pl', label: 'Polish', flag: 'PL', languages: ['Polish'] }, // Poland
    { value: 'pt', label: 'Portuguese', flag: 'PT', languages: ['Portuguese'] }, // Portugal
    { value: 'ro', label: 'Romanian', flag: 'RO', languages: ['Romanian'] }, // Romania
    { value: 'ru', label: 'Russian', flag: 'RU', languages: ['Russian'] }, // Russia
    { value: 'sk', label: 'Slovak', flag: 'SK', languages: ['Slovak'] }, // Slovakia
    { value: 'es', label: 'Spanish', flag: 'ES', languages: ['Spanish'] }, // Spain
    { value: 'th', label: 'Thai', flag: 'TH', languages: ['Thai'] }, // Thailand
    { value: 'tr', label: 'Turkish', flag: 'TR', languages: ['Turkish'] }, // Turkey
    { value: 'vi', label: 'Vietnamese', flag: 'VN', languages: ['Vietnamese'] }, // Vietnam
];

// Custom formatting for the options
const formatOptionLabel = ({ languages, flag }, { isFocused }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <Flag code={flag} style={{ width: 20, height: 15, marginRight: 10 }} />
        <div>
            <span>{languages.join(', ')}</span> {/* Show the languages */}
        </div>
    </div>
);

// Custom styles for the Select component
const customStyles = {
    control: (styles) => ({
        ...styles,
        backgroundColor: 'e6e6e6',
        borderColor: 'black',
        color: 'white',
    }),
    menu: (styles) => ({
        ...styles,
        backgroundColor: '#1f1f1f',
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isFocused ? 'grey' : isSelected ? 'lightgrey' : null,
        color: isFocused || isSelected ? 'black' : 'white',
        cursor:'pointer'
    }),
    singleValue: (styles) => ({
        ...styles,
        color: 'black',
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        color: 'black',
    }),
    indicatorSeparator: () => ({
        display: 'none'
    })
};

const CountrySelect = ({ onLanguageChange }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const { i18n } = useTranslation(); // Import i18n from react-i18next

    // Handle country change
    const handleChange = (selectedOption) => {
        if (selectedOption) {
            const selectedLang = selectedOption.value; // Use the language code directly
            console.log(`Selected country: ${selectedOption.label}, Languages: ${selectedLang}`);
            setSelectedCountry(selectedOption);
            i18n.changeLanguage(selectedLang); // Change the language using i18next
            if (onLanguageChange) {
                onLanguageChange(selectedLang);
            }
        }
    };

    return (
        <div style={{ width: 200, margin: '0 auto', paddingTop: 50 }}>
            <Select
                options={countries}
                formatOptionLabel={formatOptionLabel}
                styles={customStyles}
                placeholder="Select Language"
                onChange={handleChange}
                value={selectedCountry}
            />
        </div>
    );
};

export default CountrySelect;
