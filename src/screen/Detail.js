import { StatusBar } from "expo-status-bar";
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

export default function Detail() {
  return (
    <SafeAreaView>
      <View style={styles.homeContainer}>
        <View style={styles.imgContainer}>
          <ImageBackground
            source={require("../images/Media.png")}
            resizeMode="cover"
            style={styles.image}
          ></ImageBackground>
        </View>
        <View style={styles.delivery}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: "SF Pro Display",
              fontWeight: 700,
              color: "#2D0C57",
            }}
          >
            Boston Lettuce
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontFamily: "SF Pro Display",
              fontVariant: 400,
              color: "#2D0C57",
              marginTop: 20,
            }}
          >
            1.10€ / piece
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "SF Pro Display",
              fontVariant: 400,
              color: "#06BE77",
              marginTop: 20,
            }}
          >
            ~ 150 gr / piece
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 700,
              fontFamily: "SF Pro Display",
              fontVariant: 400,
              color: "#2D0C57",
              marginTop: 20,
            }}
          >
            Spain
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "SF Pro Display",
              fontVariant: 400,
              color: "#9586A8",
              marginTop: 20,
            }}
          >
            Lettuce is an annual plant of the daisy family, Asteraceae. It is
            most often grown as a leaf vegetable, but sometimes for its stem and
            seeds. Lettuce is most often used for salads, although it is also
            seen in other kinds of food, such as soups, sandwiches and wraps; it
            can also be grilled.
          </Text>
          <View
            style={{
              flexDirection: "row",
              resizeMode: "contain",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                marginTop: 30,
                width:50,
                border: 1,
                borderColor: "gray",
                justifyContent: "center",
                marginRight: 10,
                backgroundColor:'white',
                alignItems:"center"
              }}
            >
              <Image
                style={{ height: 20, width: 20, resizeMode: "contain" }}
                source={require("../images/heart.png")}
              />
            </Pressable>
            <Pressable
              style={{
                marginTop: 30,
                width: "80%",
                backgroundColor: "#0BCE83",
                borderRadius: 5,
                flexDirection:'row',
                justifyContent:"center",
                alignItems:'center'
              }}
            >
              <Image
                style={{ height: 20, width: 20, resizeMode: "contain", marginRight:5 }}
                source={require("../images/shopping-cart.png")}
              />
              <Text
                style={{
                  textAlign: "center",
                  paddingVertical: 10,
                  color: "white",
                  fontSize: 15,
                }}
              >
                order now
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: 700,
    backgroundI: "#A259FF",
  },
  delivery: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 420,
    padding: 20,
  },
  imgContainer: {
    height: 300,
    flex: 1,
  },
  image: {
    height: 300,
  },
});
