//
// import DashboardHeader from "@/components/dashboard/DashboardHeader";
// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="dashboard-layout">
//            <DashboardHeader />
//             <main className="content">
//                 {children} {/* Main dashboard content */}
//             </main>
//         </div>
//     );
// }




'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    useEffect(() => {
        // Check for the token in local storage
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/sign-in'); // Redirect to sign-in if no token
            return;
        }

        // Optional: Check token expiration if applicable
        try {
            const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            const isExpired = payload.exp * 1000 < Date.now();
            if (isExpired) {
                localStorage.removeItem('token'); // Clear expired token
                router.push('/sign-in'); // Redirect to sign-in
            }
        } catch (error) {
            console.error('Error decoding token:', error);
            router.push('/sign-in'); // Redirect if token is invalid
        }
    }, [router]);

    return (
        <div className="dashboard-layout">
            <DashboardHeader />
            <main className="content">{children}</main>
        </div>
    );
}
