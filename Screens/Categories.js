import { View } from 'react-native';
import { Text } from 'react-native';
import React from 'react';
import {CategoryData} from './constant';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from 'react-native-responsive-screens';
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';
import { FadeIn } from 'react-native-reanimated';
import { FadeOut } from 'react-native-reanimated';
import { FadeOutDown } from 'react-native-reanimated';
import { CachedImage } from './CachedImage';




export default function Categories({categories, activeCategory, handleChangeCategory}) {
  return (
    <Animated.View entering={FadeInDown.duration(500).springify()}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator = {false}
        className = 'space-x-4'
        contentContainerStyle = {{paddingHorizontal: 15}}
      >
        {
          categories.map((cat, index) => {
            let isActive = cat.strCategory == activeCategory;
            let activeButtonClass = isActive? 'bg-amber-400': 'bg-black/10';
            return(
                <TouchableOpacity
                  key = {index}
                  onPress={() => handleChangeCategory(cat.strCategory)}
                  className = 'flex items-center space-y-1'
                >
                  <View
                    className = {'rounded-full p-[6px] '+ activeButtonClass}
                  >
                      <CachedImage 
                        uri = {cat.strCategoryThumb}
                        style = {{width: hp(6), height: hp(6)}}
                      />
                  </View>
                  <Text className = 'text-neutral-600' style = {{fontSize: hp(1.6)}}>
                      {cat.strCategory}
                  </Text>
                </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </Animated.View>
  )
}