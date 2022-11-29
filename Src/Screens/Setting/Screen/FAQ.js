import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { List } from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const SECTIONS = [
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
    {
        title: 'Lorem ipsum?',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore  magna aliquam erat volutpat. Ut wisi enim ad',
    },
];

import Header from '../../../Components/Header';

export default function FAQs() {
    const handlePress = () => setExpanded(!expanded);
    const [expanded, setExpanded] = React.useState(true);


    return (
        <View style={{ flex: 1, backgroundColor: "#F3F3F2" }}>
            <Header />
            <List.Section>
                <FlatList keyExtractor={(item, index) => index} data={SECTIONS} renderItem={({ item, index }) => {
                    return (
                        <List.Accordion
                            onPress={() => handlePress()}
                            key={index}
                            title={`${`${index + 1}. Lorem ipsum?`}`}
                            titleStyle={{ color: 'black' }}>
                            <List.Item titleNumberOfLines={5} titleStyle={{ marginHorizontal: 10, fontSize: heightPercentageToDP('1.5%') }} title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad" />
                        </List.Accordion>
                    )
                }} />
            </List.Section>

        </View>
    )
}

const styles = StyleSheet.create({})