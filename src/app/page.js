import Profile from "./components/profile";
import ContributionPanel from "./components/contribution_graph";
import { GlobalProvider } from "./context/context";

export default function Home() {
  return (
    <GlobalProvider>
      <div className="bg-gray-100 py-10 md:p-0 flex flex-col md:flex-row justify-center items-center md:h-screen gap-5 lg:gap-x-10 lg:px-5">
        <Profile />
        <ContributionPanel />
      </div>
    </GlobalProvider>
  );
}
