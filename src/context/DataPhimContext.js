import { createContext, useState } from 'react'

export const DataPhimContext = createContext()

const DataPhimContextProvider = ({ children }) => {
    const [dataPhimState, setdataPhimState] = useState(second)
    data = { dataPhimState }
    return (
        <DataPhimContext.Provider value={data}>
            {children}
        </DataPhimContext.Provider>
    )
}
export default DataPhimContextProvider
