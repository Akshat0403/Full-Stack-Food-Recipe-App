import { View} from 'react-native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { CachedImage } from './CachedImage';
import { ScrollView } from 'react-native';
import { widthToDP as wp } from 'react-native-responsive-screens';
import { heightToDP as hp } from 'react-native-responsive-screens';
import { Image } from 'react-native';
import { ChevronDownIcon,ChevronLeftIcon, ClockIcon, FireIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Loading from './Loading';
import YoutubeIframe from 'react-native-youtube-iframe';
import WebView from 'react-native-webview';


export default function RecipeDetails(props) {
    let item = props.route.params;
    const [isFavourite, setIsFavourite] = useState(false);
    const navigation = useNavigation();
    const [meals, SetMeals] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMealData(item.idMeal);
    }, []);

    const getMealData = async (id) => {
        try{
            const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            if(response && response.data){
                SetMeals(response.data.meals[0]);
                setLoading(false);
            }
        }
        catch(err){
            console.log('error', err.manage);
        }
    };


    const ingredientsIndexes = (meals) => {
        if(!meals) return [];
        let indexes = [];
        for (let i = 1; i <= 20; i++){
            if(meals['strIngredient' + i]){
                indexes.push(i);
            }
        }

        return indexes;
    };


    const getYoutubeVideoId = url => {
        const regex = /[?&]v=([^&]+)/;
        const match = url.match(regex);
        if(match && match[1]){
            return match[1];
        }
        return null;
    };

    return (
        <ScrollView
            className = 'bg-white flex-1'
            showsVerticalScrollIndicator = {false}
            contentContainerStyle = {{paddingBottom: 30}}
        >
            <StatusBar style = {"light"} />
            {/* Recipe Image */}
            <View>
                <CachedImage 
                    uri = {item.strMealThumb} 
                    style = {{width: wp(98), height: hp(50), borderRadius: 40, borderBottomLeftRadius: 40, borderBottomRightRadius: 40, marginTop: 4}}
                    sharedTransitionTag = {item.strMeal}
                />
            </View>


            {/* back button */}
            <View className = "w-full absolute flex-row justify-between items-center pt-2">
                <TouchableOpacity onPress={() => navigation.goBack()} className = "p-2 rounded-full bg-white">
                    <ChevronLeftIcon size = {hp(3.5)} strokeWidth={4.5} color = "#fbbf24" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)} className = 'p-2 rounded-full bg-white'>
                    <HeartIcon soze = {hp(3.5)} strokeWidth={4.5} color={isFavourite? 'red': 'gray'} />
                </TouchableOpacity>
            </View>
        
            {/* Meal Description */}
            {
                loading ? (
                    <Loading size = "large" className = 'mt-16' />
                ):(
                    <View className = 'px-4 flex justify-between space-y-4 pt-8'>
                        {/* Name and Area */}
                        <View className = 'space-y-2'>
                            <Text className = 'font-bold flex-1 text-neutral-700' style = {{fontSize: hp(3)}}>
                                {meals?.strMeal}
                            </Text>
                            <Text className = 'font-medium flex-1 text-neutral-500' style = {{fontSize: hp(2)}}>
                                {meals?.strArea}
                            </Text>
                        </View>

                        {/* Misc */}
                        <View className = 'flex-row justify-around'>
                            <View className = 'flex, rounded-full bg-amber-300 p-2'>
                                <View className = 'bg-white rounded-full flex items-center justify-center' style = {{height: hp(6.5), width: hp(6.5)}}>
                                    <ClockIcon size = {hp(4)} strokeWidth={2.5} color = "#525252" />
                                </View>
                                <View>
                                    <Text className = 'font-bold text-neutral-700 ml-4 mt-2' style = {{fontSize: hp(2)}}>
                                        35
                                    </Text>
                                    <Text className = 'ml-3 font-bold text-neutral-600'>
                                        Mins
                                    </Text>
                                </View>
                            </View>
                            <View className = 'flex, rounded-full bg-amber-300 p-2'>
                                <View className = 'bg-white rounded-full flex items-center justify-center' style = {{height: hp(6.5), width: hp(6.5)}}>
                                    <UsersIcon size = {hp(4)} strokeWidth={2.5} color = "#525252" />
                                </View>
                                <View>
                                    <Text className = 'font-bold text-neutral-700 ml-4 mt-2' style = {{fontSize: hp(2)}}>
                                        03
                                    </Text>
                                    <Text className = 'font-bold text-neutral-600'>
                                        Servings
                                    </Text>
                                </View>
                            </View>
                            <View className = 'flex, rounded-full bg-amber-300 p-2'>
                                <View className = 'bg-white rounded-full flex items-center justify-center' style = {{height: hp(6.5), width: hp(6.5)}}>
                                    <FireIcon size = {hp(4)} strokeWidth={2.5} color = "#525252" />
                                </View>
                                <View>
                                    <Text className = 'font-bold text-neutral-700 ml-3 mt-2' style = {{fontSize: hp(2)}}>
                                        103
                                    </Text>
                                    <Text className = 'font-bold text-neutral-600'>
                                        Calories
                                    </Text>
                                </View>
                            </View>
                            <View className = 'flex, rounded-full bg-amber-300 p-2'>
                                <View className = 'bg-white rounded-full flex items-center justify-center' style = {{height: hp(6.5), width: hp(6.5)}}>
                                    <Square3Stack3DIcon size = {hp(4)} strokeWidth={2.5} color = "#525252" />
                                </View>
                                <View>
                                    <Text className = 'font-bold text-neutral-700' style = {{fontSize: hp(2)}}>
                                        
                                    </Text>
                                    <Text className = 'font-bold text-neutral-600 ml-3'>
                                        Easy
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Ingredients */}
                        <View className = 'space-y-4'>
                            <Text style = {{fontSize: hp(2.5)}} className = 'font-bold flex-1 text-neutral-700'>
                                Ingredients
                            </Text>
                            <View className = 'space-y-2 ml-3'>
                                {
                                    ingredientsIndexes(meals).map(i=>{
                                        return(
                                            <View key = {i} className = 'flex-row space-x-4'> 
                                                <View style = {{height: hp(1.5), width: hp(1.5)}} className = 'bg-amber-300 rounded-full' /> 
                                                <View className = 'flex-row space-x-2'>
                                                    <Text className = 'font-bold -mt-2 -ml-2'>{meals['strMeasure' + i]}</Text>
                                                    <Text className = 'font-bold -mt-2'>{meals['strIngredient' + i]}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </View>

                        {/* Instructions */}
                        <View className = 'space-y-4'>
                                <Text style = {{fontSize: hp(2.5)}} className = 'font-bold flex-1 text-neutral-700'>
                                    Instructions
                                </Text>
                                <Text style = {{fontSize: hp(1.6)}} className = ' font-bold text-xl text-neutral-700'>
                                    {meals?.strInstructions}
                                </Text>
                        </View>

                        {/* recipe video */}
                        {
                            meals.strYoutube && (
                                <View>
                                    <Text style = {{fontSize: hp(2.5)}} className = 'font-bold flex-1 text-neutral-700'>
                                        Recipe Video
                                    </Text>
                                    <View>
                                        <YoutubeIframe 
                                            videoId={getYoutubeVideoId(meals.strYoutube)}
                                            height={hp(30)}
                                        />
                                    </View>
                                </View>
                            )
                        }
                    </View>
                )
            }
        </ScrollView>
    );
};