"use client";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button } from "../ui/button";

export const Social = () => {
	return (
		<div className="flex items-center w-full gap-x-2">
			<Button size="lg" className="w-full hover:border-sky-700" variant="outline" onClick={() => {}}>
				<p className="font-semibold mr-2">Login with Google</p>
				<FaGoogle className="h-5 w-5" />
			</Button>
	
		</div>
	);
};
