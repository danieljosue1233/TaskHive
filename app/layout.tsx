import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BootstrapJs from "./Components/taskBody/BootsTrapJs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Hive",
  description: "Task Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <BootstrapJs/>
    </html>
  );
}
