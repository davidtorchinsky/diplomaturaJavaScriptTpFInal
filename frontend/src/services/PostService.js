export const getAllPost = () => {
	let post = {
		_id: '5f4fd058eae6873d1ca07df1',
		upvotes: [],
		downvotes: [],
		comentarios: [],
		usuario: '5f4fcff5eae6873d1ca07dee',
		fecha: '2020-02-09T03:00:00.000Z',
		memeUrl: 'http://gph.is/2h8wI3B',
		titulo: '1 intento',
		categoria: 'fire',
		__v: 0
    };
    return post;
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
