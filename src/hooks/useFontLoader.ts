import { useState, useEffect } from 'react';

export function useFontLoader() {
    const [isFontLoaded, setIsFontLoaded] = useState(false);

    useEffect(() => {
        const font = new FontFace('Cider', 'url(/happyanniversary/font/FkCiderRegular.ttf)');

        font.load().then(() => {
            document.fonts.add(font);
            setIsFontLoaded(true);
        }).catch((err) => {
            console.error('Font loading failed:', err);
            setIsFontLoaded(true); // Fallback to system font
        });
    }, []);

    return isFontLoaded;
}