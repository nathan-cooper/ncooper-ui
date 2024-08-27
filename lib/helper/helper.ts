import { NavigateFunction } from "react-router-dom";


export const navHelper = (path: string, navigate?: NavigateFunction) => {
    if (navigate) {
        navigate(path);
    } else {
        window.location.href = path;
    }
}