import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions } from 'react-native';

import BodyText from '../components/BodyText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <BodyText style={{ fontFamily: 'open-sans-bold', fontSize: 16 }}>The Game is Over!</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    //fadeDuration={300}
                    // source={require('../assets/success.png')}
                    source={{ uri: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80' }}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <View style={styles.summaryContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text> </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>
                New Game
            </MainButton>


        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderBottomColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: "center",
        fontSize: Dimensions.get('window').height < 400? 16 : 20
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    summaryContainer: {
        marginVertical: Dimensions.get('window').height / 40,
        marginHorizontal: 30,
    }

})

export default GameOverScreen;