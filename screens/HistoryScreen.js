import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

export default function HistoryScreen({ rentals }) {
  if (!rentals || rentals.length === 0) {
    return (
      <View style={[styles.body, { justifyContent: 'center', alignItems: 'center' }]}>
        <Ionicons name="car-sport-outline" size={64} color="#CBD5E1" />
        <Text style={{ marginTop: 12, fontSize: 16, color: '#64748B' }}>ยังไม่มีรายการเช่าในขณะนี้</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>การเช่าของฉัน</Text>
        {rentals.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardBody}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.shopName}>{item.vehicleName}</Text>
                <Text style={{ color: '#16A34A', fontWeight: 'bold', fontSize: 13 }}>✓ เช่าสำเร็จ</Text>
              </View>
              
              <Text style={{ fontSize: 14, color: '#334155', marginTop: 4 }}>
                ผู้เช่า: <Text style={{ fontWeight: 'bold' }}>{item.customerName}</Text> ({item.phone})
              </Text>
              <Text style={{ fontSize: 14, color: '#334155', marginTop: 2 }}>
                ระยะเวลา: <Text style={{ fontWeight: 'bold' }}>{item.days} วัน</Text>
              </Text>
              
              <View style={[styles.priceBadge, { marginTop: 10, backgroundColor: '#DCFCE7' }]}>
                <Text style={[styles.priceText, { color: '#15803D' }]}>
                  ราคารวม: {item.totalPrice.toLocaleString()} บาท
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}