import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from './LessonData';
import lessonbg from '../images/lessonbg.jpg';



export default function Contents() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            {data.map((item) => {
                return (
                    <View style={styles.event} key={data.indexOf(item)}>
                        <TouchableOpacity onPress={() => navigation.navigate({ name: item.slug })}>
                            <ImageBackground source={lessonbg} style={styles.eventImage}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 35, fontFamily: 'Tomatoes' }}>{item.number}</Text>
                            </ImageBackground>
                            <Text style={{ fontSize: 25, margin: 5, marginLeft: 15 }}>{item.title}</Text>
                            <Text style={{ fontSize: 14, marginLeft: 15, color: '#565656' }}>{item.date}</Text>
                            <Text style={{ fontSize: 15, margin: 27, marginLeft: 15, marginTop: 10 }}>{item.summary}</Text>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
event: {
    height: 'auto',
    alignSelf: 'center',
    backgroundColor: '#FDFCFA',
    marginBottom: 5,
    marginTop: 20,
    paddingBottom: 20,
    width: '95%'
  },
  eventImage: {
    alignSelf: 'stretch',
    resizeMode: 'contain',
    height: 210,
    width: 'auto',
    justifyContent: 'center'
  }
});