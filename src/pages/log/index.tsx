import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import avatar1 from '@/assets/image/1.jpg'
import avatar2 from '@/assets/image/2.jpeg'
import avatar3 from '@/assets/image/3.gif'
import avatar4 from '@/assets/image/4.jpeg'

import './index.scss'

interface Props {
}

interface State {
}

class Index extends Component<Props, State> {


  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='gallery'>
        <View className='item'>
          <Image className='img' src={avatar1}></Image>
          <View className='text'>一只小狐狸</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src={avatar2}></Image>
          <View className='text'>头发稀疏眼神犀利的中年男子</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src={avatar3}></Image>
          <View className='text'>像猪一样可爱的猫</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src={avatar4}></Image>
          <View className='text'>一只机制的猫</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src={avatar4}></Image>
          <View className='text'>一只机制的猫</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src={avatar4}></Image>
          <View className='text'>一只机制的猫</View>
          <View className='num'>23人表态</View>
        </View>
      </View>
    )
  }
}

export default Index
