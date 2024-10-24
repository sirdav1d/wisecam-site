/** @format */
'use client';

import { sendEmail } from '@/app/actions/email-action';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FormSchema } from '@/lib/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { LuArrowUpRight } from 'react-icons/lu';
import { toast } from 'sonner';
import { z } from 'zod';

export default function FormContact() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			consent: false,
		},
	});

	async function onSubmit(values: z.infer<typeof FormSchema>) {
		try {
			await sendEmail(values);
			toast.success(`Mensagem enviada com sucesso`, {
				style: { background: '#bbf7d0' },
			});
			form.reset();
		} catch (error) {
			toast.error(`Algo deu errado ${error}`);
			console.log(error);
		}
	}

	return (
		<Form {...form}>
			<form
				className='grid grid-cols-1 grid-rows-[auto_auto] gap-6 bg-zinc-50/40 border border-zinc-400 p-8 rounded-md max-w-md mx-auto z-50 backdrop-blur-md'
				onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem
							aria-required
							className='relative w-full'>
							<FormLabel className='text-base font-semibold text-zinc-900'>
								Nome Completo:
							</FormLabel>
							<FormControl>
								<Input
									className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
									placeholder='nome do usuário'
									type='text'
									{...field}
								/>
							</FormControl>
							<FormMessage className='absolute text-xs text-red-600' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem
							aria-required
							className='relative w-full'>
							<FormLabel className='text-base font-semibold text-zinc-900'>
								E-mail:
							</FormLabel>
							<FormControl>
								<Input
									className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
									placeholder='Digite seu e-mail'
									type='email'
									{...field}
								/>
							</FormControl>
							<FormMessage className='absolute text-xs text-red-600' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem
							aria-required
							className='relative w-full'>
							<FormLabel className='text-base font-semibold text-zinc-900'>
								Mensagem:
							</FormLabel>
							<FormControl>
								<Textarea
									className='text-zinc-800 text-sm ring-0 rounded-md outline-none px-6 py-4 placeholder:text-zinc-400'
									placeholder='Digite sua mensagem'
									{...field}
								/>
							</FormControl>
							<FormMessage className='absolute text-xs text-red-600' />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='consent'
					render={({ field }) => (
						<FormItem
							aria-required
							className='relative w-full flex gap-2 items-baseline'>
							<>
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<FormLabel className='text-base font-normal text-zinc-900'>
									<p>
										Aceito os{' '}
										<a
											className='underline hover:text-orange-600 transition-all duration-200 ease-linear'
											href='/politics'
											target='_blank'
											rel='noopener noreferrer'>
											{''}termos
										</a>
									</p>
								</FormLabel>
								<FormMessage className='absolute text-xs text-red-600' />
							</>
						</FormItem>
					)}
				/>
				<Button
					disabled={
						form.formState.isLoading ||
						form.formState.isSubmitting ||
						!form.getValues('consent') ||
						!form.getValues('name') ||
						!form.getValues('message') ||
						!form.getValues('email')
					}
					type='submit'
					variant={'brand'}
					className='w-full bg-blue-600 hover:bg-blue-500 disabled:grayscale-0 disabled:cursor-none'>
					Enviar Mensagem <LuArrowUpRight size={32} />
				</Button>
			</form>
		</Form>
	);
}
