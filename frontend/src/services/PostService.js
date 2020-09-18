export const getAllPost = async () => {
	let posts = fetch("/meme/");
	posts = (await posts).json();
	return posts;
	/*
	let today = new Date();
	let posts = [];
	posts[0] = getPost('33');
	for (let i = 1; i < 30; i++){
		posts[i] = getPost('12');
	}
	return posts;
	*/
};
export const getPost = (id) => {
	let today = new Date();
	let comentario = {
		autor: '1',
		numero: 1,
		coment: 'Este es un comentario',
		fecha: today,
		comentarios: []
	};
	let post = {};
	if (id == '12') {
		post = {
			uid: '12',
			categoria: 'Funny',
			fecha: today,
			titulo: 'Wait guys...',
			memeUrl: '../../../src/assets/images/lotr.jpg',
			upVotes: [1, 2, 3, 4, 5],
			downVotes: [6, 7],
			comentarios: [comentario, comentario]
		};
	} else {
		post = {
			uid: '33',
			categoria: 'News',
			fecha: today,
			titulo: 'Wtf',
			memeUrl: '../../../src/assets/images/lotr.jpg',
			upVotes: [1, 2, 3, 4, 5],
			downVotes: [6, 7],
			comentarios: [comentario, comentario, comentario]
		};
	}
	
	return post;
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
		'Animales'
	];
};
