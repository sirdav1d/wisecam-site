/** @format */

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar2 } from '@/components/Navbar2';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'Wisecam',
	description:
		'A Wisecam utiliza visão computacional e inteligência artificial para medir o fluxo de pessoas, analisar comportamentos e fornecer insights valiosos para o seu negócio',
	icons: '/favicon.png',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={poppins.className}>
				<Navbar2 />
				{children}
			</body>
		</html>
	);
}
