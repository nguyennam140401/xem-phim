import { getDetailFilm, getPlayFilm } from '../api/apiPhim'

export const getFilmDetail = async (id, episodeIndex) => {
    const res = await getDetailFilm(id)
    const data = res.data
    const sources = (
        await Promise.all(
            data.episodeVo[episodeIndex].definitionList.map(async (quality) =>
                //     await axios.get(
                //         'https://ga-mobile-api.loklok.tv/cms/app/media/previewInfo',
                //         {
                //             params: {
                //                 category: 1,
                //                 contentId: id,
                //                 episodeId: data.episodeVo[episodeIndex].id,
                //                 definition: quality.code,
                //             },
                //         }
                //     )
                // ).data.data.mediaUrl
                {
                    const res = await getPlayFilm(
                        id,
                        data.episodeVo[episodeIndex].id,
                        quality.code
                    )
                    console.log(res)
                    return res.data.mediaUrl
                }
            )
        )
    )
        .map((url, index) => ({
            quality: Number(
                data.episodeVo[episodeIndex].definitionList[index].description
                    .toLowerCase()
                    .replace('p', '')
            ),
            url,
        }))
        .sort((a, b) => b.quality - a.quality)

    const subtitles = data.episodeVo[episodeIndex].subtitlingList
        .map((sub) => ({
            language: `${sub.language}${sub.translateType ? ' (Auto)' : ''}`,
            url: sub.subtitlingUrl,
            lang: sub.languageAbbr,
        }))
        .reduce((acc, element) => {
            if (element.lang === 'en') {
                return [element, ...acc]
            }
            return [...acc, element]
        }, [])
        .reduce((acc, element) => {
            if (element.lang === 'vi') {
                return [element, ...acc]
            }
            return [...acc, element]
        }, [])

    return {
        data,
        sources,
        subtitles,
    }
}
