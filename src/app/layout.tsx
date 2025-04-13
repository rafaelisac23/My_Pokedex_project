import { ReactNode } from "react";
import "./globals.css";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Home",
};

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body className="text-white">{children}</body>
    </html>
  );
};

export default Layout;
