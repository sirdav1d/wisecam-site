/** @format */

'use server';

import EmailTemplate from '@/components/ui/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
	email: string;
	name: string;
	message?: string;
	consent: boolean;
}

export async function sendEmail(values: SendEmailProps) {
	const senderEmail = values.email;
	const name = values.name;
	const message = values.message;
	try {
		const data = await resend.emails.send({
			from: 'Iceberg Digital <onboarding@resend.dev>',
			to: 'contato@wisecan.com.br',
			subject: 'Um novo lead acessou seu site',
			react: EmailTemplate({
				name: name,
				email: senderEmail,
				message: message,
			}),
			text: '',
		});
		console.log(data.data?.id);
		console.log(data.error);
	} catch (error) {
		console.log(error);
	}
}
