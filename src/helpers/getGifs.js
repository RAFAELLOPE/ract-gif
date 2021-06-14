

export const getGifs = async( category  ) => {

    const api_key = 'r87M1DffnDABDUZ0XyxErafQRxBBD4Lm';
    const limit = '5';
    const endpoint = 'api.giphy.com/v1/gifs/search';
    //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=r87M1DffnDABDUZ0XyxErafQRxBBD4Lm';
    const url = `https://${ endpoint }?q=${ encodeURI(category) }&limit=${ limit }&api_key=${ api_key }`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}