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
