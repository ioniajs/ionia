import React from 'react';

import "./index.less";

export interface PageContainerProps {
    children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
    return (
        <section>
            {children}
        </section>
    );
}