import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
	return data.map(dataPoint => (
		<View key={dataPoint} style={styles.listItem}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
}

export default List;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 16,
		paddingVertical: 8,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: "#fed7aa",
	},
	itemText: {
		color: "#262626",
		// textAlign: "center",
	},
});