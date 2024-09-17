import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const DriveBuddy = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Drive Buddy!</Text>
      <Link href='/home' style={{color: 'blue'}}>Go to Home</Link>
    </View>
  )
}

export default DriveBuddy

