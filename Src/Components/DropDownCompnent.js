import { StyleSheet, Dimensions, View } from 'react-native'
import React, { useState } from 'react'

import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Dropdown } from 'react-native-element-dropdown';
import { connect } from 'react-redux';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];

function DropDownCompnent(props) {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={props?.Course?.CategoryName}
            maxHeight={300}
            labelField="name"
            valueField="value"
            placeholder={!isFocus ? `${props.mainTitle}` : '...'}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                setIsFocus(false);
            }}
        />
    )
}

const mapStateToProps = ({ Course }) => ({
    Course,
})

export default connect(mapStateToProps, {
})(DropDownCompnent)

const styles = StyleSheet.create({
    dropdown: {
        height: 35,
        width: Dimensions.get('screen').width / 3.75,
        backgroundColor: "white",
        elevation: 5,
        paddingHorizontal: 8,
        marginVertical: 15,
        marginHorizontal: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        color: "black",
        fontSize: heightPercentageToDP('1.5%'),
    },
    placeholderStyle: {
        fontSize: heightPercentageToDP('1.5%'),
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: heightPercentageToDP('1.1%'),
        color: 'black'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: heightPercentageToDP('1.5%'),
        color: 'black'
    },
})