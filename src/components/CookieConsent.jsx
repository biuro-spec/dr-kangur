import { useState, useEffect } from 'react';
import { Shield, Cookie, X, ArrowLeft, Stethoscope } from 'lucide-react';
import './CookieConsent.css';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const [showCookieDetails, setShowCookieDetails] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const [preferences, setPreferences] = useState({
        necessary: true,
        functional: false,
        statistical: false,
        marketing: false,
    });

    useEffect(() => {
        setIsMounted(true);
        const consent = localStorage.getItem('drkangur_cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        } else {
            try {
                const parsed = JSON.parse(consent);
                setPreferences({ ...parsed, necessary: true });
            } catch (e) {
                console.error("Cookie parsing error", e);
                setShowBanner(true);
            }
        }
    }, []);

    const saveConsent = (prefs) => {
        localStorage.setItem('drkangur_cookie_consent', JSON.stringify(prefs));
        setPreferences(prefs);
        setShowBanner(false);
        setShowModal(false);
    };

    const handleAcceptAll = () => {
        saveConsent({ necessary: true, functional: true, statistical: true, marketing: true });
    };

    const handleRejectAll = () => {
        saveConsent({ necessary: true, functional: false, statistical: false, marketing: false });
    };

    const togglePreference = (key) => {
        if (key === 'necessary') return;
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const openModal = () => {
        setShowBanner(false);
        setShowModal(true);
    };

    if (!isMounted) return null;

    return (
        <>
            {/* Discrete revisit button */}
            {!showBanner && !showModal && (
                <button
                    className="cookie-revisit-btn"
                    onClick={openModal}
                    aria-label="Ustawienia prywatności"
                    title="Zarządzaj plikami cookie"
                >
                    <Cookie size={20} />
                </button>
            )}

            {/* Bottom Banner */}
            <div className={`cookie-banner ${showBanner ? 'visible' : ''}`}>
                <div className="cookie-banner-content">
                    <div className="cookie-banner-text">
                        <div className="cookie-banner-header">
                            <Shield size={22} />
                            <h4>Cenimy Twoją prywatność</h4>
                        </div>
                        <p>
                            Używamy plików cookie i podobnych technologii, aby zapewnić prawidłowe działanie strony,
                            analizować ruch i personalizować treści. Możesz zaakceptować wszystkie pliki cookie
                            lub dostosować swoje ustawienia prywatności.
                        </p>
                    </div>
                    <div className="cookie-banner-actions">
                        <button className="btn-cookie btn-cookie-accept" onClick={handleAcceptAll}>Akceptuj wszystkie</button>
                        <button className="btn-cookie btn-cookie-settings" onClick={openModal}>Ustawienia</button>
                        <button className="btn-cookie btn-cookie-reject" onClick={handleRejectAll}>Tylko niezbędne</button>
                    </div>
                </div>
            </div>

            {/* Detailed Modal Overlay */}
            <div className={`cookie-modal-overlay ${showModal ? 'visible' : ''}`} data-lenis-prevent>
                <div className="cookie-modal">
                    <div className="cookie-modal-header">
                        <div className="cookie-modal-title">
                            <div className="cookie-logo-icon">
                                <Stethoscope size={22} />
                            </div>
                            <h3>Ty kontrolujesz swoje dane</h3>
                        </div>
                        <button className="cookie-modal-close" onClick={() => {
                            if (!localStorage.getItem('drkangur_cookie_consent')) {
                                setShowBanner(true);
                            }
                            setShowModal(false);
                        }}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="cookie-modal-body">
                        <p className="cookie-modal-intro">
                            Wraz z naszymi partnerami korzystamy z technologii, w tym z plików cookie, aby
                            gromadzić informacje o Tobie w różnych celach. Klikając „Akceptuję wszystkie",
                            wyrażasz zgodę na wszystkie wymienione cele. Możesz także określić konkretne cele,
                            używając przełączników poniżej i klikając „Zapisz ustawienia".
                        </p>

                        <div className="cookie-categories">
                            <div className="cookie-category">
                                <div className="cookie-category-header">
                                    <div className="cookie-category-title">
                                        <h4>Absolutnie niezbędne</h4>
                                        <span className="cookie-badge always-active">Zawsze aktywne</span>
                                    </div>
                                    <label className="cookie-switch disabled">
                                        <input type="checkbox" checked={preferences.necessary} disabled />
                                        <span className="cookie-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-category-desc">
                                    Te pliki cookie o charakterze absolutnie niezbędnym ułatwiają nawigację,
                                    aktywując podstawowe funkcje, jak nawigacja na stronie i dostęp do zabezpieczonych
                                    obszarów witryny. Bez takich plików witryna nie jest w stanie działać poprawnie.
                                </p>
                            </div>

                            <div className="cookie-category">
                                <div className="cookie-category-header">
                                    <div className="cookie-category-title">
                                        <h4>Funkcjonalne</h4>
                                    </div>
                                    <label className="cookie-switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.functional}
                                            onChange={() => togglePreference('functional')}
                                        />
                                        <span className="cookie-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-category-desc">
                                    Funkcjonalne pliki cookie ułatwiają zapisywanie informacji, która zmienia wygląd
                                    lub działanie witryny. Na przykład wybrany język, region lub zaawansowane
                                    preferencje interfejsu.
                                </p>
                            </div>

                            <div className="cookie-category">
                                <div className="cookie-category-header">
                                    <div className="cookie-category-title">
                                        <h4>Statystyka</h4>
                                    </div>
                                    <label className="cookie-switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.statistical}
                                            onChange={() => togglePreference('statistical')}
                                        />
                                        <span className="cookie-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-category-desc">
                                    Dzięki zbieraniu i raportowaniu informacji statystyczne pliki cookie pomagają
                                    właścicielowi strony zrozumieć interakcje odwiedzających z witryną w celu
                                    ciągłego ulepszania usług.
                                </p>
                            </div>

                            <div className="cookie-category">
                                <div className="cookie-category-header">
                                    <div className="cookie-category-title">
                                        <h4>Reklamy</h4>
                                    </div>
                                    <label className="cookie-switch">
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={() => togglePreference('marketing')}
                                        />
                                        <span className="cookie-slider"></span>
                                    </label>
                                </div>
                                <p className="cookie-category-desc">
                                    Pliki reklamowe służą do śledzenia użytkowników w witrynach. Ich celem jest
                                    wyświetlanie reklam dostosowanych do potrzeb i interesujących dla użytkownika
                                    indywidualnego, a tym samym bardziej cennych z punktu widzenia wydawców.
                                </p>
                            </div>
                        </div>

                        <div className="cookie-links">
                            <button className="cookie-link-btn" onClick={() => setShowPrivacyPolicy(true)}>Polityka prywatności</button>
                            <span className="separator">•</span>
                            <button className="cookie-link-btn" onClick={() => setShowCookieDetails(true)}>Szczegóły plików cookie</button>
                        </div>
                    </div>

                    <div className="cookie-modal-footer">
                        <button className="btn-cookie btn-cookie-reject" onClick={() => saveConsent(preferences)}>Zapisz ustawienia</button>
                        <div className="cookie-footer-actions">
                            <button className="btn-cookie btn-cookie-reject-all" onClick={handleRejectAll}>Odrzuć wszystkie</button>
                            <button className="btn-cookie btn-cookie-accept" onClick={handleAcceptAll}>Akceptuj wszystkie</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Privacy Policy Sub-Modal */}
            <div className={`cookie-submodal-overlay ${showPrivacyPolicy ? 'visible' : ''}`} data-lenis-prevent>
                <div className="cookie-submodal">
                    <div className="cookie-modal-header">
                        <h3>Polityka prywatności</h3>
                        <button className="cookie-modal-close" onClick={() => setShowPrivacyPolicy(false)} aria-label="Wróć">
                            <ArrowLeft size={20} />
                        </button>
                    </div>
                    <div className="cookie-modal-body submodal-content">
                        <h4>1. Administrator Danych Osobowych</h4>
                        <p>
                            Administratorem Twoich danych osobowych jest Łukasz Broszko prowadzący działalność
                            gospodarczą pod nazwą DR KANGUR z siedzibą przy ul. Bolesława Chrobrego 16,
                            48-100 Głubczyce, NIP: 748 152 26 02.
                        </p>

                        <h4>2. Cele Przetwarzania Danych</h4>
                        <p>Twoje dane osobowe przetwarzane są w następujących celach:</p>
                        <ul>
                            <li>Realizacja usług rehabilitacyjnych i fizjoterapeutycznych</li>
                            <li>Obsługa zapytań przesłanych za pośrednictwem formularza kontaktowego</li>
                            <li>Kontakt telefoniczny i mailowy w sprawach dotyczących wizyt</li>
                            <li>Prowadzenie dokumentacji medycznej zgodnie z obowiązującymi przepisami</li>
                            <li>Cele analityczne i statystyczne dotyczące funkcjonowania strony internetowej</li>
                            <li>Cele marketingowe (wyłącznie za Twoją wyraźną zgodą)</li>
                        </ul>

                        <h4>3. Podstawa Prawna Przetwarzania</h4>
                        <p>
                            Przetwarzanie danych osobowych odbywa się na podstawie art. 6 ust. 1 Rozporządzenia
                            Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO), w szczególności:
                        </p>
                        <ul>
                            <li>lit. a) – zgoda osoby, której dane dotyczą</li>
                            <li>lit. b) – niezbędność do wykonania umowy lub podjęcia działań na żądanie osoby</li>
                            <li>lit. c) – wypełnienie obowiązku prawnego ciążącego na administratorze</li>
                            <li>lit. f) – prawnie uzasadniony interes administratora</li>
                        </ul>

                        <h4>4. Okres Przechowywania Danych</h4>
                        <p>
                            Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których
                            zostały zebrane, a po tym czasie przez okres wymagany przepisami prawa (m.in. dokumentacja
                            medyczna – 20 lat od końca roku kalendarzowego, w którym dokonano ostatniego wpisu).
                        </p>

                        <h4>5. Twoje Prawa</h4>
                        <p>Przysługuje Ci prawo do:</p>
                        <ul>
                            <li>Dostępu do treści swoich danych osobowych</li>
                            <li>Sprostowania (poprawiania) danych</li>
                            <li>Usunięcia danych („prawo do bycia zapomnianym")</li>
                            <li>Ograniczenia przetwarzania</li>
                            <li>Przenoszenia danych</li>
                            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
                            <li>Cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed cofnięciem)</li>
                            <li>Wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa)</li>
                        </ul>

                        <h4>6. Odbiorcy Danych</h4>
                        <p>
                            Twoje dane mogą być udostępniane podmiotom współpracującym z administratorem w zakresie
                            niezbędnym do realizacji usług, w tym: dostawcom usług hostingowych, narzędzi analitycznych
                            (Google Analytics), podmiotom świadczącym usługi IT, a także organom publicznym w przypadkach
                            przewidzianych prawem.
                        </p>

                        <h4>7. Pliki Cookie</h4>
                        <p>
                            Strona internetowa drkangur.pl wykorzystuje pliki cookie w celu zapewnienia prawidłowego
                            działania witryny, analizy ruchu oraz personalizacji treści. Szczegółowe informacje o
                            wykorzystywanych plikach cookie znajdują się w zakładce „Szczegóły plików cookie" w
                            ustawieniach prywatności.
                        </p>

                        <h4>8. Kontakt w Sprawach RODO</h4>
                        <p>
                            We wszystkich sprawach związanych z ochroną danych osobowych prosimy o kontakt:
                        </p>
                        <ul>
                            <li>E-mail: <strong>kontakt@drkangur.pl</strong></li>
                            <li>Telefon: <strong>784 565 994</strong></li>
                            <li>Adres: DR KANGUR, ul. Bolesława Chrobrego 16, 48-100 Głubczyce</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Cookie Details Sub-Modal */}
            <div className={`cookie-submodal-overlay ${showCookieDetails ? 'visible' : ''}`} data-lenis-prevent>
                <div className="cookie-submodal">
                    <div className="cookie-modal-header">
                        <h3>Szczegóły plików cookie</h3>
                        <button className="cookie-modal-close" onClick={() => setShowCookieDetails(false)} aria-label="Wróć">
                            <ArrowLeft size={20} />
                        </button>
                    </div>
                    <div className="cookie-modal-body submodal-content">
                        <p className="cookie-modal-intro">Poniżej znajduje się szczegółowa lista plików cookie używanych w naszej witrynie w poszczególnych kategoriach.</p>

                        <div className="cookie-detail-section">
                            <h4>Niezbędne (Zawsze włączone)</h4>
                            <ul>
                                <li><strong>drkangur_cookie_consent:</strong> Zapamiętuje Twoje preferencje dotyczące plików cookie. Ważność: 1 rok.</li>
                            </ul>
                        </div>

                        <div className="cookie-detail-section">
                            <h4>Funkcjonalne</h4>
                            <ul>
                                <li><strong>Brak specyficznych plików:</strong> W standardowej konfiguracji nie instalujemy dodatkowych plików funkcjonalnych. Miejsce to jest zarezerwowane na ewentualne zapamiętywanie ustawień interfejsu użytkownika.</li>
                            </ul>
                        </div>

                        <div className="cookie-detail-section">
                            <h4>Statystyczne</h4>
                            <ul>
                                <li><strong>_ga, _gid (Google Analytics):</strong> Służą do rozróżniania unikalnych użytkowników i zbierania anonimowych danych o ruchu na stronie. Ważność: _ga (2 lata), _gid (24 godziny).</li>
                            </ul>
                        </div>

                        <div className="cookie-detail-section">
                            <h4>Reklamowe</h4>
                            <ul>
                                <li><strong>_fbp (Meta/Facebook Pixel):</strong> Służy do celów remarketingu i śledzenia konwersji ze spersonalizowanych kampanii reklamowych. Ważność: 3 miesiące.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
