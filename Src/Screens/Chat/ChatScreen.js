import { RefreshControl, Text, View, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../../Components/Header'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { PROFILE } from '../../Confiq/StaticImages'
import { ChatHistory } from '../../Store/Actions/ChatAction'
import { connect } from 'react-redux'

const data =
    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]

function ChatScreen(props) {

    useEffect(() => {
        props?.ChatHistory()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text style={{ color: 'black', marginHorizontal: 10, fontSize: heightPercentageToDP('1.8%'), fontWeight: "bold", marginBottom: 10 }}>Chatting History</Text>

                <View style={{ flex: 1 }}>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={data}
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={() => props.ChatHistory()}
                            />
                        }
                        contentContainerStyle={{ paddingBottom: 20 }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => props.navigation.navigate('ChattingWithPerson')}
                                    key={index} style={{ flexDirection: "row", paddingVertical: 15, borderBottomColor: '#DDDEDE', borderBottomWidth: 1, borderRadius: 10, padding: 10, marginHorizontal: 5 }}>
                                    <Image source={PROFILE} style={{ resizeMode: 'cover', borderRadius: 50, height: 50, width: 50 }} />
                                    <View style={{ width: Dimensions.get('screen').width / 1.6, marginLeft: 20, }}>
                                        <Text style={{ color: "#717070", fontSize: heightPercentageToDP('1.5%'), fontWeight: 'bold' }}>{"Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam"} </Text>
                                        <Text style={{ marginVertical: 5, color: "#A3A5A6", fontSize: heightPercentageToDP('1.3%') }}>
                                            30 minutes ago</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        </View >
    )
}

const mapStateToProps = ({ Chat }) => ({
    Chat
})

export default connect(mapStateToProps, {
    ChatHistory
})(ChatScreen)