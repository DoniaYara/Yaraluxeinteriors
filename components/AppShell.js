"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function AppShell({ children }) {
  const path = usePathname() || "";
  const cms = path.startsWith("/author") || path.startsWith("/admin");
  if (cms) return children;
  return (
    <>
      <span id="scroll-origin" aria-hidden="true" />
      <Header />
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
