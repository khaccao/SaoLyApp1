import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image,  } from 'react-native';

export default function HomeScreen() {
  const handlePress = () => {
    // Handle the button press here
    alert('');
  };
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>Khoá học
        </Text>
        </View>
      <Text style={styles.headerleft}>Đang học</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <TouchableOpacity onPress={handlePress} style={styles.sectionButton}>
            <Text style={styles.sectionButtonText}>Khóa đã đăng ký</Text>
          </TouchableOpacity>
          <Text style={styles.header1}>Tất cả khoá học</Text>
          <View style={styles.course}>
            <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/385321475_3483756405178502_2999170051770681957_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEFPyErFwdgNQoD6eoJBuZyJjCZ3XB27QomMJndcHbtCoCBuqG_kKsf_9w7_1asdjVq4BU_T1Kq0iVo766_5GgK&_nc_ohc=t_gBz7fGmYwQ7kNvgFABTtt&_nc_ht=scontent.fhan17-1.fna&oh=00_AYAMrLQQJW7s5m2ZsFKmbd88D-mrzOz-uxWGK6ySukk_eg&oe=6650BB18' }} style={styles.courseImage} />
        <View style={styles.courseInfo}>
            <View style={styles.coursebackground}>
                <Text style={styles.courseTitle}>StarBrown (offline)</Text>
                <Text style={styles.courseDetails}>22/05 - 27/05 : 5 buổi</Text>
                <Text style={styles.courseInstructor}>Grand Master: Saoly</Text>
                <Text style={styles.coursePrice}>100.000.000 đ</Text>
                </View>
            </View>
        </View>
          <View style={styles.course}>
            <Image source={{ uri: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/313399256_3249076735313138_8584330859742133610_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFHRB9sfVs9nBQH_b7tLodG4lhO0ziJ9HfiWE7TOIn0d6NJ4MoLRO8lGqyeeAFyT0pFzGUmjiIcw4WJDp8ZudK8&_nc_ohc=vLnufgWcCPIQ7kNvgGSF_1Q&_nc_ht=scontent.fhan17-1.fna&oh=00_AYDEJ4TmJC_rwZMavQ3skiLkSZypeLn6D10A79zYg6cLHw&oe=665097C6' }} style={styles.courseImage} />
            <View style={styles.courseInfo}>
            <View style={styles.coursebackground}>
                <Text style={styles.courseTitle}>L-Strokes</Text>
                <Text style={styles.courseDetails}>22/05 - 27/05 : 5 buổi</Text>
                <Text style={styles.courseInstructor}>Grand Master: Saoly</Text>
                <Text style={styles.coursePrice}>100.000.000 đ</Text>
                </View>
            </View>
        </View>
          {/* Repeat for other courses */}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
 
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  headerleft: {
    fontSize: 20,
    paddingLeft: 9,
  },
  header1: {
    fontSize: 20,
    padding: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  section: {
    margin: 10,
  },
  sectionButton: {
    backgroundColor: '#CFAE78',
    padding: 30,
    marginBottom: 10,
  },
  sectionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  course: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  courseInfo: {
    marginLeft: 10,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  courseInstructor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#000',
  },
  courseImage:{
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 30,
  },
  coursebackground: {
    backgroundColor: '#CFAE78',
    padding: 10,
    width: 305,
    height: 100,
  }
  


});