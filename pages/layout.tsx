import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The price you gotta pay",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function JexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
