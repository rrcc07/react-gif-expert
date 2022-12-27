export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=y57mN7E6JS770KPTS3EtaMKeBXZwoH5Q`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gift = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gift;
}