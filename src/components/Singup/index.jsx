import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
//import bcrypt from 'bcrypt';

const Signup = () => {
	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	// create new user
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://kgtrainingserver.herokuapp.com/users/register";
			//const url = "http://localhost:3000/users/register";
            console.log(data)
			//let salt = "7";
			//data.password = bcrypt.hash(data.password, salt); // think we should do this
			console.log(data);
			axios.post(url, data)
			.then((res) => {
				console.log("return",res);
				navigate("/login");
				//console.log(res.message);
			}).catch((error) => {
				setError(error.response.data.message);
			})
			//const { data: res } = await axios.post(url, data);			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.green_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstname"
							onChange={handleChange}
							value={data.firstname}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={handleChange}
							value={data.lastname}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;