import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venkata Murali Kumar Chintala — Technical Lead & Solution Architect Portfolio",
  description:
    "Interactive Windows 11 themed portfolio of Venkata Murali Kumar Chintala — Technical Lead, Solution Architect, and Full-Stack & AI Engineer based in Hyderabad, India.",
  keywords: [
    "Venkata Murali Kumar Chintala",
    "Solution Architect",
    "Technical Lead",
    "Portfolio",
    "Full-Stack Developer",
    "Java",
    "Spring Boot",
    "Python",
    "Generative AI",
    "Microservices",
    "Windows 11",
  ],
  openGraph: {
    title: "Venkata Murali Kumar Chintala — Technical Lead Portfolio",
    description:
      "Explore Venkata Murali Kumar Chintala's interactive Windows 11 themed portfolio featuring projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#202020] text-white antialiased">{children}</body>
    </html>
  );
}
