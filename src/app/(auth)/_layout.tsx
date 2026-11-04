import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function AuthLayout() {
    ;
    const router=useRouter()
    let isAuth=false;
    useEffect(()=>{
        if(!isAuth){
            router.replace("/(auth)/signup");
        }else{
            router.replace("/(tabs)")
        }
    })
 
    return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
