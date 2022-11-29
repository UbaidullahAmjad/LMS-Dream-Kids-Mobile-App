import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    ScrollView,
} from 'react-native';
import { PROFILE } from '../../Confiq/StaticImages'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

const chat_data = [
    { id: 1, name: 'Hi John, how you' },
    { id: 2, name: 'how you' },
    { id: 3, name: 'how you' },
    { id: 4, name: 'Hi John, how you' },
    { id: 5, name: 'Hi John, how you' },
    { id: 6, name: 'how you' },
    { id: 7, name: 'how you' },
    { id: 8, name: 'Hi John, how you' },
    { id: 9, name: 'how you' },
    { id: 10, name: 'how you' },
    { id: 11, name: 'how you' },
    { id: 12, name: 'Hi John, how you' },
];

export default function ChattingWithPerson(props) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        );
    }, []);

    return (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    paddingTop: 20,
                    paddingHorizontal: 10,
                    paddingBottom: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#447DC0',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <MaterialIcons onPress={()=> props.navigation.goBack()} name="arrow-back-ios" color='white' size={25} />

                    <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                        <Image
                            source={PROFILE}
                            style={{ height: 50, width: 50, borderRadius: 50, borderColor: "white", borderWidth: 2 }}
                        />
                        <View
                            style={{
                                flexDirection: 'column',
                                marginLeft: 10,
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}>
                                {'John Smith'}
                            </Text>

                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 12,
                                }}>
                                {'last seen today at 13:25'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <GiftedChat
                renderMessage={() => {
                    return (
                        <ScrollView style={{ paddingVertical: 10, backgroundColor: "white", flex: 1 }}>
                            {chat_data.map((item, index) => {
                                return (
                                    <View key={index}>
                                        {index % 2 == 0 ? (
                                            <ImageBackground
                                                // tintColor='white'
                                                source={require('./ChatBoxImages/gray_bx_color.png')}
                                                style={{
                                                    height: 60,
                                                    width: 200,
                                                    marginHorizontal: 10,
                                                }}>
                                                <Text
                                                    style={{
                                                        margin: 14,
                                                        color: "black"
                                                    }}>
                                                    Hi John, how you
                                                </Text>
                                                <Text
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: 27,
                                                        right: 15,
                                                        fontSize: 8,
                                                        color: "black"
                                                    }}>
                                                    {'12:30 pm'}
                                                </Text>
                                            </ImageBackground>
                                        ) : (
                                            <ImageBackground
                                                tintColor="#C9E3BB"
                                                source={require('./ChatBoxImages/White_Box_color.png')}
                                                style={{
                                                    height: 60,
                                                    width: 220,
                                                    marginHorizontal: 10,
                                                    alignSelf: 'flex-end',
                                                }}>
                                                <Text
                                                    style={{
                                                        margin: 10,
                                                        color: "black"
                                                    }}>
                                                    {item.name}
                                                </Text>
                                                <Text
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: 30,
                                                        right: 15,
                                                        fontSize: 8,
                                                        color: "black"
                                                    }}>
                                                    {'12:30 pm'}
                                                </Text>
                                            </ImageBackground>
                                        )}
                                    </View>
                                );
                            })}
                        </ScrollView>
                    );
                }}
                renderComposer={() => {
                    return (
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                height: 60,
                                marginBottom: 10,
                                width: '100%'
                            }}>
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    elevation: 5,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '75%',
                                    marginVertical: 5,
                                    marginHorizontal: 10,
                                    borderRadius: 5,
                                }}>
                                <TouchableOpacity style={{ marginLeft: 5 }}>
                                    <Image
                                        source={require('./ChatBoxImages/Smile.png')}
                                        style={{ tintColor: 'black', height: 25, width: 25 }}
                                    />
                                </TouchableOpacity>
                                <TextInput
                                    placeholder={'Type a message'}
                                    placeholderTextColor={'silver'}
                                    style={{
                                        width: '70%',
                                        height: 45,
                                        color: 'black',
                                        fontFamily: 'Montserrat-Regular',
                                        fontSize: 14,
                                    }}
                                />
                                <TouchableOpacity style={{ marginLeft: -30 }}>
                                    <Image
                                        source={require('./ChatBoxImages/Media.png')}
                                        style={{ tintColor: 'black', height: 26, width: 26 }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                    <Image
                                        source={require('./ChatBoxImages/camera.png')}
                                        style={{ tintColor: 'black', height: 24, width: 24 }}
                                    />
                                </TouchableOpacity>
                            </View>



                            <TouchableOpacity style={{ marginLeft: 10, backgroundColor: "#117DC0", borderRadius: 50, padding: 10 }}>
                                <Image
                                    source={require('./ChatBoxImages/audio.png')}
                                    style={{ tintColor: 'white', height: 23, width: 23 }}
                                />
                            </TouchableOpacity>
                        </View>
                    );
                }}
                placeholder={'Message'}
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </>
    );
}
