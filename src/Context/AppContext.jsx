import { createContext, useContext, useState } from "react";

// Step 1:
const AppCtx = createContext(null);
// Step 2 with Provider
function AppContext({children}){
    const [theme,setTheme] = useState("dark")
    return(
       <AppCtx.Provider value={{theme,setTheme}}>
        {children}
       </AppCtx.Provider>
    )
}

export const AppState = ()=>{
    // Step 3 Using the Context
    return useContext(AppCtx);
}

export default AppContext;