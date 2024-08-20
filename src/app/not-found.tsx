/** @format */

import React from 'react';
import { fetchHygraph } from '@/lib/fetchHygraph';
import { NotFoundQuery } from '@/lib/queries';
import { NotFoundType } from '@/lib/types';
import LottieComponent from '@/components/LottieComponent';
import Link from 'next/link';

export default async function NotFound() {
	const response: NotFoundType = await fetchHygraph(NotFoundQuery);
	const data = response.erros[0];

	return (
		<main>
			<div className='w-full h-screen justify-center items-center text-center flex gap-5 flex-col'>
				<h2 className='font-bold text-4xl md:text-6xl'>{data.erroTitle}</h2>
				<LottieComponent data={data.erroLottie} />
				<Link
					href={'/'}
					className=''>
					Voltar Para Home
				</Link>
			</div>
		</main>
	);
}
