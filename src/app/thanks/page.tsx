/** @format */

import React from 'react';

import { ThanksQuery } from '@/lib/queries';
import { fetchHygraph } from '@/lib/fetchHygraph';
import { ThanksType } from '@/lib/types';
import LottieComponent from '@/components/LottieComponent';

export default async function Thanks() {
	const response: ThanksType = await fetchHygraph(ThanksQuery);
	const data = response.obrigados[0];
	return (
		<main className='max-w-7xl mx-auto w-full h-screen'>
			<div className='flex flex-col gap-5 mt-20 px-4 2xl:mt-28 items-center justify-center max-w-4xl text-center mx-auto w-full'>
				<h1 className='font-bold text-4xl 2xl:text-6xl capitalize'>
					{data.headline}
				</h1>
				<p className='text-base 2xl:text-xl'>{data.subheadline}</p>
				<div className='md:-translate-y-28'>
					<LottieComponent data={data.lottie}></LottieComponent>
				</div>
			</div>
		</main>
	);
}
