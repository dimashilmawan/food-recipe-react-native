import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
	const favoriteMealIds = useSelector(state => state.favorites.ids);

	const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no any favorite meals yet.</Text>
			</View>
		);
	}

	return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: "center",
		marginTop: 200,
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#404040",
	},
});
