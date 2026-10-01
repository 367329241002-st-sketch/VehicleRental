import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles, { COLORS } from './styles/styles';
import HomeScreen from './screens/HomeScreen';
import CarScreen from './screens/CarScreen';
import BikeScreen from './screens/BikeScreen';
import HistoryScreen from './screens/HistoryScreen';
import CreatorScreen from './screens/CreatorScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [rentals, setRentals] = useState([]); // เก็บรายการที่เช่าสำเร็จ

  // ฟังก์ชันเพิ่มรายการเช่าใหม่ แล้วเด้งไปหน้า History
  const handleAddRental = (newRental) => {
    setRentals([newRental, ...rentals]);
    setActiveTab('History');
  };

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen onSelectTab={(tab) => setActiveTab(tab)} />;
      case 'Car':
        return <CarScreen onAddRental={handleAddRental} />;
      case 'Bike':
        return <BikeScreen onAddRental={handleAddRental} />;
      case 'History':
        return <HistoryScreen rentals={rentals} />;
      case 'Creator':
        return <CreatorScreen />;
      default:
        return null;
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'Home':
        return 'หน้าแรก';
      case 'Car':
        return 'เช่ารถยนต์';
      case 'Bike':
        return 'เช่ามอเตอร์ไซค์';
      case 'History':
        return 'ประวัติการเช่า';
      case 'Creator':
        return 'ผู้จัดทำ';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{getHeaderTitle()}</Text>
      </View>

      {renderScreen()}

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Home')}>
          <Ionicons
            name={activeTab === 'Home' ? 'home' : 'home-outline'}
            size={20}
            color={activeTab === 'Home' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Home' && styles.activeTabLabel]}>หน้าแรก</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Car')}>
          <Ionicons
            name={activeTab === 'Car' ? 'car' : 'car-outline'}
            size={20}
            color={activeTab === 'Car' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Car' && styles.activeTabLabel]}>รถยนต์</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Bike')}>
          <Ionicons
            name={activeTab === 'Bike' ? 'bicycle' : 'bicycle-outline'}
            size={20}
            color={activeTab === 'Bike' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Bike' && styles.activeTabLabel]}>มอเตอร์ไซค์</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('History')}>
          <Ionicons
            name={activeTab === 'History' ? 'receipt' : 'receipt-outline'}
            size={20}
            color={activeTab === 'History' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'History' && styles.activeTabLabel]}>การเช่าของฉัน</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => setActiveTab('Creator')}>
          <Ionicons
            name={activeTab === 'Creator' ? 'person' : 'person-outline'}
            size={20}
            color={activeTab === 'Creator' ? COLORS.primary : '#888'}
          />
          <Text style={[styles.tabLabel, activeTab === 'Creator' && styles.activeTabLabel]}>ผู้จัดทำ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}