import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapHomeScreen from '../../map/MapHomeScreen';
import FeedHomeScreen from '../../feed/FeedHomeScreen';
import CalendarHomeScreen from '../../calendar/CalendarHomeScreen';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MapHome" component={MapHomeScreen} />
      <Drawer.Screen name="FeedHome" component={FeedHomeScreen} />
      <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
