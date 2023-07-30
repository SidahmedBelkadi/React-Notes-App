import { BsSearch } from "react-icons/bs";

const SearchBar = ({handleSearchNote}) => {
  return (
    <div className="search-bar">
        <BsSearch className="search-icon" size='1.5rem' />
        <input onChange={(e) => handleSearchNote(e.target.value)}
         type="text" name="" id="" placeholder="Search ..."/>
    </div>
  )
}

export default SearchBar