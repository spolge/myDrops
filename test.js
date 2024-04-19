import { Text, View } from "react-native"
import Detail from "./detail"


export default function Test () {
  
  const LINKS = [{id:1,text:'Hello'},{id:2,text:'World'},{id:3,text:'Magic'},{id:4,text:'Sam'}]

  return(
    <View>
      {LINKS.map((data) => <Detail key = {data.id} text = {data.text}/>)}
    </View>
    

  )
}