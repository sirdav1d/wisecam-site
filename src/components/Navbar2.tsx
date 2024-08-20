/** @format */

'use client';

import logoImage from '@/assets/logo-wisecam.png';
import type { ButtonProps } from '@relume_io/relume-ui';
import { Button, useMediaQuery } from '@relume_io/relume-ui';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { BiLogoWhatsapp } from 'react-icons/bi';
import { RxChevronDown } from 'react-icons/rx';

type NavLink = {
	url: string;
	title: string;
	subMenuLinks?: NavLink[];
};

type Props = {
	navLinks: NavLink[];
	buttons: ButtonProps[];
};

export type Navbar2Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Navbar2 = (props: Navbar2Props) => {
	const { navLinks, buttons } = {
		...Navbar2Defaults,
		...props,
	} as Props;

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width: 991px)');

	return (
		<nav className='flex  w-full py-4 items-center  bg-zinc-50 lg:min-h-18 drop-shadow-lg'>
			<div className='mx-auto max-w-7xl size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4'>
				<div className='flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0'>
					<a href={'/'}>
						<Image
							width={100}
							height={80}
							src={logoImage}
							alt={'logo'}
						/>
					</a>
					<div className='flex items-center gap-4 lg:hidden'>
						<button
							className='-mr-2 flex size-12 flex-col items-center justify-center'
							onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
							<motion.span
								className='my-[3px] h-0.5 w-6 bg-black'
								animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
								variants={topLineVariants}
							/>
							<motion.span
								className='my-[3px] h-0.5 w-6 bg-black'
								animate={isMobileMenuOpen ? 'open' : 'closed'}
								variants={middleLineVariants}
							/>
							<motion.span
								className='my-[3px] h-0.5 w-6 bg-black'
								animate={isMobileMenuOpen ? ['open', 'rotatePhase'] : 'closed'}
								variants={bottomLineVariants}
							/>
						</button>
					</div>
				</div>
				<motion.div
					variants={{
						open: {
							height: 'var(--height-open, 100dvh)',
						},
						close: {
							height: 'var(--height-closed, 0)',
						},
					}}
					animate={isMobileMenuOpen ? 'open' : 'close'}
					initial='close'
					exit='close'
					transition={{ duration: 0.4 }}
					className='overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]'>
					{navLinks.map((navLink, index) => (
						<div
							key={index}
							className='first:pt-10 lg:first:pt-0 mt-5'>
							{navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
								<SubMenu
									navLink={navLink}
									isMobile={isMobile}
								/>
							) : (
								<a
									href={navLink.url}
									className='block py-3 lg:px-4 lg:py-2 lg:text-base hover:text-orange-500 transition-all duration-300 ease-linear'>
									{navLink.title}
								</a>
							)}
						</div>
					))}
					<Button className='px-4 py-2 rounded-md bg-[#25D366] border-none shadow-shadow-wpp hover:opacity-80 transition-all duration-300 ease-linear drop-shadow lg:hidden mt-10'>
						Whatsapp
						<BiLogoWhatsapp size={28} />
					</Button>
				</motion.div>
				<div className='hidden justify-self-end lg:block'>
					<Button className='px-4 py-2 rounded-md bg-[#25D366] border-none shadow-shadow-wpp hover:opacity-80 transition-all duration-300 ease-linear drop-shadow'>
						Whatsapp
						<BiLogoWhatsapp size={28} />
					</Button>
				</div>
			</div>
		</nav>
	);
};

const SubMenu = ({
	navLink,
	isMobile,
}: {
	navLink: NavLink;
	isMobile: boolean;
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	return (
		<nav
			onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
			onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}>
			<button
				className='flex w-full items-center justify-center gap-4 py-3 text-center text-md lg:w-auto lg:flex-none lg:justify-start lg:gap-2 lg:px-4 lg:py-2 lg:text-base'
				onClick={() => setIsDropdownOpen((prev) => !prev)}>
				<span>{navLink.title}</span>
				<motion.span
					animate={isDropdownOpen ? 'rotated' : 'initial'}
					variants={{
						rotated: { rotate: 180 },
						initial: { rotate: 0 },
					}}
					transition={{ duration: 0.3 }}>
					<RxChevronDown />
				</motion.span>
			</button>
		</nav>
	);
};

export const Navbar2Defaults: Navbar2Props = {
	navLinks: [
		{ title: 'Home', url: '#home' },
		{ title: 'Vantagens', url: '#vantagem' },
		{ title: 'Soluções', url: '#solucoes' },
		{ title: 'Contato', url: '#contato' },
	],
	buttons: [
		{
			title: 'Button',
			size: 'sm',
		},
	],
};

const topLineVariants = {
	open: {
		translateY: 8,
		transition: { delay: 0.1 },
	},
	rotatePhase: {
		rotate: -45,
		transition: { delay: 0.2 },
	},
	closed: {
		translateY: 0,
		rotate: 0,
		transition: { duration: 0.2 },
	},
};

const middleLineVariants = {
	open: {
		width: 0,
		transition: { duration: 0.1 },
	},
	closed: {
		width: '1.5rem',
		transition: { delay: 0.3, duration: 0.2 },
	},
};

const bottomLineVariants = {
	open: {
		translateY: -8,
		transition: { delay: 0.1 },
	},
	rotatePhase: {
		rotate: 45,
		transition: { delay: 0.2 },
	},
	closed: {
		translateY: 0,
		rotate: 0,
		transition: { duration: 0.2 },
	},
};
