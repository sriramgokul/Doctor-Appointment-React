import { AppState } from "../Context/AppContext";

function TopBar(){
  const {theme,setTheme} = AppState();
    return(
        <div className="top-bar">
            <div className="navbar bg-base-100">
            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
              </div>
            </div>
            <div>
              {theme === "dark" ? <button className="btn btn-accent" onClick={()=> setTheme("light")}>Light</button> : <button className="btn btn-accent" onClick={()=> setTheme("dark")}>Dark</button> }
              
              
            </div>
          </div>
        </div>
    )
}

export default TopBar;