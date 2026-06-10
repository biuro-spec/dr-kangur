import { useScrollToTop } from './utils/seo';

const App = () => {
    useScrollToTop();

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#2C3034',
            color: '#CFA714',
            fontFamily: 'Outfit, sans-serif',
            textAlign: 'center',
            padding: '20px'
        }}>
            <div>
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Strona w trakcie rehabilitacji</h1>
                <p style={{ fontSize: '1.5rem', color: '#fff' }}>Zapraszamy wkrótce.</p>
            </div>
        </div>
    );
};

export default App;
