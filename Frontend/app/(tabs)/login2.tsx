import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Keyboard, TouchableWithoutFeedback, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OTPInput = () => {
  const [otp, setOtp] = useState<string>('');
  const [activeInput, setActiveInput] = useState<number>(0);
  const [caretHidden, setCaretHidden] = useState<boolean>(true);
  const navigation = useNavigation();
  const inputs = Array(6).fill(0).map((_, i) => useRef<TextInput>(null));
  const fadeAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true // Add this line for performance optimization
      }
    ).start();
  }, [fadeAnim]);


  const handleOtpChange = (text: string, index: number) => {
    if (/^\d*$/.test(text) && text.length <= 1) {
      if (text.length === 1) {
        const newOtp = otp.slice(0, index) + text + otp.slice(index + 1);
        setOtp(newOtp);
        if (index < 5) {
          inputs[index + 1].current?.focus();
        }
      } else if (text.length === 0 && index > 0) {
        const newOtp = otp.slice(0, index - 1) + '' + otp.slice(index);
        setOtp(newOtp);
        inputs[index - 1].current?.focus();
      }
    }
    if (/^\d*$/.test(text) && text.length === 6) {
      setOtp(text); // Cập nhật giá trị của OTP
      Keyboard.dismiss(); // Ẩn bàn phím khi nhập đủ 6 số
    }
  };


  useEffect(() => {
    return () => {
      setOtp(''); // Xóa giá trị OTP khi component unmount
    };
  }, []);


  const handleResendOTP = () => {
    // Gửi lại mã OTP
    Alert.alert('Thông báo', 'Mã OTP đã được gửi lại.');
  };


  const handleConfirmOTP = () => {
    // Xác nhận mã OTP
    if (otp.length === 6) {
      Alert.alert(
        'Thông báo',
        `Xác nhận mã OTP ${otp} thành công.`,
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('createNewAcc'); // Chuyển hướng sau khi người dùng ấn OK
            },
          },
        ]
      );
      Keyboard.dismiss();
    } else {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ 6 số OTP.');
    }
  };


  const handleBackPress = () => {
    navigation.navigate('login');
  };


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/loginotp.jpg')}
          style={styles.image}
        />
        <Text style={styles.title}>Nhập Mã OTP</Text>
        <Text style={styles.subtitle}>Nhập 6 số OTP được gửi về số điện thoại</Text>
        <Text style={styles.phoneNumber}>+84 9xx 8xx 6xx</Text>
        <View style={styles.otpContainer}>
          {inputs.map((input, index) => (
            <TextInput
              key={index}
              ref={input}
              style={[styles.otpInput, activeInput === index && styles.activeInput]}
              keyboardType="numeric"
              maxLength={1}
              onFocus={() => {
                setActiveInput(index);
                setCaretHidden(false); // Hiển thị trỏ khi ô nhập được chọn
              }}
              onBlur={() => {
                setCaretHidden(true); // Ẩn trỏ khi mất focus
              }}
              caretHidden={caretHidden} // Ẩn trỏ nếu không phải ô nhập hiện đang được chọn
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.resendButton} onPress={handleResendOTP}>
          <Text style={styles.resendText}>Gửi lại mã</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOTP}>
          <Text style={styles.confirmButtonText}>Xác Nhận</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 15,
  },
  backButtonText: {
    color: '#CFAE78',
    fontSize: 35,
  },
  image: {
    width: '70%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#6A6A6A',
  },
  phoneNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 43,
    height: 43,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeInput: {
    borderColor: '#CFAE78',
  },
  resendButton: {
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginBottom: 20,
  },
  resendText: {
    color: '#B34242',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: '#CFAE78',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 5,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default OTPInput;
