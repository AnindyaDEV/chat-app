import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
// 	const { loading, logout } = useLogout();

	return (
		<div className="mt-auto">
				<BiLogOut className='w-7 h-7 text-white cursor-pointer'  />
		</div>
	);
};
export default LogoutButton;
