import React from "react"
import cn from 'classnames'
import useTheme from "../hooks/useTheme"


const Loyout = ({children}) => {
    const {isDark} = useTheme()
    
    return (
        <div className={cn("layout", {
            dark: isDark,
        })}>
            {children}
        </div>
    )
}

export default Loyout