import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import {
  Host,
  Column,
  Button,
  ModalBottomSheet,
  
} from "@expo/ui/jetpack-compose";

export default function Profile() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Hola!!</Text>

      <Image
        source={{
          uri: "https://i.pinimg.com/1200x/bc/bc/b1/bcbcb1440cd11dec93408e57cb934ab2.jpg",
        }}
        style={styles.image}
        contentFit="cover"
      />

      <Host>
        <Column>
          <Button onClick={() => setVisible(true)}>
            <Text>Open Bottom Sheet</Text>
          </Button>


          {visible && (
            <ModalBottomSheet
              onDismiss={() => setVisible(false)}
            >
              <Column>
                <Text style={styles.content}>Bottom Sheet Content</Text>

                <Button onClick={() => setVisible(false)}>
                  <Text>Close</Text>
                </Button>
              </Column>
            </ModalBottomSheet>
          )}
        </Column>
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
  content: {
    fontSize: 24,
    fontWeight: "bold",
    color:"lightgreen"
  },
  image: {
    width: 200,
    height: 200,
  },
});