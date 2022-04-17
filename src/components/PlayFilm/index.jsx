import React from "react";
import ReactPlayer from "react-player";
import { subtitleProxy } from "../../utils/sub";
import InforFilm from "../InforFilm";

const PlayFilm = ({ dataFilm, episodeIndex }) => {
	const { data, sources, subtitles } = dataFilm;
	console.log(subtitles);
	return (
		<div>
			<ReactPlayer
				width="100%"
				height="auto"
				controls
				url={sources[0].url}
				playing={true}
				config={{
					file: {
						attributes: {
							crossOrigin: "true",
						},
						tracks: subtitles.map((item, idx) => {
							return {
								kind: "subtitles",
								src: subtitleProxy(item.url),
								srcLang: item.language,
								default: idx === 0,
							};
						}),
						// {
						// 	kind: "subtitles",
						// 	src:
						// 		subtitles.length > 0 ? subtitleProxy(subtitles[0].url) : "",
						// 	srcLang: "en",
						// 	default: true,
						// },
					},
				}}
			/>

			<InforFilm data={data} episodeIndex={episodeIndex} />
		</div>
	);
};

export default PlayFilm;
