import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <BodyText>The Game is Oven hahaha, you get it? OVEN! ;DDD</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    //fadeDuration={300}
                    // source={require('../assets/success.png')}
                    source={{uri: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80'}}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>

            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title="New Game" onPress={props.onRestart} />
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
    }

})

export default GameOverScreen;