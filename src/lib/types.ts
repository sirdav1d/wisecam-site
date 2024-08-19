/** @format */

export type HomeType = {
	homepages: Content[];
};

export type Content = {
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

export type NotFoundType = {};

export type ThanksType = {};

export type PoliticsType = {};
