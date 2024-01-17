"use client"
import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Header } from "./Header";
import { Social } from "./social";
import { BackButton } from "./buttons/Backbutton";



const CardWrapper = ({
	children,
	headerLabel,
	backButtonLable,
	backButtonHref,
	showSocial,
}) => {
	return (
		<>
			<Card className="w-[400px] shadow-md  items-center text-center">
                <CardHeader>
                    <Header label={headerLabel}/>
                </CardHeader>
                <CardContent>
                {children}
                </CardContent>

                {showSocial && (
                    <CardFooter>
                       <Social/>
                    </CardFooter>
                )}
                <CardFooter>
                    <BackButton
                    label={backButtonLable}
                    href={backButtonHref}
                    />
                </CardFooter>
            </Card>
		</>
	);
};

export default CardWrapper;
