import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RestaurantsStack from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";
import SearchStack from "./SearchStack";
import TopRestaurantsStack from "./TopRestaurantsStack";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{
            title: "Restaurantes",
          }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          options={{
            title: "Favoritos",
          }}
        />
         <Tab.Screen
          name="topRestaurants"
          component={TopRestaurantsStack}
          options={{
            title: "Top 5",
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          options={{
            title: "Buscar",
          }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          options={{
            title: "Mi Cuenta",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
