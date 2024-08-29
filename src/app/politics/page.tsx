/** @format */

import { RichText } from '@/components/RichText';
import { fetchHygraph } from '@/lib/fetchHygraph';
import { PoliticsQuery } from '@/lib/queries';
import { PoliticsType } from '@/lib/types';
import React from 'react';

export default async function Politics() {
	const response: PoliticsType = await fetchHygraph(PoliticsQuery);
	const data = response.politicas[0];

	return (
		<main className='h-full w-full max-w-7xl mx-auto my-20'>
			<div className=''>
				<RichText content={data.politics.raw}></RichText>
			</div>
			<div className=''>
				<RichText content={data.terms.raw}></RichText>
			</div>
		</main>
	);
}
