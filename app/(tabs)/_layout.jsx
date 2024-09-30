import React from 'react';

import {Image, Text, View } from 'react-native'
import { Tabs, Redirect} from 'expo-router';

import { icons } from '../../constants'


const TabIcon = ({ icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold': 'font-pregular' }text-xs`}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#E0B0FF',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#EEEEEE',
                    borderTopWidth: 1,
                    borderTopColor: '#E6E6FA' ,
                    height: 100
                }
            }}
        >
            
          <Tabs.Screen
            name="home"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon={icons.home}
                    color={color}
                    name="Home"
                    focused={focused}/>
                )
            }}
          />
          <Tabs.Screen
            name="buddy"
            options={{
                title: 'Buddy',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon={icons.bookmark}
                    color={color}
                    name="Buddy"
                    focused={focused}/>
                )
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused}) => (
                    <TabIcon
                    icon={icons.profile}
                    color={color}
                    name="Profile"
                    focused={focused}/>
                )
            }}
          />
        </Tabs>
    </>

  )
}

export default TabsLayout

