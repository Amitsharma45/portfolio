"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';

const ConditionalFooter = () => {
    const pathname = usePathname();

    const hideFooterRoutes = ['/blogs', '/blogs/add'];

    return (
        <>
            {!hideFooterRoutes.includes(pathname) && <Footer />}
        </>
    );
};

export default ConditionalFooter;