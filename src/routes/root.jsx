import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

export default function Root() {
	return (
		<Flex width="100%" alignItems="center" flexDirection="column">
			<Flex maxWidth="1000px" width="100%">
				<Header />
			</Flex>
			<Flex maxWidth="1000px" width="100%">
				<Outlet />
			</Flex>
		</Flex>
	);
}
