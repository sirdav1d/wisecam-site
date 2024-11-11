/** @format */

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar2 } from '@/components/Navbar2';
import { Footer4 } from '@/components/Footer4';
import { Toaster } from 'sonner';
import WhatsappBtn from '@/components/whatsap-btn';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
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
			<body className={`${poppins.className} relative`}>
				<Toaster position='top-center' />
				<WhatsappBtn />
				{children}
				<Footer4 />
			</body>
		</html>
	);
}
