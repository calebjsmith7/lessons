import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Contents from './components/Contents';
import Resources from './components/Resources';
import More from './components/More';
import logo from './images/lp-logo.png';
import { data } from './components/LessonData';
import LessonTemplate from './components/LessonTemplate';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
Ionicons.loadFont().then();



const App = () => {


  return (
    <NavigationContainer>
      <SafeAreaView style={{backgroundColor:"#1e2427"}}>
        <View style={styles.container}>
          <Image source={logo} style={styles.header} />
        </View>
      </SafeAreaView>
      <MyStack/>
    </NavigationContainer>
  );
};


function MyStack() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyTabs" component={MyTabs} />
      {data.map((item) => {
        return (
        <Stack.Screen name={item.slug} component={LessonTemplate} key={data.indexOf(item)} />
        );
      })}
    </Stack.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName={Home} screenOptions={{tabBarStyle: { backgroundColor: '#1e2427' }, tabBarBadgeStyle: { textColor: '#FAF9F6' }, headerShown: false, tabBarActiveTintColor: 'white'}}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="home" color="#FAF9F6" size={30}/>
          ),
      }}/>
      <Tab.Screen name="Contents" component={Contents} options={{
          tabBarLabel: 'Contents',
          tabBarIcon: () => (
            <Ionicons name="bookmark" color="#FAF9F6" size={30}/>
          ),
      }}/>
      <Tab.Screen name="Resources" component={Resources} options={{
          tabBarLabel: 'Resources',
          tabBarIcon: () => (
            <Ionicons name={"library"} color="#FAF9F6" size={30}/>
          ),
      }}/>
      <Tab.Screen name="More" component={More} options={{
          tabBarLabel: 'More',
          tabBarIcon: () => (
            <Ionicons name="layers" color="#FAF9F6" size={30}/>
          ),
      }}/>
    </Tab.Navigator>
  );
}

//Tab Nav screenOptions={{ tabBarStyle: { backgroundColor: 'black' }, tabBarBadgeStyle: { textColor: '#FAF9F6' }, headerShown: false }}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2427',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 100,
    width: 340,
    marginTop: 7,
    marginBottom: 7,
    resizeMode: 'contain'
  },
});

export default App;
