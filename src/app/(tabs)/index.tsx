import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Button, Host } from "@expo/ui";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.c1}>Great!</Text>

      <TextInput placeholder="hello " />
      <ActivityIndicator size={"large"} />
      <Host matchContents>
        <Button onPress={() => router.push("/about")} />
          <Text>Navigater</Text>
      </Host>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
  },
  c1: {
    color: "red",
    fontSize: 20,
    marginTop: 10,
  },
});
