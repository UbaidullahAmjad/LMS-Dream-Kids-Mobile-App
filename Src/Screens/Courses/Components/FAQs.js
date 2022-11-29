import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { FAQData } from '../../../Store/Actions/CourseAction'

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


function FAQs(props) {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    useEffect(() => {
        props.FAQData()
        console.log("FAQ: ", props?.Course?.CoursesDetail?.course_faq)
    }, [])

    return (
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
    )
}

const mapStateToProps = ({ Course }) => ({
    Course
})


export default connect(mapStateToProps, {
    FAQData
})(FAQs)