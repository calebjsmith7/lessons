import React from "react";
import { 
    SafeAreaView,
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground,
    ScrollView,
    Dimensions
 } from "react-native";
import homebg from '../images/homebg1.png';
import second from '../images/second.png';
import third from '../images/third.png';
import fourth from '../images/fourth.png';

const Home = () => {
    return(
        <ScrollView>
        <View style={styles.container}>
          <Image source={homebg} style={styles.first}>
          </Image> 
        </View>
        <View style={styles.container}>
          <Image source={second} style={styles.first}>
          </Image> 
        </View>
        <View style={styles.container}>
          <Image source={third} style={styles.first}>
          </Image> 
        </View>
        <View style={styles.container}>
          <Image source={fourth} style={styles.first}>
          </Image> 
        </View>
      </ScrollView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    first: {
      alignSelf: 'flex-start',
      resizeMode: 'cover',
      minHeight: 600,
      height: Dimensions.get('window').height - 200,
      width: Dimensions.get('window').width,
      flex: 1
    }
  });

export default Home;