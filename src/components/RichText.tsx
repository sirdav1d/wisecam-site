/** @format */

import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer';
import { ComponentProps } from 'react';

type RichTextProps = ComponentProps<typeof CMSRichText>;

export const RichText = ({ ...props }: RichTextProps) => {
	return (
		<CMSRichText
			{...props}
			renderers={{
				p: ({ children }) => (
					<p className='font-light text-base mb-5'>{children}</p>
				),
				h2: ({ children }) => (
					<h2 className='text-4xl font-bold mb-10'>{children}</h2>
				),
				bold: ({ children }) => (
					<b className='text-gray-50 font-bold text-4xl'>{children}</b>
				),
				ul: ({ children }) => (
					<ul className='list-disc list-inside pl-2 flex flex-col gap-1 mb-5'>
						{children}
					</ul>
				),
				a: ({ children, ...props }) => (
					<a
						{...props}
						className='hover:text-blue-500 transition-colors underline'>
						{children}
					</a>
				),
			}}
		/>
	);
};
