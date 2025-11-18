import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import OpenRolesScreen from './screens/OpenRolesScreen';
import CareerTapasScreen from './screens/CareerTapasScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
        <Tab.Screen name="Open Roles" component={OpenRolesScreen} />
        <Tab.Screen name="Career Tapas" component={CareerTapasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
