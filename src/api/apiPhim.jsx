import axios from 'axios'

const head = {
    lang: 'en',
    versioncode: 11,
    clienttype: 'ios_jike_default',
}
const newAxios = axios.create({
    headers: head,
})
export const getHome = async () => {
    const res = await newAxios.get(
        'https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0'
    )
    return res.data
}
export const getTopSearch = async () => {
    const res = await newAxios.get(
        'https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchLeaderboard'
    )
    return res.data
}

export const searchByKeyword = async (keyword) => {
    const res = await newAxios.post(
        'https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchWithKeyWord',
        {
            searchKeyWord: keyword,
            size: 50,
        }
    )
    return res.data
}
export const getDetailFilm = async (id) => {
    const res = await newAxios.get(
        `https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=1`
    )
    return res.data
}

export const getPlayFilm = async (contentId, episodeId, definition) => {
    const res = await newAxios.get(
        `https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo`,
        {
            params: {
                category: 1,
                contentId: contentId,
                episodeId: episodeId,
                definition: definition,
            },
        }
    )
    return res.data
}
