import Sidebar from './_components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto"
                style={{
                    background: "linear-gradient(to bottom, #090932, #24244b)",
                }}
            >
                {children}
            </main>
        </div>
    );
}
