import React from 'react';
import { View, Text } from 'react-native';

const styles = {
 textStyle: {
  fontSize: 24,
  color:'white',
  fontWeight: 'bold',
 },
 headerStyle: {
  backgroundColor: '#1280F5',
  justifyContent: 'center',
  alignItems: 'center',
        height: 60,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
 }
};

const Header = (props) => {
    const { textStyle, headerStyle } = styles;
    return (
        <View style={headerStyle}>
            <Text style={textStyle}>{props.textHeader}</Text>
        </View>
    );
};

export default Header;