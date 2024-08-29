import { createContext, useContext, useState } from "react";

const AppCtx = createContext(null);

function AppContext({children}){
    const [theme,setTheme] = useState("dark")
    return(
       <AppCtx.Provider value={{theme,setTheme}}>
        {children}
       </AppCtx.Provider>
    )
}

export const AppState = ()=>{
    return useContext(AppCtx);
}

export default AppContext;