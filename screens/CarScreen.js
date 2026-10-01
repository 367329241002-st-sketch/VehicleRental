import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles, { COLORS } from '../styles/styles';

export default function CarScreen({ onAddRental }) {
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [days, setDays] = useState('1');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [lastRentalData, setLastRentalData] = useState(null);

  const cars = [
    {
      id: '1',
      name: 'Toyota Yaris / Ativ (รถเก๋งประหยัดน้ำมัน)',
      location: 'สาขาตัวเมือง & สนามบิน (มีบริการส่งฟรี)',
      priceNum: 800,
      price: 'เริ่มต้น 800 - 1,000 บาท/วัน',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '2',
      name: 'Honda C-RV / SUV 7 ที่นั่ง (สายลุยครอบครัว)',
      location: 'จุดรับรถหน้าสถานีรถไฟ',
      priceNum: 1800,
      price: 'เริ่มต้น 1,800 - 2,500 บาท/วัน',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '3',
      name: 'Ford Mustang / รถสปอร์ตหรู (ถ่ายรูปสายคอนเทนต์)',
      location: 'ย่านใจกลางเมือง (ต้องจองล่วงหน้า)',
      priceNum: 5000,
      price: 'เริ่มต้น 5,000 บาท/วัน',
      image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const handleOpenRental = (car) => {
    setSelectedCar(car);
    setModalVisible(true);
  };

  const handleConfirmRental = () => {
    if (!customerName || !phone) {
      alert('กรุณากรอกชื่อและเบอร์โทรศัพท์ให้ครบถ้วน');
      return;
    }

    const rentDays = parseInt(days) || 1;
    const total = (selectedCar ? selectedCar.priceNum : 0) * rentDays;

    const rentalData = {
      vehicleName: selectedCar?.name,
      image: selectedCar?.image,
      customerName: customerName,
      phone: phone,
      days: rentDays,
      totalPrice: total,
    };

    setLastRentalData(rentalData);
    setModalVisible(false);
    setSuccessModalVisible(true);
  };

  const handleGoToHistory = () => {
    setSuccessModalVisible(false);
    if (lastRentalData) {
      onAddRental(lastRentalData);
    }
    setCustomerName('');
    setPhone('');
    setDays('1');
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.contentContainer}>
        <Text style={styles.pageTitle}>ร้านเช่ารถยนต์แนะนำ</Text>
        {cars.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardBody}>
              <Text style={styles.shopName}>{item.name}</Text>
              <View style={styles.locationRow}>
                <Ionicons name="location-sharp" size={16} color="#E11D48" />
                <Text style={styles.locationText}>{item.location}</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                <View style={styles.priceBadge}>
                  <Text style={styles.priceText}>{item.price}</Text>
                </View>
                <TouchableOpacity style={styles.rentButton} onPress={() => handleOpenRental(item)}>
                  <Text style={styles.rentButtonText}>กดเช่าคันนี้</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Modal กรอกข้อมูล */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>แบบฟอร์มจองเช่ารถยนต์</Text>
            {selectedCar && <Text style={styles.modalSubTitle}>{selectedCar.name}</Text>}

            <Text style={styles.inputLabel}>ชื่อ-นามสกุล ผู้เช่า:</Text>
            <TextInput style={styles.input} placeholder="เช่น นายสมชาย ใจดี" value={customerName} onChangeText={setCustomerName} />

            <Text style={styles.inputLabel}>เบอร์โทรศัพท์:</Text>
            <TextInput style={styles.input} placeholder="เช่น 0812345678" keyboardType="phone-pad" value={phone} onChangeText={setPhone} />

            <Text style={styles.inputLabel}>จำนวนวันที่ต้องการเช่า (วัน):</Text>
            <TextInput style={styles.input} placeholder="1" keyboardType="numeric" value={days} onChangeText={setDays} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
              <TouchableOpacity style={[styles.modalButton, { backgroundColor: '#888' }]} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>ยกเลิก</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, { backgroundColor: COLORS.primary }]} onPress={handleConfirmRental}>
                <Text style={styles.modalButtonText}>ยืนยันการจอง</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal แจ้งเตือนเช่าสำเร็จ */}
      <Modal visible={successModalVisible} animationType="fade" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { alignItems: 'center', padding: 24 }]}>
            <Ionicons name="checkmark-circle" size={64} color="#16A34A" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#16A34A', marginTop: 8 }}>เช่าสำเร็จแล้ว!</Text>
            <Text style={{ fontSize: 14, color: '#64748B', textAlign: 'center', marginTop: 6, marginBottom: 20 }}>
              ระบบบันทึกรายการเช่าเรียบร้อยแล้ว กดปุ่มด้านล่างเพื่อไปดูประวัติการเช่าของคุณได้เลย
            </Text>
            <TouchableOpacity style={[styles.modalButton, { backgroundColor: COLORS.primary, width: '100%' }]} onPress={handleGoToHistory}>
              <Text style={styles.modalButtonText}>ไปที่หน้าการเช่าของฉัน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}