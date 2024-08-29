/** @format */

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@relume_io/relume-ui';
import Image from 'next/image';
import { hygraphSolucao } from '@/lib/types';

type FeatureWithState = hygraphSolucao & {
	isActive: boolean;
	setIsActive: () => void;
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	features: hygraphSolucao[];
};

export type Layout351Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Feature351 = (props: Layout351Props) => {
	const { tagline, heading, description, features } = {
		...props,
	} as Props;

	const [activeIndex, setActiveIndex] = useState<number | null>(0);

	const handleSetIsActive = (index: number) => {
		setActiveIndex((prevIndex) => {
			if (
				prevIndex === index &&
				features.filter((_, i) => i === prevIndex).length === 1
			) {
				return prevIndex;
			}
			return prevIndex === index ? null : index;
		});
	};

	return (
		<section
			id='solucoes'
			className='px-[5%] 2xl:px-0 py-16 md:py-24 lg:py-28 2xl:max-w-7xl w-full'>
			<div className='container'>
				<div className='mb-12 w-full max-w-2xl md:mb-18 lg:mb-20'>
					<p className='mb-3 font-semibold  md:mb-4 text-orange-500 border px-3 w-fit border-orange-400 rounded-full'>
						{tagline}
					</p>
					<h2 className='mb-5 text-3xl font-bold md:mb-6 md:text-5xl'>
						{heading}
					</h2>
					<p className='md:text-base max-w-lg'>{description}</p>
				</div>
				<div className='flex w-full flex-col overflow-hidden lg:h-[80vh] lg:flex-row '>
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							isActive={activeIndex === index}
							setIsActive={() => handleSetIsActive(index)}
							{...feature}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const FeatureCard = ({
	isActive,
	setIsActive,
	...feature
}: FeatureWithState) => {
	const isMobile = useMediaQuery('(max-width: 991px)');
	const CardContent = isMobile ? motion.div : 'div';
	return (
		<motion.div
			className='flex flex-col justify-start overflow-hidden lg:h-[80vh] lg:min-w-20 lg:flex-row '
			onClick={setIsActive}
			animate={{
				width: isMobile ? '100%' : isActive ? '100%' : '5rem',
			}}
			transition={{ duration: 0.3, ease: 'easeInOut' }}>
			<div
				className={`${
					isActive
						? ' bg-gradient-to-b from-blue-950 to-blue-900 text-zinc-100 '
						: ''
				} hover:bg-blue-950 hover:text-zinc-100 transition-all ease-linear duration-300 relative flex h-16 w-full min-w-full cursor-pointer items-center justify-center border-t border-zinc-500/20 py-8 md:h-20 lg:h-[80vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between  border rounded-lg`}>
				<p className='absolute left-6 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0'>
					{feature.indexColumn}
				</p>
				<h2 className='hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-2xl lg:font-bold'>
					{feature.verticalText}
				</h2>
				<p className='text-xl font-bold md:text-2xl lg:hidden'>
					{feature.horizontalText}
				</p>
			</div>
			<CardContent
				className='w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto'
				animate={{
					height: isActive ? 'auto' : '0px',
				}}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				<div className='flex h-full flex-col text-center px-6 pb-8 pt-4 md:px-10 md:pb-12 md:pt-12 lg:w-[40rem] 2xl:w-[48rem] lg:px-12 lg:py-8 justify-center items-center'>
					<h3 className='mb-5 text-3xl font-bold leading-[1.2] md:mb-6 lg:text-4xl'>
						{feature.title}
					</h3>
					<p className='text-base max-w-lg text-center mx-auto'>
						{feature.description}
					</p>
					<div className='mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12'>
						<Image
							width={1000}
							height={400}
							src={feature.image.url}
							alt={feature.title}
							className='size-full object-contain md:object-cover'
						/>
					</div>
				</div>
			</CardContent>
		</motion.div>
	);
};
