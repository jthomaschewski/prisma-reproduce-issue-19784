import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reproduce schema.prisma1 issue",
  description: "Some meta description",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href="/">Index</Link>
            </li>
            <li>
              <Link href="/p1">P1</Link>
            </li>
            <li>
              <Link href="/p2">P2</Link>
            </li>
            <li>
              <Link href="/p3">P3</Link>
            </li>
            <li>
              <Link href="/p4">P4</Link>
            </li>
            <li>
              <Link href="/p5">P5</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
