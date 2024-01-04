import { Flex, Heading, Link, Text } from "@chakra-ui/react";

export default function Header() {
	return (
		<Flex
			width="100%"
			borderBottom="solid 1px #aaa"
			justifyContent="space-between"
			alignItems="center"
		>
			<Heading as="h1" size="lg">
				React Init
			</Heading>
			<Flex gap="1rem">
				<Link>
					<Text fontSize="2xl">aaa</Text>
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
