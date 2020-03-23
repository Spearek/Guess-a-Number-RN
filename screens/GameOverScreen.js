import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

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
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderBottomColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: "center",
        fontSize: 18
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    summaryContainer: {
        marginVertical: 10,
        marginHorizontal: 30,
    }

})

export default GameOverScreen;