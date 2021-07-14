import { createContext, useContext, useState } from "react"

const ControlsContext = createContext()
export const ControlsProvider = ({ children }) => {
    const [penColor, setPenColor] = useState('black')
    const [penWidth, setPenWidth] = useState(4)

    return (
        <ControlsContext.Provider value={{
            penColor,
            setPenColor,
            penWidth,
            setPenWidth
        }}>
            {children}
        </ControlsContext.Provider>
    )
}

export const useControls = () => useContext(ControlsContext)