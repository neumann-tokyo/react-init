import { Flex } from "@chakra-ui/react";
import Header from "../components/header";

export default function Root() {
	return (
		<Flex width="100%" justifyContent="center">
			<Flex maxWidth="1000px" width="100%">
				<Header />
			</Flex>
		</Flex>
	);
}
