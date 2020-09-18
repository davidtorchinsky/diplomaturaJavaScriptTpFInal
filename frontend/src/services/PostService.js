
export const getAllPost = async () => {
	const posts = await (await fetch('http://localhost:4000/meme/')).json();
	return posts.obj;
};

export const getAllFromUser = async (uid) => {
	const posts = await (await fetch('http://localhost:4000/memesUsuario/'+uid)).json();
	return posts.obj;
}

export const getAllCategorias = () => {
	return [
		'Random',
		'Anime & Manga',
		'NSFW',
		'News',
		'WTF',
		'Funny',
		'Gaming',
		'Cosplay',
		'Politica',
		'Deportes',
		'Animales',
		'Politica'
	];
};

export const recomendados = () =>{
	let today = new Date();
	let comentario = {
		autor: '1',
		numero: 1,
		coment: 'Este es un comentario',
		fecha: today,
		comentarios: []
	};
	

	let posts = [
		{
			categoria: 'Funny',
			fecha: today,
			titulo: 'Wait guys...',
			memeUrl: '../../../src/assets/images/lotr.jpg',
			upVotes: [ 1, 2, 3, 4, 5 ],
			downVotes: [ 6, 7 ],
			comentarios: [ comentario, comentario ]
		},
		{
			categoria: 'Funny',
			fecha: today,
			titulo: 'Wait guys...',
			memeUrl: '../../../src/assets/images/lotr.jpg',
			upVotes: [ 1, 2, 3, 4, 5 ],
			downVotes: [ 6, 7 ],
			comentarios: [ comentario, comentario ]
		},
		{
			categoria: 'News',
			fecha: today,
			titulo: 'Wait guys...',
			memeUrl: '../../../src/assets/images/lotr.jpg',
			upVotes: [ 1, 2, 3, 4, 5 ],
			downVotes: [ 6, 7 ],
			comentarios: [ comentario, comentario ]
		}
	];

	return posts;
}
