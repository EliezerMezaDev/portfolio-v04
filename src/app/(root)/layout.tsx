"use client";
import Sidebar from "@components/ui/Sidebar";
import { FullPageProvider } from "@alvalens/react-fullpage-snap";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<FullPageProvider
			anchors={["home", "about", "projects", "contact"]}
			scrollingSpeed={1000}
			menu="#sidebar"
			lockAnchors={false}>
			<Sidebar />
			{children}
		</FullPageProvider>
	);
}
