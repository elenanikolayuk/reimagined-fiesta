import React from "react"
import useTheme from "../../hooks/useTheme"
 
const Todo = () => {
    const {isDark, setIsDark} = useTheme()
    return (
        <div>
           
        <h1 className="headline">Dark/Light</h1>
        <p className="text">Toggle dark or light to cuctomize</p>
        <p className="text">your interface</p>
            <button className="btn-link" onClick={()=> setIsDark(!isDark)}>Change theme</button>
       </div>
    )
}

export default Todo

