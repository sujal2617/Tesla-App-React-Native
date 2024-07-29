import React from 'react';
import { Text, View ,ImageBackground} from 'react-native';
import styles from'./styles';
import StyledButton from '../StyledButton';

const Caritom = (props) => {
    return(
        <View style={styles.carContainer}>

        <ImageBackground 
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>MODEL S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <View style={styles.buttonContainer}> 
        <StyledButton 
        type="primary" 
        content={"Custom order"} 
        onPress={() => {
          console.warn("Custom order was pressed");
        }}
        />

<       StyledButton 
        type="secondary" 
        content={"Existing Inventory"} 
        onPress={() => {
          console.warn("Existing Inventory was pressed");
        }}
        />
        
        </View>

      </View>
    );
}


export default Caritom;