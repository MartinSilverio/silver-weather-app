import { ReactNode } from 'react';

function AppLayout({ children }: { children: ReactNode }) {
    return <div className="grid h-screen bg-slate-300">{children}</div>;
}

export default AppLayout;
