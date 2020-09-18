
export const getAllPost = () => {
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
};

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
		'Animales'
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
