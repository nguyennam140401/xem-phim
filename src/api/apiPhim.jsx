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
            size: 20,
        }
    )
    return res.data
}
export const getDetailFilm = async (id, type) => {
    const res = await newAxios.get(
        `https://ga-mobile-api.loklok.tv/cms/app/movieDrama/get?id=${id}&category=${type}`
    )
    return res.data
}

export const getPlayFilm = async (
    contentId,
    episodeId,
    definition,
    category = 1
) => {
    const res = await newAxios.get(
        `https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo`,
        {
            params: {
                category: category,
                contentId: contentId,
                episodeId: episodeId,
                definition: definition,
            },
        }
    )
    return res.data
}

export const getSearchOption = async () => {
    const res = await newAxios.get(
        'https://ga-mobile-api.loklok.tv/cms/app/search/list'
    )
    return res.data
}

export const searchFilm = async (option) => {
    const res = await newAxios.post(
        'https://ga-mobile-api.loklok.tv/cms/app/search/v1/search',
        option
    )
    return res.data
}
