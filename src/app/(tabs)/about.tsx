import { Text, View, StyleSheet, Button} from "react-native";
import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";

export default function About() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Mucho Gusto</Text>

      <Image
        source={{
          uri: "https://i.pinimg.com/736x/cb/6a/1b/cb6a1b03265656ef1aa2dc5880c67b83.jpg",
        }}
        style={styles.image}
      />
      {/* <Link href={"/(tabs)/index"} > Home</Link> */}
      
      <Button title="Navigate" onPress={() => router.push("/(tabs)/profile")} />
      
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
 
  image:{
    width:200,
    height:200
  }
});
