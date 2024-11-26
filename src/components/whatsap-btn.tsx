/** @format */

import React from 'react';
import { LogosWhatsappIcon } from './whatsapp-icon';
import { Button } from './ui/button';
import Image from 'next/image';
import logo from '@/../public/logos--whatsapp-icon.png';

export default function WhatsappBtn() {
	return (
		<a
			target='_blank'
			href='#'
			referrerPolicy='no-referrer'
			aria-label='botão de whatsapp'>
			<div className='fixed cursor-pointer hover:scale-110 transition-all duration-200 ease-linear bottom-5 right-5 z-[999999999999999999999999999999]'>
				<Image
					src={logo}
					alt='logo whatsapp'
					width={48}
					height={48}
				/>
			</div>
		</a>
	);
}
