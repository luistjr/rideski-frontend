import { useHistory } from 'react-router-dom';

function Logout({ setUser }) {

    let history = useHistory();

    const logoutUser = function logout() {
        setUser(null);
        history.push("login")
    }

    return (
        <div>
            {logoutUser()}
        </div>

    );
}

export default Logout;