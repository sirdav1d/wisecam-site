/** @format */

import { Contact1 } from '@/components/Contact1';
import { CTA1 } from '@/components/CTA1';
import { Feature351 } from '@/components/Feature351';
import { Feature493 } from '@/components/Feature493';
import { Footer4 } from '@/components/Footer4';
import { HeaderHero82 } from '@/components/HeaderHero82';
import { Navbar2 } from '@/components/Navbar2';
import logo from '@/assets/logo-wisecam.png';

export default function Home() {
	return (
		<main className='mx-auto w-full overflow-x-hidden flex flex-col items-center justify-center'>
			<Navbar2 logo={logo} />
			<HeaderHero82 />
			<Feature493 />
			<Feature351 />
			<CTA1 />
			<Contact1 />
			<Footer4 />
		</main>
	);
}
