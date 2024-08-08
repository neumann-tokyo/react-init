import { Flex, Heading, Text } from "@chakra-ui/react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<Flex flexDirection="column" width="100%" alignItems="center" gap="1rem">
			<Heading as="h1" size="2xl" margin="3rem 0">
				Oops!
			</Heading>
			<Text>Sorry, an unexpected error has occurred.</Text>
			<Text>{error.statusText || error.message}</Text>
		</Flex>
	);
}
