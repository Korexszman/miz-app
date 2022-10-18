import ReactS from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* today tasks */}
        <View style={styles.taskWrappers}>
          <Text style={styles.sectionTitle}> Todays tasks </Text>

          <View style={styles.items}>
            {/* this is where the task will go */}

            <Task text={"Task 1"} />
            <Task text={"Task 2"} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEAED",
  },
  taskWrappers: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
