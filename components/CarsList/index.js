import React  from 'react';
import { Text, View, FlatList, Dimensions} from 'react-native';
import Caritom from '../Caritom';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            renderItem={({item}) => <Caritom car={item} />}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('screen').height}
            />
        </View>
    );
};

export default CarsList ;
