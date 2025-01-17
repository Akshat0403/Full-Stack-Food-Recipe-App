import { StyleSheet} from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from 'react-native-responsive-screens';
import {UserIcon} from 'react-native-heroicons/outline';
import {BellIcon} from 'react-native-heroicons/outline';
import { Image } from 'react-native';
import { TextInput } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import Categories from './Categories';
import axios from 'axios';
import { useState } from 'react';
import Recipes from './Recipes';










export default function HomeScreen(){
  
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Beef');
    const [categories, setCategories] = useState([]);
    const [meals, SetMeals] = useState([]);

   
    useEffect(() => {
        getCategories();
        getRecipes();
    }, []);

    const handleChangeCategory = category => {
        setActiveCategory(category);
        getRecipes(category);
        SetMeals([]);
    }


    const getCategories = async () => {
        try{
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            if(response && response.data){
                setCategories(response.data.categories);
            }
        }
        catch(err){
            console.log('error', err.manage);
        }
    }

    const getRecipes = async (category = "Beef") => {
        try{
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
            if(response && response.data){
                SetMeals(response.data.meals);
            }
        }
        catch(err){
            console.log('error', err.manage);
        }
    }

    
    
    return (
        <View className = 'flex-1 bg-white'>
            <StatusBar style = 'dark'/>
            <ScrollView
                showsVerticalScrollIndicator = {false}
                contentContainerStyle = {{}}
                className = 'space-y-6 pt-3'
            >
                {/* User Profile and Bell Icon*/}   
                <View className = 'mx-4 flex-row justify-between items-center mb-2'>
                    <Image source = {require('../Images/UserImage.jpeg')} style = {{height: hp(5), width: hp(5)}}/>
                    <BellIcon size = {hp(4)} color = 'gray'/>
                </View>

                {/* Greetings and punchline*/}
                <View className = 'mx-2 space-y-2 mb-2'>
                    <Text style = {{fontSize: hp(2.0)}} className = 'text-neutral-600'>
                        Hello Akshat
                    </Text>
                    <View>
                        <Text style = {{fontSize: hp(3.8)}} className = 'font-semibold text-neutral-600'>
                            Make your own Food
                        </Text>
                    </View>
                    <Text style = {{fontSize: hp(3.8)}} className = 'font-semibold text-neutral-600'>
                        stay at <Text className = 'text-amber-400'>home</Text>
                    </Text>
                </View>


                {/* Search Bar*/}
                <View className = 'mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]'>
                    <TextInput 
                        placeholder='Search any Recipe'
                        placeholderTextColor={'gray'}
                        style = {{fontSize: hp(1.7)}}
                        className = 'flex-1 text-base mb-1 pl-3 tracking-wider'
                    />
                    <View className = 'bg-white rounded-full p-3'>
                        <MagnifyingGlassIcon size = {hp(2.5)} strokeWidth = {3} color = 'gray' />
                    </View>
                </View>

                {/* Categories */}
                <View>
                    { categories.length>0 && <Categories categories = {categories} activeCategory = {activeCategory} handleChangeCategory = {handleChangeCategory} /> }
                </View>


                {/* Recipes */}
                <View>
                    <Recipes meals = {meals} categories = {categories} />
                </View>
            </ScrollView>
        </View>
  );
};


const styles = StyleSheet.create({});