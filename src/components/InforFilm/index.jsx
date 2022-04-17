import { CalendarViewMonth, Star } from "@mui/icons-material";
import { Pagination } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Style } from "./style";
const InforFilm = ({ data, episodeIndex }) => {
	const { introduction, name, tagNameList, year, score, episodeVo } = data;
	const [currentPage, setCurrentPage] = useState(episodeIndex);
	const navigate = useNavigate();
	return (
		<Style>
			<h3>{name}</h3>
			<div className="score">
				<span>
					<Star sx={{ color: "yellow" }} />
					{score}
				</span>
				<span>
					<CalendarViewMonth sx={{ color: "blue" }} /> {year}
				</span>
			</div>
			<div className="list-tags">
				{tagNameList.map((item, idx) => {
					return (
						<span className="tag" key={idx}>
							{item}
						</span>
					);
				})}
			</div>
			<p className="intro">{introduction}</p>
			{/* <div className="list-episode">
				{episodeVo.map((item, idx) => {
					return (
						<Link
							to={`?episode=${item.seriesNo}`}
							key={idx}
							className="episode"
						>
							{item.seriesNo}
						</Link>
					);
				})}
			</div> */}
			<div className="list-episode">
				<Pagination
					count={episodeVo.length}
					page={currentPage}
					onChange={(event, value) => {
						setCurrentPage(value);
						navigate(`?episode=${value}`);
					}}
				/>
			</div>
		</Style>
	);
};

export default InforFilm;
