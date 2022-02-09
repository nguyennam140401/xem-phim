import axios from 'axios'

export const getHome = async () => {
    const res = await axios.get(
        'https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0',
        {
            headers: {
                lang: 'en',
                versioncode: 11,
                clienttype: 'ios_jike_default',
            },
        }
    )
    return res.data
}
