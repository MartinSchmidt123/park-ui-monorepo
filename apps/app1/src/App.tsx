import {Button, CardButton} from "@park-ui-monorepo/components";
import {css} from "@park-ui-monorepo/styled-system/css";
import {VStack} from "@park-ui-monorepo/styled-system/jsx";

export const App = () => {
	return (
		<>
			<p>App 1</p>
			<VStack gap={10}
				className={css({
					maxW: "10rem",
				})}
			>
				<CardButton />
				<Button
					border={"red"}
					borderStyle={"solid"}
					className={css({
						fontWeight: "thin",
					})}
				>
					Button 1
				</Button>
			</VStack>
		</>
	);
};
