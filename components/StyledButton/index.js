import React from 'react';
import { View, Text, ImageBackground, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
    const onPress = props.onPress;

    return (
        <View style={styles.container}>
            <Pressable 
            style={styles.button}
            onPress={()=> onPress()}
            >
                <Text style={styles.text}>Buy Now</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;