import React from "react";
import { Link } from "react-router-dom";
import { Style } from "./style";
const BoxFilmSearch = ({ data }) => {
	const { cover, title, id, domainType, coverHorizontalUrl, name } = data;
	return (
		<Style>
			<Link to={`/movie/${id}?domain=${domainType}`}>
				<div className="bx-img">
					<img src={cover || coverHorizontalUrl} alt={title} />
				</div>
				<p>{title || name}</p>
			</Link>
		</Style>
	);
};

export default BoxFilmSearch;
