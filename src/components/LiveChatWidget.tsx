'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function LiveChatWidget() {
    const pathname = usePathname();

    // Don't render on admin pages
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <Script
            id="jivo-chat"
            src="https://code.jivosite.com/widget/obLJKGdMka"
            strategy="afterInteractive"
        />

    );
}
