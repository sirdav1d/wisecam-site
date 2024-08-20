/** @format */

'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import type { ButtonProps } from '@relume_io/relume-ui';
import clsx from 'clsx';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTrigger,
	DialogPortal,
	DialogOverlay,
} from '@relume_io/relume-ui';
import Image from 'next/image';
import { LuArrowUpRight } from 'react-icons/lu';

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	heading: string;
	headlinespan: string;
	description: string;
	buttons: ButtonProps[];
	video: string;
	image: ImageProps;
};

export type Header82Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const HeaderHero82 = (props: Header82Props) => {
	const { heading, description, buttons, video, image, headlinespan } = {
		...Header82Defaults,
		...props,
	} as Props;

	const [isIframeLoaded, setIsIframeLoaded] = useState(false);

	const transformRef = useRef(null);
	const { scrollY, scrollYProgress } = useScroll({ target: transformRef });
	const animatedScrollYProgress = useSpring(scrollYProgress, {
		bounce: 0,
	});

	const halfViewportHeight =
		typeof window !== 'undefined' ? window.innerHeight * 0.5 : 100;
	const fadeOut = useTransform(scrollY, [0, halfViewportHeight], [1, 0]);
	const scaleDown = useTransform(scrollY, [0, halfViewportHeight], [1, 1.1]);

	const width = useTransform(
		animatedScrollYProgress,
		[0.3, 1],
		['80%', '100%'],
	);
	const height = useTransform(
		animatedScrollYProgress,
		[0.3, 1],
		['60vh', '80vh'],
	);
	const y = useTransform(animatedScrollYProgress, [0, 1], ['0vh', '-10vh']);

	return (
		<section
			id='home'
			ref={transformRef}
			className='relative flex h-[180vh] flex-col items-center'>
			<div className='px-[5%]'>
				<div className='sticky top-0 z-0 mx-auto flex min-h-[100vh] max-w-6xl  md:justify-center py-16 md:text-center md:py-24 lg:py-28'>
					<motion.div style={{ opacity: fadeOut, scale: scaleDown }}>
						<h1 className='mb-5 text-4xl font-bold md:mb-6 md:text-6xl mt-20 2xl:mt-28'>
							{heading}
							<span className='lg:bg-gradient-to-r md:text-5xl from-blue-600 to-orange-600 px-4 rounded-lg 2xl:text-zinc-50'>
								{headlinespan}
							</span>
						</h1>
						<p className='md:text-base 2xl:text-lg max-w-3xl mx-auto'>
							{description}
						</p>
						<div className='mt-6 flex md:items-center md:justify-center gap-x-4 md:mt-8'>
							<Button className='rounded-md text-xl shadow-hero-btn bg-blue-600 border-none text-zinc-50 hover:bg-blue-500 transition-all ease-linear duration-300'>
								Solicitar Orçamento <LuArrowUpRight size={32} />
							</Button>
						</div>
					</motion.div>
				</div>
			</div>
			<motion.div
				style={{ width, height, y }}
				className='sticky top-[10vh] z-10 flex flex-col justify-start'>
				<Dialog>
					<DialogTrigger className='relative flex size-full items-center justify-center'>
						<Image
							src={image.src}
							width={1200}
							height={400}
							className='size-full object-cover'
							alt={'thumb'}
						/>
						<Play className='absolute z-20 size-20 text-white' />
						<span className='absolute inset-0 z-10 bg-black/50' />
					</DialogTrigger>
					<DialogPortal>
						<DialogOverlay className='bg-black/90' />
						<DialogContent>
							{!isIframeLoaded && (
								<Loading className='mx-auto size-16 text-white' />
							)}
							<iframe
								className={clsx(
									'z-0 mx-auto aspect-video h-full w-full md:w-[738px] lg:w-[940px]',
									{
										visible: isIframeLoaded,
										hidden: !isIframeLoaded,
									},
								)}
								src={video}
								allow='autoplay; encrypted-media; picture-in-picture'
								allowFullScreen
								onLoad={() => setIsIframeLoaded(true)}></iframe>
						</DialogContent>
					</DialogPortal>
				</Dialog>
			</motion.div>
			<div className='absolute inset-0 -z-10 mt-[100vh]' />
		</section>
	);
};

export const Header82Defaults: Header82Props = {
	heading: 'Medium length hero heading goes here',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
	buttons: [{ title: 'Button' }, { title: 'Button', variant: 'secondary' }],
	video: 'https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW',
	image: {
		src: 'https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail-landscape.svg',
		alt: 'Placeholder image',
	},
};

const Play = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={64}
			height={64}
			viewBox='0 0 64 64'
			fill='none'
			{...props}>
			<path
				fill='currentColor'
				d='M5.333 32C5.333 17.272 17.273 5.333 32 5.333A26.667 26.667 0 0 1 58.666 32c0 14.728-11.939 26.667-26.666 26.667-14.728 0-26.667-11.94-26.667-26.667ZM27.12 43.413l15.546-9.706a2.027 2.027 0 0 0 0-3.414l-15.6-9.706A2 2 0 0 0 24 22.267v19.466a2 2 0 0 0 3.12 1.68Z'
			/>
		</svg>
	);
};

const Loading = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={24}
			height={24}
			viewBox='0 0 24 24'
			{...props}>
			<g
				fill='none'
				stroke='currentColor'>
				<path
					strokeDasharray={60}
					strokeDashoffset={60}
					strokeOpacity={0.3}
					d='M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z'>
					<animate
						fill='freeze'
						attributeName='stroke-dashoffset'
						dur='1.3s'
						values='60;0'
					/>
				</path>
				<path
					strokeDasharray={15}
					strokeDashoffset={15}
					d='M12 3a9 9 0 0 1 9 9'>
					<animate
						fill='freeze'
						attributeName='stroke-dashoffset'
						dur='0.3s'
						values='15;0'
					/>
					<animateTransform
						attributeName='transform'
						dur='1.5s'
						repeatCount='indefinite'
						type='rotate'
						values='0 12 12;360 12 12'
					/>
				</path>
			</g>
		</svg>
	);
};
