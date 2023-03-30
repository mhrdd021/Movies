const ApiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '3d40ce92864766fc9868bdc7b67a6d82',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}
export default ApiConfig