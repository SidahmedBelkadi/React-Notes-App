import { BsToggleOff, BsToggleOn } from "react-icons/bs";
const Header = ({handleChangeDarkTheme, darkTheme}) => {
  return (
    <div className="header">
        <h2>Notes</h2>
        <div className="dark-theme-flex">
          <label htmlFor="toggle">Mode</label>
          {
            darkTheme ?
            <BsToggleOn onClick={() => handleChangeDarkTheme(m => !m)} id="toggle" size='1.5rem'/>
            :
            <BsToggleOff onClick={() => handleChangeDarkTheme(m => !m)} id="toggle" size='1.5rem'/>
          }
        </div>
    </div>
  )
}

export default Header