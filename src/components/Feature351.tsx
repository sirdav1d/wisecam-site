/** @format */

'use client';

import { hygraphSolucao } from '@/lib/types';
import { useState } from 'react';
import { FeatureCard } from './FeatureCard';

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
		<section className='px-[5%] py-16 md:py-24 lg:py-28 max-w-7xl'>
			<div className='container'>
				<div className='mb-12 w-full max-w-3xl md:mb-18 lg:mb-20 '>
					<p className='mb-3 font-semibold md:mb-4 text-orange-500'>
						{tagline}
					</p>
					<h1 className='mb-5 text-3xl font-bold md:mb-6 md:text-5xl'>
						{heading}
					</h1>
					<p className='md:text-md'>{description}</p>
				</div>
				<div className='flex w-[100%] mx-auto flex-col overflow-hidden lg:h-[85vh] 2xl:h-[90vh] lg:flex-row border-b border-l border-r border-border-primary md:border-none '>
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
