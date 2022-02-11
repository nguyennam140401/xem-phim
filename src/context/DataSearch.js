import { createContext, useEffect, useState } from 'react'
export const DataSearchContext = createContext()

const DataSearchContextProvider = ({ children }) => {
    const [category, setCategory] = useState(null)
    const [filterState, setFilterState] = useState(null)
    const [idCategory, setIdCategory] = useState(0)
    const changeIdCategory = (id) => {
        setIdCategory(id)
    }
    useEffect(() => {
        const slv = async () => {
            const res = await getSearchOption()
            setFilterState(res.data)
            console.log(filterState)
        }
        slv()
        // setIdCategory(0)
    }, [id])
    const data = { filterState }
    return (
        <DataSearchContext.Provider value={data}>
            {children}
        </DataSearchContext.Provider>
    )
}
export default DataSearchContext
