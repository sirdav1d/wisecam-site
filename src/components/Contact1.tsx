/** @format */

import type { ButtonProps } from '@relume_io/relume-ui';
import FormContact from './FormComponent';

type Props = {
	heading: string;
	description: string;
	button: ButtonProps;
};

export type Contact1Props = React.ComponentPropsWithoutRef<'section'> &
	Partial<Props>;

export const Contact1 = (props: Contact1Props) => {
	const { heading, description, button } = {
		...Contact1Defaults,
		...props,
	} as Props;

	return (
		<section
			id='contato'
			className='px-[5%] py-16 relative'>
			<div className='container max-w-7xl w-full '>
				<div className='absolute w-full h-full top-0 left-0 bg-footer-pattern drop-shadow-md bg-no-repeat bg-center opacity-10 grayscale invisible md:visible scale-90 mt-10' />
				<div className='mx-auto mb-8 w-full max-w-2xl text-center md:mb-10 lg:mb-12'>
					<h2 className='mb-5 text-4xl font-bold md:mb-6 md:text-6xl'>
						{heading}
					</h2>
					<p className='md:text-lg font-normal'>{description}</p>
				</div>
				<FormContact />
			</div>
		</section>
	);
};

export const Contact1Defaults: Contact1Props = {
	heading: 'Contact us',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	button: { title: 'Submit' },
};
