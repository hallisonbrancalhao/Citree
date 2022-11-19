import { styles } from './navbarStyles';

import React from 'react'
import { View, Image } from 'react-native';

const Navbar = () => {

    return (
        <View style={styles.main}>
            <Image
                style={styles.icon1}
                source={require('../assets/profile_icon.svg')}
            />
            <Image
                style={styles.icon2}
                source={require('../assets/settings.svg')}
            />
            <Image
                style={styles.icon3}
                source={require('../assets/alert_icon.svg')}
                onClick={()=>{console.log('imagem 3')}}
            />
        </View>
    )
}

export default Navbar