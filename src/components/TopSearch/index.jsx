import React, { useEffect, useState } from "react";
import { getTopSearch } from "../../api/apiPhim";
import { Style } from "./style";
import BoxFilmSearch from "../BoxFilmSearch";
import BoxFilmSearchLoading from "../BoxLoading/BoxFilmSearchLoading";
const TopSearch = () => {
	const [listFilm, setListFilm] = useState(null);
	useEffect(() => {
		const solve = async () => {
			const res = await getTopSearch();
			setListFilm(res.data.list);
		};
		solve();
	}, []);

	return (
		<Style>
			<p className="title">Top Search</p>
			{listFilm !== null ? (
				<div className="listFilm">
					{listFilm.map((film, idx) => {
						return <BoxFilmSearch key={idx} data={film} />;
					})}
				</div>
			) : (
				<div>
					<BoxFilmSearchLoading />
					<BoxFilmSearchLoading />
					<BoxFilmSearchLoading />
				</div>
			)}
		</Style>
	);
};

export default TopSearch;
