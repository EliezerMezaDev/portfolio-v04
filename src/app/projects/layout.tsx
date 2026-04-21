import Footer from "@components/ui/Footer";

export const metadata = {
  title: "Proyectos | EaMZ",
  description:
    "Selected projects spanning web development, AI/ML, and more. Built with Next.js, Spring Boot, Python, and modern frameworks.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
