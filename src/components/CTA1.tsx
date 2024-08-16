/** @format */

import { Button } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';

type ImageProps = {
	src: string;
	alt?: string;
};

type Props = {
	heading: string;
	description: string;
	buttons: ButtonProps[];
	image: ImageProps;
};

export type Cta1Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const CTA1 = (props: Cta1Props) => {
	const { heading, description, buttons, image } = {
		...Cta1Defaults,
		...props,
	} as Props;
	return (
		<section className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container'>
				<div className='grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center'>
					<div>
						<h2 className='mb-5 text-4xl font-bold md:mb-6 md:text-6xl'>
							{heading}
						</h2>
						<p className='md:text-md'>{description}</p>
						<div className='mt-6 flex gap-x-4 md:mt-8'>
							{buttons.map((button, index) => (
								<Button
									key={index}
									{...button}>
									{button.title}
								</Button>
							))}
						</div>
					</div>
					<div>
						<img
							src={image.src}
							className='w-full object-cover'
							alt={image.alt}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export const Cta1Defaults: Cta1Props = {
	heading: 'Medium length heading goes here',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
	buttons: [{ title: 'Button' }, { title: 'Button', variant: 'secondary' }],
	image: {
		src: 'https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg',
		alt: 'Placeholder image',
	},
};