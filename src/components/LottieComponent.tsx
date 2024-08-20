/** @format */
'use client';

import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), {
	ssr: false,
});

import React from 'react';

export type LottieComponentProps = {
	data: any;
};

export default function LottieComponent({ data }: LottieComponentProps) {
	return <Lottie animationData={data} />;
}
