// SVG illustrations for service modals - displayed as background decoration in header
export const serviceIllustrations = {
    'fizjoterapia': `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Spine/vertebrae -->
        <rect x="95" y="20" width="30" height="18" rx="9" fill="white"/>
        <rect x="93" y="44" width="34" height="18" rx="9" fill="white"/>
        <rect x="91" y="68" width="38" height="18" rx="9" fill="white"/>
        <rect x="93" y="92" width="34" height="18" rx="9" fill="white"/>
        <rect x="95" y="116" width="30" height="18" rx="9" fill="white"/>
        <rect x="97" y="140" width="26" height="18" rx="9" fill="white"/>
        <!-- Hands on spine -->
        <path d="M70 60 C50 55, 40 70, 55 85 C60 90, 75 88, 85 80" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M150 60 C170 55, 180 70, 165 85 C160 90, 145 88, 135 80" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Energy waves -->
        <path d="M60 110 C55 105, 45 110, 50 120" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
        <path d="M160 110 C165 105, 175 110, 170 120" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
        <!-- Pulse line -->
        <path d="M30 180 L70 180 L85 160 L100 200 L115 155 L130 185 L150 180 L190 180" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    'rehabilitacja': `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Person silhouette doing exercise -->
        <circle cx="110" cy="35" r="18" fill="white"/>
        <!-- Body -->
        <path d="M110 53 L110 110" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <!-- Arms reaching up (victory pose) -->
        <path d="M110 70 L75 45" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <path d="M110 70 L145 45" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <!-- Legs in lunge -->
        <path d="M110 110 L80 160" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <path d="M110 110 L150 155" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <path d="M80 160 L70 170" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <path d="M150 155 L170 160" stroke="white" stroke-width="4" stroke-linecap="round"/>
        <!-- Progress arc -->
        <path d="M40 190 A80 80 0 0 1 180 190" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="8 6"/>
        <!-- Arrow on arc -->
        <polygon points="175,185 185,192 178,196" fill="white"/>
        <!-- Stars / sparkles -->
        <circle cx="65" cy="35" r="3" fill="white" opacity="0.7"/>
        <circle cx="155" cy="35" r="3" fill="white" opacity="0.7"/>
        <circle cx="60" cy="50" r="2" fill="white" opacity="0.5"/>
        <circle cx="160" cy="50" r="2" fill="white" opacity="0.5"/>
    </svg>`,

    'masaz-leczniczy': `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Two hands -->
        <path d="M60 100 C40 90, 25 100, 30 115 C32 125, 45 135, 55 130 L75 120" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Fingers left -->
        <path d="M35 105 C28 95, 25 85, 35 82" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M42 98 C37 88, 36 78, 45 76" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M50 94 C47 84, 48 74, 57 73" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Right hand -->
        <path d="M160 100 C180 90, 195 100, 190 115 C188 125, 175 135, 165 130 L145 120" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Fingers right -->
        <path d="M185 105 C192 95, 195 85, 185 82" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M178 98 C183 88, 184 78, 175 76" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M170 94 C173 84, 172 74, 163 73" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Body/back outline between hands -->
        <ellipse cx="110" cy="110" rx="35" ry="50" stroke="white" stroke-width="2.5" fill="none"/>
        <!-- Massage wave lines -->
        <path d="M90 95 C100 90, 120 90, 130 95" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
        <path d="M88 110 C98 105, 122 105, 132 110" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
        <path d="M90 125 C100 120, 120 120, 130 125" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
        <!-- Relaxation sparkles -->
        <circle cx="110" cy="45" r="3" fill="white" opacity="0.5"/>
        <circle cx="100" cy="50" r="2" fill="white" opacity="0.4"/>
        <circle cx="120" cy="50" r="2" fill="white" opacity="0.4"/>
    </svg>`,

    'fala-uderzeniowa': `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Device/applicator -->
        <rect x="85" y="60" width="50" height="80" rx="12" stroke="white" stroke-width="3" fill="none"/>
        <rect x="95" y="70" width="30" height="20" rx="6" fill="white" opacity="0.3"/>
        <circle cx="110" cy="115" r="8" stroke="white" stroke-width="2.5" fill="none"/>
        <circle cx="110" cy="115" r="3" fill="white"/>
        <!-- Shockwave rings emanating from bottom -->
        <path d="M85 145 C85 155, 135 155, 135 145" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M75 160 C75 175, 145 175, 145 160" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.7"/>
        <path d="M65 175 C65 195, 155 195, 155 175" stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round" opacity="0.5"/>
        <path d="M55 188 C55 210, 165 210, 165 188" stroke="white" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.3"/>
        <!-- Lightning bolts -->
        <path d="M60 50 L55 70 L65 65 L58 85" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M160 50 L165 70 L155 65 L162 85" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Energy dots -->
        <circle cx="50" cy="100" r="3" fill="white" opacity="0.6"/>
        <circle cx="170" cy="100" r="3" fill="white" opacity="0.6"/>
        <circle cx="45" cy="120" r="2" fill="white" opacity="0.4"/>
        <circle cx="175" cy="120" r="2" fill="white" opacity="0.4"/>
    </svg>`,

    'hydroterapia': `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Water drop main -->
        <path d="M110 30 C110 30, 65 95, 65 130 C65 160, 85 180, 110 180 C135 180, 155 160, 155 130 C155 95, 110 30, 110 30Z" stroke="white" stroke-width="3" fill="none"/>
        <!-- Inner water reflection -->
        <path d="M90 135 C95 125, 105 120, 110 125 C115 130, 120 125, 125 130" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
        <!-- Waves at bottom -->
        <path d="M20 195 C40 185, 55 205, 75 195 C95 185, 110 205, 130 195 C150 185, 165 205, 185 195 C200 187, 210 200, 220 195" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Small droplets -->
        <circle cx="55" cy="70" r="5" stroke="white" stroke-width="2" fill="none"/>
        <circle cx="165" cy="70" r="5" stroke="white" stroke-width="2" fill="none"/>
        <circle cx="45" cy="90" r="3" fill="white" opacity="0.5"/>
        <circle cx="175" cy="90" r="3" fill="white" opacity="0.5"/>
        <!-- Splash effects -->
        <path d="M70 185 L65 170" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
        <path d="M150 185 L155 170" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5"/>
        <!-- Bubbles -->
        <circle cx="95" cy="150" r="4" stroke="white" stroke-width="1.5" fill="none" opacity="0.5"/>
        <circle cx="120" cy="145" r="3" stroke="white" stroke-width="1.5" fill="none" opacity="0.4"/>
        <circle cx="105" cy="160" r="2.5" stroke="white" stroke-width="1.5" fill="none" opacity="0.3"/>
    </svg>`,

    'wypozyczalnia-sprzetu': `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Wheelchair -->
        <circle cx="85" cy="160" r="28" stroke="white" stroke-width="3" fill="none"/>
        <circle cx="85" cy="160" r="8" fill="white" opacity="0.3"/>
        <!-- Wheel spokes -->
        <line x1="85" y1="132" x2="85" y2="188" stroke="white" stroke-width="1.5" opacity="0.4"/>
        <line x1="57" y1="160" x2="113" y2="160" stroke="white" stroke-width="1.5" opacity="0.4"/>
        <!-- Small front wheel -->
        <circle cx="155" cy="175" r="10" stroke="white" stroke-width="2.5" fill="none"/>
        <!-- Seat frame -->
        <path d="M70 130 L70 100 L140 100 L150 130" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Backrest -->
        <path d="M70 100 L65 60" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Handle -->
        <path d="M65 60 L55 55" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Armrest -->
        <path d="M140 100 L145 95 L155 95" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Front fork -->
        <path d="M150 130 L155 165" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <!-- Crutch on right -->
        <path d="M185 40 L185 170" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M175 50 L195 50" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <path d="M178 40 L192 40" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M180 100 L190 100" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`,
};
