import {useContext} from "react";
import { ThemeContext } from "../components/providers/ThemeProvider";

const useTheme = () => {
    const value = useContext(ThemeContext)
    return value
}

export default useTheme