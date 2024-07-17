import SearchInput from "./SearchInput"
import Conversatons from "./Conversations"
import LogoutButton from "./LogoutButton"
const Sidebar = () => {
  return (
    <div className="border-r px-2">
      <SearchInput/>
      <div className=" divider px-3"></div>
      <Conversatons/>   
      <LogoutButton/>
    </div>  
  )
}

export default Sidebar
