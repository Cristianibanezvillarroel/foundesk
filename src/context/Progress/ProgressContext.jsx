import { createContext, useState } from "react";

export const ProgressContext = createContext()

export const ProgressProvider = ({ children }) => {
    const [progressCount, setProgressCount] = useState(null)
    const [lessonCount, setLessonCount] = useState(null)
    
    return (
        <ProgressContext.Provider value={{
            progressCount,
            setProgressCount,
            lessonCount,
            setLessonCount
        }}>
            {children}
        </ProgressContext.Provider>
    )
}