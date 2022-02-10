import { getDetailFilm, getPlayFilm } from '../api/apiPhim'

export const getFilmDetail = async (id, episodeIndex, type) => {
    const res = await getDetailFilm(id, type)
    const data = res.data
    console.log(data)
    const sources = (
        await Promise.all(
            data.episodeVo[episodeIndex].definitionList.map(async (quality) => {
                const res = await getPlayFilm(
                    id,
                    data.episodeVo[episodeIndex].id,
                    quality.code,
                    data.category
                )
                // console.log(res)
                return res.data.mediaUrl
            })
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
