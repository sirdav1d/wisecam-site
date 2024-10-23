/** @format */

import EmailTemplate from '@/components/email-template';
import { resend } from '@/lib/resendCient';

export async function POST() {
	try {
		const { data, error } = await resend.emails.send({
			from: 'Iceberg Digital <onboarding@resend.dev>',
			to: ['contato@wisecan.com.br'],
			subject: 'Hello world',
			text: 'teste123456',
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
