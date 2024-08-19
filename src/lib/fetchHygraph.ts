/** @format */

export async function fetchHygraph(query: string) {
	const response = await fetch(process.env.HYGRAPH_ENDPOINT!, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${process.env.HYGRAPH_TOKEN!}`,
		},
		body: JSON.stringify({ query }),
		next: {
			revalidate: 10,
		},
	});

	const { data } = await response.json();
	return data;
}
