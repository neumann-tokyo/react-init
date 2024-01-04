import { Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<Flex
			width="100%"
			borderBottom="solid 1px #aaa"
			justifyContent="space-between"
			alignItems="center"
		>
			<Link to="/">
				<Heading as="h1" size="lg">
					React Init
				</Heading>
			</Link>
			<Flex gap="1rem">
				<Link to="content">
					<Text fontSize="2xl">content</Text>
				</Link>
				<Link>
					<Text fontSize="2xl">bbb</Text>
				</Link>
				<Link>
					<Text fontSize="2xl">ccc</Text>
				</Link>
			</Flex>
		</Flex>
	);
}
