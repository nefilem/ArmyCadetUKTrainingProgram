import styles from "./styles.module.css";
import Header from '../Header'
import Footer from '../Footer'
import Home from '../home.component'

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
        <div>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<div>
            <Header />
            </div>
            <Home />
           
		</div>
          <Footer />
          </div>
	);
};

export default Main;