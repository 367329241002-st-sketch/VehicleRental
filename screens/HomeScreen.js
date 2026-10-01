import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ onSelectTab }) {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>แอปแนะนำบริการเช่ารถเดินทาง</Text>

        <TouchableOpacity style={styles.mainNavCard} onPress={() => onSelectTab('Car')}>
          <Text style={styles.cardIcon}>🚗</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>บริการเช่ารถยนต์</Text>
            <Text style={styles.cardSubtitle}>รวมร้านเช่ารถยนต์ขับเอง รายวัน/รายเดือน</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainNavCard} onPress={() => onSelectTab('Bike')}>
          <Text style={styles.cardIcon}>🛵</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>บริการเช่ารถมอเตอร์ไซค์</Text>
            <Text style={styles.cardSubtitle}>รวมร้านเช่ามอเตอร์ไซค์ ขับขี่คล่องตัว ราคาประหยัด</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}