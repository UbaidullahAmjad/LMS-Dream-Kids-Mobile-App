import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';


export const mystyles = StyleSheet.create({
  mainbackimg: {
    height: hp('30%'),
    width: wp('100%'),
    alignSelf: 'center',
  },
  main2: {
    height: hp('10%'),
    width: wp('80%'),
    alignSelf: 'center',
    marginTop: hp('3%'),
  },
  BottomLargeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('90%'),
    height: hp('7%'),
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#FAB815',
  },
  contentStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
  SignupTextInput: {
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 30,
    height: hp('8%'),
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 15,
    marginBottom: hp('1%'),
    backgroundColor: '#F9F3E8',
  },
  WelcomeBackText: {
    color: '#467EC1',
    fontSize: hp('3%'),
    marginTop: 20,
    fontFamily: 'AvenirLTStd-Roman',
  },
  signInText: {
    color: '#FFFF',
    fontFamily: 'AvenirLTStd-Roman',
    marginTop: 20,
  },

  userNameText: {
    fontFamily: 'AvenirLTStd-Roman',
    color: '#303A42',
    fontSize: hp('1.8%'),
  },
  TextInputt: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,

    color: 'black',
  },
  DontHaveAccounText: {
    color: '#B7BCBC',
    fontSize: hp('1.8%'),
    margin: 3,
    fontFamily: 'Helvetica',
  },
  SignUpText: {
    fontSize: hp('1.8%'),
    color: '#F15F4C',
    marginHorizontal: 4,
    fontFamily: 'Helvetica',
  },

  bottomView: {
    flexDirection: 'row',
    // backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  view: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },

  imageBackground: {
    height: hp('15%'),
    width: wp('30'),
    marginRight: wp('3%'),
    borderRadius: 8,
  },
  DetailView: {
    borderBottomWidth: 1,
    width: wp('90%'),
    color: '#FFFF',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
    alignItems: 'center',
    borderBottomColor: '#1A1A1A',
  },
  DetailText: {
    color: '#FFFF',
    fontFamily: 'FontsFree-Net-SFProDisplay-Regular',
    fontWeight: 'bold',
    fontSize: 17,
  },

  Profileimage: {
    height: 130,
    width: 130,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: 'blue',
    alignSelf: 'center',
  },
  PEmail: {
    color: '#434343',
    fontSize: hp('1.8%'),
  },
  aboutme: {color: '#434343', fontWeight: 'bold', fontSize: hp('3%')},
  aboutmeview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  smalltext: {
    color: '#434343',
    fontSize: hp('2%'),
    fontFamily: 'AvenirLTStd-Roman',
  },
  parentprofile: {
    alignItems: 'center',
    backgroundColor: '#457EC0',
    justifyContent: 'center',
    height: hp('5%'),
    width: wp('33%'),
    borderRadius: hp('3%'),
  },
  cardimage: {
    width: wp('60%'),
    height: hp('16%'),
  },
  card: {
    width: wp('65%'),
    height: hp('29%'),

    flexDirection: 'column',
  },
  fstext: {
    fontSize: hp('1.6%'),
    fontWeight: 'bold',
    color: 'black',
  },
  dropdown: {
    backgroundColor: '#131313',
    borderColor: 'white',
    borderRadius: 0,
  },
});
