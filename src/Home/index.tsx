import  React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Home from "./Home";
import { HomeRoutes } from "../components/Navigations";
import DrawerContent from "./Drawer"
import { TabsScreen } from "./TabsScreen";
const Drawer=createDrawerNavigator<HomeRoutes>();
export const  HomeNavigator=()=>(
  <Drawer.Navigator drawerContent={DrawerContent}>
    <Drawer.Screen name="Home" component={TabsScreen}/>
  </Drawer.Navigator>
)