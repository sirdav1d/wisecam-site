/** @format */

'use client';

import { Button, Checkbox, Input, Label, Textarea } from '@relume_io/relume-ui';
import type { ButtonProps } from '@relume_io/relume-ui';
import Link from 'next/link';
import { useState } from 'react';
import { LuArrowUpRight } from 'react-icons/lu';

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

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [acceptTerms, setAcceptTerms] = useState<boolean | 'indeterminate'>(
		false,
	);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log({ name, email, message, acceptTerms });
	};

	return (
		<section
			id='contato'
			className='px-[5%] py-16 md:py-24 lg:py-28'>
			<div className='container max-w-7xl w-full'>
				<div className='mx-auto mb-8 w-full max-w-2xl text-center md:mb-10 lg:mb-12'>
					<h2 className='mb-5 text-4xl font-bold md:mb-6 md:text-6xl'>
						{heading}
					</h2>
					<p className='md:text-base font-normal'>{description}</p>
				</div>
				<form
					className='mx-auto grid w-full max-w-md grid-cols-1 gap-6'
					onSubmit={handleSubmit}>
					<div className='grid w-full items-center'>
						<Label
							htmlFor='name'
							className='mb-2 font-semibold'>
							Nome:
						</Label>
						<Input
							placeholder='Digite seu nome'
							className='placeholder:text-zinc-400 placeholder:font-light rounded'
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='grid w-full items-center'>
						<Label
							htmlFor='email'
							className='mb-2 font-semibold'>
							E-mail:
						</Label>
						<Input
							className='rounded placeholder:text-zinc-400 placeholder:font-light'
							placeholder='Digite seu e-mail'
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='grid w-full items-center'>
						<Label
							htmlFor='message'
							className='mb-2 font-semibold'>
							Mensagem:
						</Label>
						<Textarea
							id='message'
							placeholder='Digite sua mensagem'
							className='min-h-[11.25rem] overflow-auto rounded placeholder:text-zinc-400 placeholder:font-light'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<div className='mb-3 flex items-center space-x-2 text-sm md:mb-4'>
						<Checkbox
							id='terms'
							checked={acceptTerms}
							onCheckedChange={setAcceptTerms}
							className='rounded '
						/>
						<Label
							htmlFor='terms'
							className='cursor-pointer'>
							Eu aceito os {''}
							<Link
								className='text-link-primary underline hover:text-orange-600'
								href='/politics'
								target='_blank'
								rel='noopener noreferrer'>
								Termos
							</Link>
						</Label>
					</div>

					<Button className='rounded-md text-lg shadow-hero-btn bg-blue-600 border-none text-zinc-50 hover:bg-blue-500 transition-all ease-linear duration-300 w-full'>
						Enviar Mensagem <LuArrowUpRight size={32} />
					</Button>
				</form>
			</div>
		</section>
	);
};

export const Contact1Defaults: Contact1Props = {
	heading: 'Contact us',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	button: { title: 'Submit' },
};
