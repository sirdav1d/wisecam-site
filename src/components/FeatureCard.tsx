/** @format */

import { hygraphSolucao } from '@/lib/types';
import { useMediaQuery } from '@relume_io/relume-ui';
import { motion } from 'framer-motion';
import Image from 'next/image';

type FeatureWithState = hygraphSolucao & {
	isActive: boolean;
	setIsActive: () => void;
};

export const FeatureCard = ({
	isActive,
	setIsActive,
	...feature
}: FeatureWithState) => {
	const isMobile = useMediaQuery('(max-width: 991px)');
	const CardContent = isMobile ? motion.div : 'div';
	return (
		<motion.div
			className='flex flex-col justify-start overflow-hidden lg:h-[85vh] 2xl:h-[90vh] lg:min-w-20 lg:flex-row  '
			onClick={setIsActive}
			animate={{
				width: isMobile ? '100%' : isActive ? '100%' : '5rem',
			}}
			transition={{ duration: 0.3, ease: 'easeInOut' }}>
			<div
				className={`relative flex h-16 w-full min-w-full border-t border-border-primary  cursor-pointer items-center justify-center py-8 md:h-20 hover:bg-blue-500/20 duration-300 ease-linear transition-all lg:h-[85vh] 2xl:h-[90vh] lg:w-20 lg:min-w-20 lg:flex-col lg:justify-between lg:border-none ${
					isActive ? 'bg-blue-500/20 rounded' : ''
				}`}>
				<p className='absolute left-4 text-blue-600 whitespace-nowrap text-xl font-bold md:left-10 md:text-2xl lg:relative lg:left-0'>
					{feature.indexColumn}
				</p>
				<h2 className='hidden [writing-mode:vertical-rl] lg:mx-auto lg:block lg:rotate-180 lg:text-xl lg:font-bold'>
					{feature.title}
				</h2>
				<p className='text-base font-bold md:text-2xl lg:hidden'>
					{feature.title}
				</p>
			</div>
			<CardContent
				className='w-full overflow-hidden lg:h-full lg:w-auto lg:min-w-[200vw] lg:overflow-auto'
				animate={{
					height: isActive ? 'auto' : '0px',
				}}
				transition={{ duration: 0.3, ease: 'easeInOut' }}>
				<div className='flex h-full items-center justify-center text-center flex-col px-6 pb-8 pt-4 md:px-10 md:py-12 lg:w-[44rem] lg:px-12 lg:py-16'>
					<h3 className='mb-5 text-3xl font-bold leading-[1.2] md:mb-6 2xl:text-5xl '>
						{feature.title}
					</h3>
					<p className='md:text-md'>{feature.description}</p>
					<div className='mt-8 h-80 md:mt-10 md:h-[25rem] lg:mt-12'>
						<Image
							width={400}
							height={400}
							src={feature.image.url}
							alt={feature.title}
							className='size-full object-cover'
						/>
					</div>
				</div>
			</CardContent>
		</motion.div>
	);
};
