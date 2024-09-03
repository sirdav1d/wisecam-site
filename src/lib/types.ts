/** @format */

import { RichTextContent } from '@graphcms/rich-text-types';

export type HomeType = {
	homepages: ContentHome[];
};

export type ContentHome = {
	headline: string;
	headlinespan: string;
	subheadline: string;
	ctahero: string;
	videohero: hygraphAsset;
	vantagenstitle: string;
	vantagensdescription: string;
	vantagem: hygraphVantagem[];
	ctavantagem: string;
	titlesolucoes: string;
	desciptionsolucoes: string;
	solucao: hygraphSolucao[];
	ctasectiontitle: string;
	ctasectiondescription: string;
	ctasectionimage: hygraphAsset;
	ctasectionbtn: string;
	contactsectiontitle: string;
	contactsectiondescription: string;
	argumento: hygraphArgumento[];
};

export type hygraphSolucao = {
	title: string;
	id: string;
	indexColumn: string;
	description: string;
	image: hygraphAsset;
	verticalText: string;
	horizontalText: string;
};

export type hygraphArgumento = {
	title: string;
	id: string;
	description: string;
};

export type hygraphVantagem = {
	title: string;
	id: string;
	description: string;
	image: hygraphAsset;
};

export type hygraphAsset = {
	url: string;
};

export type hygraphLottie = {
	data: JSON;
};

export type NotFoundType = {
	erros: ContentError[];
};

export type ContentError = {
	erroTitle: string;
	erroLottie: hygraphLottie;
};

export type ThanksType = {
	obrigados: ThanksTypeContent[];
};

export type ThanksTypeContent = {
	headline: string;
	subheadline: string;
	lottie: hygraphLottie;
};

export type PoliticsType = {
	politicas: ContentPoliticsType[];
};

export type ContentPoliticsType = {
	politics: HtmlType;
	terms: HtmlType;
};

export type HtmlType = {
	raw: RichTextContent;
};
