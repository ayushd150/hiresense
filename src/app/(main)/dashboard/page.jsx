import CreateOptions from "./_components/CreateOptions";
import InterviewList from "./_components/InterviewList";
import { UserProvider } from "../../../context/UserContext";

const Dashboard = () => {
  return (
    <UserProvider>
      <div className="relative min-h-screen bg-slate-50">
        {/* Modern Background with Subtle Patterns */}
        <div className="fixed inset-0 -z-10 h-full w-full">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Accent color gradients */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-[radial-gradient(circle_800px_at_20%_-30%,rgba(7,122,121,0.15),transparent)]" />
          <div className="absolute top-1/4 right-0 h-96 w-96 bg-[radial-gradient(circle_600px_at_110%_20%,rgba(79,70,229,0.1),transparent)]" />
        </div>
        
        {/* Dashboard Content */}
        <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
          {/* Header */}
          <header className="mb-10">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Interview Dashboard</h1>
            <p className="text-slate-500">Manage and create your interview sessions</p>
          </header>
          
          {/* Main Content with Shadow and Rounded Corners */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-slate-100">
            <CreateOptions />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
            <InterviewList />
          </div>
          
          {/* Floating action button (optional) */}
          <button className="fixed bottom-8 right-8 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </UserProvider>
  );
};

export default Dashboard;