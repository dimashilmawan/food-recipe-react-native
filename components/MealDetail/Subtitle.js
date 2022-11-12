import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children, style }) {
	return (
		<View style={[styles.subtitleContainer, style]}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
}

export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		color: "#c2410c",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: "#c2410c",
		borderBottomWidth: 2,
	},
});
