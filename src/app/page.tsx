/** @format */

import { Contact1 } from '@/components/Contact1';
import { CTA1 } from '@/components/CTA1';
import { Feature351 } from '@/components/Feature351';
import { Feature493 } from '@/components/Feature493';
import { Footer4 } from '@/components/Footer4';
import { HeaderHero82 } from '@/components/HeaderHero82';
import { fetchHygraph } from '@/lib/fetchHygraph';
import { HomeQuery } from '@/lib/queries';
import { HomeType } from '@/lib/types';

export default async function Home() {
	const response: HomeType = await fetchHygraph(HomeQuery);
	const data = response.homepages[0];
	return (
		<main className='mx-auto w-full overflow-x-hidden flex flex-col items-center justify-center bg-zinc-50'>
			<HeaderHero82
				heading={data.headline}
				headlinespan={data.headlinespan}
				description={data.subheadline}
				buttons={[{ title: data.ctahero }]}
				video={data.videohero.url}
			/>
			<Feature493
				tagline='Vantagens'
				heading={data.vantagenstitle}
				description={data.vantagensdescription}
				tabs={data.vantagem}
				buttons={[{ title: data.ctavantagem }]}
			/>
			<CTA1
				heading={data.ctasectiontitle}
				description={data.ctasectiondescription}
				buttons={[{ title: data.ctasectionbtn }]}
				image={{ src: data.ctasectionimage.url }}
			/>
			<Feature351
				tagline='Soluções'
				heading={data.titlesolucoes}
				description={data.desciptionsolucoes}
				features={data.solucao}
			/>

			<Contact1 />
		
		</main>
	);
}
