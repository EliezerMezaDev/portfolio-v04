import Footer from "@components/ui/Footer";

export const metadata = {
  title: "Sobre mi | EaMZ",
  description:
    "Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of Intervyou. Computer Science graduate from Universitas Negeri Malang.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
