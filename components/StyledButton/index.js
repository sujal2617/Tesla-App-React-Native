import React  from 'react';
import { Text, View ,Pressable} from 'react-native';
import styles from './styles';

const StyleButton = (props) => {
    return (
        <View>
            <Pressable
            style={styles.button}
            onPress={() =>{
                console.warn('hay there')
            }}
            >
                <text>custom order</text>
            </Pressable>
        </View>
    );
};

export default StyleButton;
