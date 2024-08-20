/** @format */

import { FaXTwitter } from 'react-icons/fa6';
import logo from '@/assets/logo-wisecam.png';
import {
	BiLogoFacebookCircle,
	BiLogoInstagram,
	BiLogoLinkedinSquare,
	BiLogoYoutube,
} from 'react-icons/bi';
import Image from 'next/image';

type Links = {
	title: string;
	url: string;
};

type ColumnLinks = {
	links: Links[];
};

type SocialMediaLinks = {
	url: string;
	icon: React.ReactNode;
};

type FooterLink = {
	title: string;
	url: string;
};

type Props = {
	columnLinks: ColumnLinks[];
	socialMediaLinks: SocialMediaLinks[];
	footerText: string;
	footerLinks: FooterLink[];
};

export type Footer4Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Footer4 = (props: Footer4Props) => {
	const { footerText, columnLinks, footerLinks, socialMediaLinks } = {
		...Footer4Defaults,
		...props,
	} as Props;
	return (
		<footer className='px-[5%] py-12 md:py-18 lg:py-20 max-w-7xl w-full'>
			<div className='container'>
				<div className='grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20'>
					<a
						href={'/'}
						className='lg:justify-self-start'>
						<Image
							width={120}
							height={80}
							src={logo}
							alt={'Logo Wisecam'}
							className='inline-block'
						/>
					</a>
					{columnLinks.map((column, index) => (
						<ul
							key={index}
							className='grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start'>
							{column.links.map((link, linkIndex) => (
								<li
									key={linkIndex}
									className='hover:text-orange-500 transition-all ease-linear duration-300'>
									<a href={link.url}>{link.title}</a>
								</li>
							))}
						</ul>
					))}
					<div className='flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end'>
						{socialMediaLinks.map((link, index) => (
							<a
								key={index}
								href={link.url}>
								{link.icon}
							</a>
						))}
					</div>
				</div>
				<div className='h-px w-full bg-black' />
				<div className='flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8'>
					<p className='mt-8 md:mt-0'>{footerText}</p>
					<ul className='grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-x-0 gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0'>
						{footerLinks.map((link, index) => (
							<li
								key={index}
								className='underline decoration-black underline-offset-1 '>
								<a href={link.url}>{link.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};

export const Footer4Defaults: Footer4Props = {
	columnLinks: [
		{
			links: [
				{ title: 'Home', url: '#home' },
				{ title: 'Vantagens', url: '#vantagem' },
				{ title: 'Soluções', url: '#solucoes' },
				{ title: 'Contato', url: '#contato' },
			],
		},
	],
	socialMediaLinks: [
		{ url: '#', icon: <BiLogoFacebookCircle className='size-6' /> },
		{ url: '#', icon: <BiLogoInstagram className='size-6' /> },
		{ url: '#', icon: <FaXTwitter className='size-6 p-0.5' /> },
		{ url: '#', icon: <BiLogoLinkedinSquare className='size-6' /> },
		{ url: '#', icon: <BiLogoYoutube className='size-6' /> },
	],
	footerText: '© 2024 Iceberg Digital. Todos os Direitos Reservados.',
	footerLinks: [
		{ title: 'Plíticas de Privacidade', url: '#' },
		{ title: 'Termos de Uso', url: '#' },
	],
};
