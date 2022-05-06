import styles from "./styles.module.css";
import Header from '../Header'
import Footer from '../Footer'
import Home from '../home.component'

const Main = () => {
	// const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };

	return (
		<div>
			{/* <Header /> 			 */}
			<div className={styles.main_container}> 
				<Home />	
			{/* <nav className={styles.navbar}>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav> */}	
			</div> 
          	 <Footer /> 
        </div>
	);
};

export default Main;