import React from 'react';
import { Image, Text, View, Share, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import BackButton from '../components/backButton';
import { data } from '../components/LessonData';
import YoutubePlayer from 'react-native-youtube-iframe';
import Back from './back';
import Forward from './forward';
import More from './More';

export default function LessonTemplate({ route }) {
    let id;
    let max = data.length;
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <BackButton />
            {data.map((item) => {
                if (item.slug == route.name) {
                    id = parseInt(item.slug);

                    return (
                        <ScrollView style={{ width: 370, marginLeft: 'auto', marginRight: 'auto', marginTop: 20, height: 'auto' }} key={data.indexOf(item)}>
                            <YoutubePlayer
                                height={230}
                                videoId={item.youtube}
                                allowsFullscreenVideo={true}
                            />
                            <Text style={{ fontSize: 18, marginLeft: 10 }}>{item.title}</Text>
                            <Text style={{ marginLeft: 10, margin: 8, fontSize: 17 }}>{item.fulltext}</Text>
                        </ScrollView>
                    );
                }
            })
            }
            <View style={styles.lessonNav}>
                {id > 1 ? <Back previous={id - 1} /> : null}
                {id < max ? <Forward next={id + 1} /> : <Forward next={"More"} />}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    event: {
        height: 'auto',
        alignSelf: 'center',
        backgroundColor: '#FDFCFA',
        marginBottom: 5,
        marginTop: 20,
        paddingBottom: 20

    },
    eventImage: {
        alignSelf: 'stretch',
        resizeMode: 'contain',
        height: 210,
        width: 370
    },
    lessonNav: {
        height: 110,
        width: Dimensions.get('window').width,
        backgroundColor: '#1e2427',
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10
    }
});