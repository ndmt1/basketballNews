import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Alert, View, ImageBackground } from "react-native";
import { Button } from "react-native-paper";

function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/manxanh.jpg")}
        style={styles.background}
      >
        <View style={{ marginTop: 600 }}>
          <Button
            style={{ marginTop: 30, borderRadius: 10, backgroundColor:"#6cabdd" }}
            mode="contained"
            onPress={() => navigation.navigate("Sign in")}
          > Get Started  </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  button: {
    borderRadius: 16,
    padding: 1,
  },
});

export default Splash;
