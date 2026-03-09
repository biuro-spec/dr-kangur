import {
    Activity,
    HeartPulse,
    Hand,
    Zap,
    Droplets,
    Package,
} from 'lucide-react';

export const servicesSeoData = [
    {
        id: 'fizjoterapia',
        name: 'Fizjoterapia',
        icon: Activity,
        gradient: 'linear-gradient(135deg, #598BBC 0%, #3D6A99 100%)',
        title: 'Fizjoterapia w Głubczycach i okolicach',
        subtitle: 'Profesjonalna fizjoterapia w DR KANGUR',
        content: [
            {
                type: 'paragraph',
                text: 'Gabinet fizjoterapii <strong>DR KANGUR w Głubczycach</strong> oferuje kompleksową diagnostykę i terapię manualną prowadzoną przez doświadczonych fizjoterapeutów. Specjalizujemy się w leczeniu bólu kręgosłupa, dysfunkcji stawów, urazów sportowych oraz rehabilitacji pooperacyjnej.',
            },
            {
                type: 'heading',
                text: 'Nasze metody fizjoterapeutyczne',
            },
            {
                type: 'list',
                items: [
                    'Terapia manualna i mobilizacje stawów',
                    'Fizjoterapia oddechowa i visceralna',
                    'Kinezyterapia – ćwiczenia lecznicze indywidualnie dobrane',
                    'Elektroterapia (TENS, prądy diadynamiczne, jonoforeza)',
                    'Ultradźwięki lecznicze i laseroterapia',
                    'Suche igłowanie i taping kinezjologiczny',
                ],
            },
            {
                type: 'paragraph',
                text: 'Każda wizyta zaczyna się od szczegółowego wywiadu i badania funkcjonalnego. Na tej podstawie tworzymy indywidualny plan leczenia, który jest regularnie dostosowywany do postępów pacjenta.',
            },
            {
                type: 'heading',
                text: 'Fizjoterapia dla mieszkańców regionu',
            },
            {
                type: 'paragraph',
                text: 'Z naszych usług fizjoterapeutycznych korzystają pacjenci nie tylko z <strong>Głubczyc</strong>, ale również z okolicznych miast i miejscowości. Zapraszamy mieszkańców <strong>Kędzierzyna-Koźla</strong>, <strong>Prudnika</strong>, <strong>Nysy</strong>, <strong>Raciborza</strong>, <strong>Krapkowic</strong>, <strong>Opola</strong>, <strong>Strzelec Opolskich</strong> i <strong>Brzegu</strong>. Nasz gabinet jest dogodnie zlokalizowany przy ul. Bolesława Chrobrego 16 – łatwy dojazd z całego powiatu głubczyckiego i opolskiego.',
            },
            {
                type: 'callout',
                text: 'Przyjmujemy pacjentów zarówno na NFZ, jak i prywatnie. Umów wizytę telefonicznie: 784 565 994.',
            },
        ],
    },
    {
        id: 'rehabilitacja',
        name: 'Rehabilitacja',
        icon: HeartPulse,
        gradient: 'linear-gradient(135deg, #2D3953 0%, #4A6FA5 100%)',
        title: 'Rehabilitacja w Głubczycach – powrót do pełnej sprawności',
        subtitle: 'Kompleksowa rehabilitacja w DR KANGUR',
        content: [
            {
                type: 'paragraph',
                text: 'Centrum rehabilitacji <strong>DR KANGUR w Głubczycach</strong> to nowoczesny gabinet wyposażony w profesjonalny sprzęt do rehabilitacji pourazowej, pooperacyjnej i neurologicznej. Pomagamy pacjentom wrócić do pełnej sprawności po urazach, operacjach i chorobach przewlekłych.',
            },
            {
                type: 'heading',
                text: 'Rodzaje rehabilitacji',
            },
            {
                type: 'list',
                items: [
                    'Rehabilitacja pooperacyjna (po endoprotezie, artroskopii, złamaniach)',
                    'Rehabilitacja pourazowa (skręcenia, zwichnięcia, urazy sportowe)',
                    'Rehabilitacja neurologiczna (po udarze, stwardnienie rozsiane)',
                    'Rehabilitacja ortopedyczna (wady postawy, skolioza)',
                    'Rehabilitacja kardiologiczna',
                    'Rehabilitacja geriatryczna dla seniorów',
                ],
            },
            {
                type: 'paragraph',
                text: 'Nasi fizjoterapeuci posiadają wieloletnie doświadczenie i stale podnoszą kwalifikacje na szkoleniach i kursach specjalistycznych. Stosujemy najnowsze metody rehabilitacji oparte na dowodach naukowych (Evidence Based Practice).',
            },
            {
                type: 'heading',
                text: 'Rehabilitacja blisko Twojego domu',
            },
            {
                type: 'paragraph',
                text: 'Oferujemy profesjonalną rehabilitację dla pacjentów z <strong>Głubczyc</strong> i całego regionu. Dojeżdżają do nas mieszkańcy <strong>Kędzierzyna-Koźla</strong>, <strong>Prudnika</strong>, <strong>Nysy</strong>, <strong>Raciborza</strong>, <strong>Krapkowic</strong>, <strong>Opola</strong>, <strong>Strzelec Opolskich</strong>, <strong>Brzegu</strong> oraz mniejszych miejscowości powiatu głubczyckiego – Baborowa, Kietrza i Branica.',
            },
            {
                type: 'callout',
                text: 'Nie czekaj z rehabilitacją! Im szybciej rozpoczniesz leczenie, tym lepsze efekty. Zadzwoń: 784 565 994.',
            },
        ],
    },
    {
        id: 'masaz-leczniczy',
        name: 'Masaż leczniczy',
        icon: Hand,
        gradient: 'linear-gradient(135deg, #6B8E5A 0%, #4A7A3D 100%)',
        title: 'Masaż leczniczy w Głubczycach – terapia manualna',
        subtitle: 'Masaż leczniczy i terapeutyczny w DR KANGUR',
        content: [
            {
                type: 'paragraph',
                text: '<strong>Masaż leczniczy w gabinecie DR KANGUR w Głubczycach</strong> to nie zwykły masaż relaksacyjny – to profesjonalna terapia manualna wykonywana przez wykwalifikowanych fizjoterapeutów. Masaż terapeutyczny jest jedną z najskuteczniejszych metod łagodzenia bólu i przywracania prawidłowej funkcji mięśni.',
            },
            {
                type: 'heading',
                text: 'Rodzaje masażu leczniczego',
            },
            {
                type: 'list',
                items: [
                    'Masaż tkanek głębokich (MTG) – rozluźnianie głębokich warstw mięśni',
                    'Masaż klasyczny leczniczy – poprawa krążenia i redukcja napięć',
                    'Masaż segmentarny – praca na strefach odruchowych',
                    'Masaż sportowy – przygotowanie i regeneracja po treningu',
                    'Drenaż limfatyczny – redukcja obrzęków',
                    'Masaż izometryczny i postizometryczna relaksacja mięśni',
                ],
            },
            {
                type: 'paragraph',
                text: 'Masaż leczniczy stosujemy przy bólach kręgosłupa szyjnego i lędźwiowego, napięciowych bólach głowy, zespołach bólowych barku (frozen shoulder), zespole cieśni nadgarstka oraz przy ogólnym przeciążeniu mięśniowo-powięziowym.',
            },
            {
                type: 'heading',
                text: 'Masaż leczniczy dla regionu Głubczyc',
            },
            {
                type: 'paragraph',
                text: 'Z masażu leczniczego w naszym gabinecie korzystają pacjenci z <strong>Głubczyc</strong>, <strong>Kędzierzyna-Koźla</strong>, <strong>Prudnika</strong>, <strong>Nysy</strong>, <strong>Raciborza</strong>, <strong>Krapkowic</strong>, <strong>Opola</strong> i <strong>Strzelec Opolskich</strong>. Nasi terapeuci pomogą Ci pozbyć się bólu i odzyskać komfort codziennego życia.',
            },
            {
                type: 'callout',
                text: 'Umów się na masaż leczniczy – poczuj różnicę już po pierwszej wizycie! Tel: 784 565 994.',
            },
        ],
    },
    {
        id: 'fala-uderzeniowa',
        name: 'Fala uderzeniowa',
        icon: Zap,
        gradient: 'linear-gradient(135deg, #CFA714 0%, #B8930E 100%)',
        title: 'Fala uderzeniowa w Głubczycach – nowoczesna terapia bólu',
        subtitle: 'Terapia falą uderzeniową w DR KANGUR',
        content: [
            {
                type: 'paragraph',
                text: 'Gabinet <strong>DR KANGUR w Głubczycach</strong> oferuje terapię <strong>falą uderzeniową (ESWT)</strong> – jedną z najskuteczniejszych metod leczenia przewlekłego bólu i schorzeń układu ruchu. Fala uderzeniowa przyspiesza regenerację tkanek, rozbijar zwapnienia i stymuluje naturalne procesy gojenia.',
            },
            {
                type: 'heading',
                text: 'Wskazania do terapii falą uderzeniową',
            },
            {
                type: 'list',
                items: [
                    'Ostroga piętowa i zapalenie rozcięgna podeszwowego',
                    'Łokieć tenisisty (epicondylitis lateralis)',
                    'Łokieć golfisty (epicondylitis medialis)',
                    'Zapalenie ścięgna Achillesa',
                    'Zespół pasma biodrowo-piszczelowego',
                    'Zwapnienia w obrębie ścięgien (ramię, biodro)',
                    'Punkty spustowe i przewlekłe napięcia mięśniowe',
                    'Blizny pooperacyjne i pourazowe',
                ],
            },
            {
                type: 'paragraph',
                text: 'Zabieg jest bezbolesny, nieinwazyjny i trwa zaledwie 10-15 minut. Większość pacjentów odczuwa poprawę już po 3-5 sesjach. Fala uderzeniowa jest rekomendowana przez najnowsze wytyczne ortopedyczne jako alternatywa dla leczenia operacyjnego.',
            },
            {
                type: 'heading',
                text: 'Fala uderzeniowa dostępna w regionie',
            },
            {
                type: 'paragraph',
                text: 'Jako jeden z niewielu gabinetów w regionie posiadamy profesjonalny aparat do terapii falą uderzeniową. Zapraszamy pacjentów z <strong>Głubczyc</strong>, <strong>Kędzierzyna-Koźla</strong>, <strong>Prudnika</strong>, <strong>Nysy</strong>, <strong>Raciborza</strong>, <strong>Krapkowic</strong>, <strong>Opola</strong>, <strong>Strzelec Opolskich</strong> i <strong>Brzegu</strong>. Nie musisz jechać do dużego miasta – nowoczesna terapia jest dostępna na miejscu.',
            },
            {
                type: 'callout',
                text: 'Sprawdź, czy fala uderzeniowa pomoże w Twoim przypadku. Zadzwoń po konsultację: 784 565 994.',
            },
        ],
    },
    {
        id: 'hydroterapia',
        name: 'Hydroterapia',
        icon: Droplets,
        gradient: 'linear-gradient(135deg, #3D8BB5 0%, #2A6F96 100%)',
        title: 'Hydroterapia w Głubczycach – leczenie wodą',
        subtitle: 'Zabiegi hydroterapeutyczne w DR KANGUR',
        content: [
            {
                type: 'paragraph',
                text: '<strong>Hydroterapia w gabinecie DR KANGUR w Głubczycach</strong> to sprawdzona metoda wspomagania rehabilitacji z wykorzystaniem leczniczych właściwości wody. Zabiegi wodne łagodzą ból, redukują obrzęki, poprawiają krążenie i przyspieszają regenerację tkanek.',
            },
            {
                type: 'heading',
                text: 'Nasze zabiegi hydroterapeutyczne',
            },
            {
                type: 'list',
                items: [
                    'Kąpiele wirowe kończyn górnych i dolnych',
                    'Hydroterapia kontrastowa (ciepło-zimno)',
                    'Okłady i kompresy lecznicze',
                    'Krioterapia miejscowa',
                    'Naczynia do ćwiczeń w wodzie',
                ],
            },
            {
                type: 'paragraph',
                text: 'Hydroterapia jest szczególnie skuteczna w rehabilitacji pourazowej i pooperacyjnej, leczeniu chorób reumatycznych, redukcji obrzęków limfatycznych oraz regeneracji sportowej. Woda odciąża stawy i pozwala na bezbolesne ćwiczenia nawet w początkowych fazach rehabilitacji.',
            },
            {
                type: 'heading',
                text: 'Hydroterapia dla mieszkańców regionu',
            },
            {
                type: 'paragraph',
                text: 'Nowoczesne zabiegi hydroterapeutyczne oferujemy pacjentom z <strong>Głubczyc</strong>, <strong>Kędzierzyna-Koźla</strong>, <strong>Prudnika</strong>, <strong>Nysy</strong>, <strong>Raciborza</strong>, <strong>Krapkowic</strong>, <strong>Opola</strong> i <strong>Strzelec Opolskich</strong>. Hydroterapia w naszym gabinecie to doskonałe uzupełnienie tradycyjnej fizjoterapii.',
            },
            {
                type: 'callout',
                text: 'Zapytaj o hydroterapię podczas wizyty lub zadzwoń: 784 565 994.',
            },
        ],
    },
    {
        id: 'wypozyczalnia-sprzetu',
        name: 'Wypożyczalnia sprzętu',
        icon: Package,
        gradient: 'linear-gradient(135deg, #8B6BA5 0%, #6B4E85 100%)',
        title: 'Wypożyczalnia sprzętu rehabilitacyjnego – Głubczyce i okolice',
        subtitle: 'Wynajem sprzętu medycznego w DR KANGUR',
        content: [
            {
                type: 'paragraph',
                text: '<strong>Wypożyczalnia sprzętu rehabilitacyjnego DR KANGUR w Głubczycach</strong> oferuje profesjonalny sprzęt medyczny na wynajem. Zapewniamy szybki dostęp do potrzebnego wyposażenia bez konieczności drogiego zakupu – idealnie na czas rekonwalescencji po operacji lub urazie.',
            },
            {
                type: 'heading',
                text: 'Dostępny sprzęt do wypożyczenia',
            },
            {
                type: 'list',
                items: [
                    'Kule łokciowe i pachowe',
                    'Chodziki i balkoniki rehabilitacyjne',
                    'Wózki inwalidzkie (standardowe i aktywne)',
                    'Łóżka rehabilitacyjne z regulacją',
                    'Szyny CPM do ćwiczeń biernych (kolano, bark)',
                    'Ortezy i stabilizatory stawów',
                    'Materace przeciwodleżynowe',
                    'Koncentratory tlenu',
                ],
            },
            {
                type: 'paragraph',
                text: 'Wypożyczalnia działa elastycznie – sprzęt można wynająć na dowolny okres, od kilku dni do kilku miesięcy. Oferujemy konkurencyjne ceny i możliwość dostawy pod wskazany adres na terenie powiatu głubczyckiego.',
            },
            {
                type: 'heading',
                text: 'Wypożyczalnia sprzętu dla całego regionu',
            },
            {
                type: 'paragraph',
                text: 'Obsługujemy pacjentów z <strong>Głubczyc</strong>, <strong>Kędzierzyna-Koźla</strong>, <strong>Prudnika</strong>, <strong>Nysy</strong>, <strong>Raciborza</strong>, <strong>Krapkowic</strong>, <strong>Opola</strong>, <strong>Strzelec Opolskich</strong>, <strong>Brzegu</strong> oraz wszystkich miejscowości powiatu głubczyckiego i nyskiego. Dowóz sprzętu możliwy w promieniu 50 km.',
            },
            {
                type: 'callout',
                text: 'Potrzebujesz sprzętu rehabilitacyjnego? Sprawdź dostępność i ceny: 784 565 994.',
            },
        ],
    },
];
