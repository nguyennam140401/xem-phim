import { FormControl, Grid } from "@mui/material";
import React, { useContext } from "react";
import { DataSearchContext } from "../../context/DataSearchContext";
// import { Link } from 'react-router-dom'
import { Style } from "./style";
const Filter = ({ arrOption }) => {
	const { optionSearch, handleChangeOption } = useContext(DataSearchContext);
	return (
		<Style>
			<Grid container sx={{ marginBottom: "1.5rem" }}>
				{arrOption &&
					arrOption.map((item, idx) => {
						return (
							<Grid item key={idx}>
								<FormControl sx={{ minWidth: 100, marginRight: 2 }}>
									<select
										value={optionSearch[`${item.items[0].screeningType}`]}
										name={item.items[0].screeningType}
										label="Age"
										onChange={handleChangeOption}
										size="small"
									>
										{item.items.map((i, index) => {
											return (
												<option
													hidden={index === 0 && idx !== arrOption.length - 1}
													key={index}
													value={i.params}
												>
													{i.name}
												</option>
											);
										})}
									</select>
								</FormControl>
							</Grid>
						);
					})}
			</Grid>
		</Style>
	);
};

export default Filter;
