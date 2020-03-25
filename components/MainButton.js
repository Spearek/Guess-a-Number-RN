import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';


import colors from '../constants/colors';

const MainButton = props => {

    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.btnContainer}>
            <ButtonComponent
                activeOpacity={0.6}
                onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.btnText}>
                        {props.children}
                    </Text>
                </View>
            </ButtonComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    btnText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18

    },
    btnContainer: {
        borderRadius: 25,
        overflow: 'hidden'
    }

})

export default MainButton;