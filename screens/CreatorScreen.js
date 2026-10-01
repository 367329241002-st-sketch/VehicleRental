import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../styles/styles';

export default function CreatorScreen() {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>ผู้จัดทำโปรเจกต์</Text>
        <Image source={require('../assets/photo.jpg')} style={styles.profileImage} />
        <View style={styles.memberCard}>
          <Text style={styles.memberTitle}>สมาชิก</Text>
          <Text style={styles.memberText}> นาย กันตพงศ์ พูลสวัสดิ์ 002 </Text>
        </View>
      </View>
    </ScrollView>
  );
}