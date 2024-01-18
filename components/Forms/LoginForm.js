"use client";
import React, { useState, useEffect } from "react";
import CardWrapper from "../cardwrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastAction } from "@/components/ui/toast";
import toast from "react-hot-toast";
import Loader from "../Loader";
// Define the SignInForm component
const SignInForm = () => {
	const router = useRouter();
	const [Loading, setLoading] = useState(false);
	const [user, setuser] = useState({
		email: "",
		password: "",
	});

	// useEffect to log the user object after the state has been updated
	useEffect(() => {
		console.log("user", user);
	}, [user]);

	// Handle form submission
	const handleSubmit = async () => {
		try {
			setLoading(true);
			console.log("Form submitted:", user);
			const res = await axios.post("/api/users/Login", user);
			toast.success("Login Successful", {
				duration: 3000,
			});
			window.location.reload();
			router.push("/dashboard");
		} catch (error) {
			toast.error("Email or password is incorrect", {
				duration: 3000,
			});
			console.log("Login failed", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<CardWrapper
			headerLabel={
				Loading ? (
				<Loader text={"Login"}/>
				) : (
					"Login"
				)
			}
			backButtonLable={"Create an account!"}
			backButtonHref="/Signup"
			showSocial
		>
			<div className="mt-4 text-left">
				{/* Email Input */}
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-600"
					>
						Email
					</label>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="Enter your email"
						value={user.email}
						onChange={(e) => setuser({ ...user, email: e.target.value })}
					/>
				</div>

				{/* Password Input */}
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-600"
					>
						Password
					</label>
					<Input
						type="password"
						id="password"
						name="password"
						placeholder="Enter your password"
						value={user.password}
						onChange={(e) => setuser({ ...user, password: e.target.value })}
					/>
				</div>

				{/* Submit Button */}
				<Button type="submit" className="w-full" onClick={handleSubmit}>
					Login
				</Button>
			</div>
		</CardWrapper>
	);
};

// Export the SignInForm component
export default SignInForm;
