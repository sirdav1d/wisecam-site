/** @format */

/** @format */

import {
	Body,
	Container,
	Head,
	Hr,
	Html,
	Preview,
	Section,
	Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import React from 'react';

interface EmailTemplateProps {
	name: string;
	email?: string;
	phone?: string;
	message?: string;
}

export default function EmailTemplate(props: EmailTemplateProps) {
	return (
		<Html>
			<Head />
			<Preview>Você Recebeu Um Novo Lead!</Preview>
			<Tailwind>
				<Body className='bg-[#102b2a] text-stone-900 p-8'>
					<Container className='p-4 rounded-md'>
						<Section className='bg-stone-50 border border-stone-950/80 p-6 '>
							<Section className='bg-[#205655] text-zinc-50 rounded-sm'>
								<Text className='font-bold text-center text-2xl'>
									Iceberg Digital
								</Text>
							</Section>
							<Hr />
							<Text className='font-bold text-lg'>
								{props.name} preencheu o formulário em seu Website, confira os
								dados enviados abaixo:
							</Text>
							<Hr />
							<Text className='px-2 mx-auto'>{props.name}</Text>
							<Text className='px-2 mx-auto'>{props.email}</Text>
							<Text className='px-2 mx-auto'>{props.phone}</Text>
							<Hr />
							<Text className='px-2 mx-auto'>{props.message}</Text>
							<Hr />
							<Text className='px-2 mx-auto text-xs text-zinc-500'>
								Retornaremos em breve com novidades
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
