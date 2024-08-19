/** @format */

'use client';

import { hygraphVantagem } from '@/lib/types';
import type { ButtonProps } from '@relume_io/relume-ui';
import { Button } from '@relume_io/relume-ui';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { RxChevronRight } from 'react-icons/rx';

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	tagline: string;
	heading: string;
	description: string;
	tabs: hygraphVantagem[];
	buttons: ButtonProps[];
};

export type Layout493Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Feature493 = (props: Layout493Props) => {
	const { tagline, heading, description, tabs, buttons } = {
		...Layout493Defaults,
		...props,
	} as Props;
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className='px-[5%] md:px-0 py-16 md:py-24 lg:py-28 max-w-7xl '>
			<div className='container'>
				<div className='relative'>
					<div className='w-full pr-0 md:w-1/2 md:pr-6'>
						<div className='mb-8 w-full md:w-auto'>
							<p className='mb-3 font-semibold md:mb-4 text-orange-500'>
								{tagline}
							</p>
							<h2 className='mb-5 text-3xl font-bold md:mb-6 md:text-5xl '>
								{heading}
							</h2>
							<p className='md:text-md'>{description}</p>
						</div>
						<div className='static flex flex-col flex-wrap justify-stretch md:block '>
							<div className='relative mb-8 grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start md:mb-0 md:items-stretch'>
								{tabs.map((tab, index) => (
									<div
										key={index}
										onClick={() => setActiveTab(index)}
										className={clsx(
											'cursor-pointer border-b border-border-primary py-4',
											{
												'opacity-100': activeTab === index,
												'opacity-25': activeTab !== index,
											},
										)}>
										<h2 className='text-xl font-bold md:text-2xl'>
											{tab.title}
										</h2>
										<motion.div
											initial={false}
											animate={{
												height: activeTab === index ? 'auto' : 0,
												opacity: activeTab === index ? 1 : 0,
											}}
											transition={{ duration: 0.3, ease: 'easeInOut' }}
											className='overflow-hidden'>
											<p className='mt-2'>{tab.description}</p>
										</motion.div>
									</div>
								))}
							</div>
							<AnimatePresence
								mode='wait'
								initial={false}>
								{tabs.map((tab, index) => {
									if (activeTab !== index) return null;
									return (
										<motion.div
											key={tab.id}
											initial={{ opacity: 0 }}
											exit={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.2 }}
											className='relative bottom-0 left-auto right-0 top-0 flex h-full w-full items-center justify-center md:absolute md:w-1/2 md:pl-6 lg:pl-10'>
											{tab.image && (
												<Image
													width={600}
													height={500}
													src={tab.image.url}
													alt={tab.title}
													className='size-full object-cover'
												/>
											)}
										</motion.div>
									);
								})}
							</AnimatePresence>
							<div className='mt-6 flex items-center gap-x-4 md:mt-8'>
								{buttons.map((button, index) => (
									<Button
										key={index}
										{...button}>
										{button.title}
									</Button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Layout493Defaults: Layout493Props = {
	buttons: [
		{ title: 'Button', variant: 'secondary' },
		{
			title: 'Button',
			variant: 'link',
			size: 'link',
			iconRight: <RxChevronRight />,
		},
	],
};
