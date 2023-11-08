import { Component, PropsWithChildren } from 'react'
import { View,Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
// import avatar1 from '@/assets/image/1.jpg'


// import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'


export default class Index extends Component<PropsWithChildren,State> {
  readonly state: Readonly<State> = {
		
	}
  
  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='gallery'>
        <View className='item'>
          <Image className='img' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0f9fac4-b62c-4d32-86c1-550ca0c5cb24%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701845155&t=7355cd24002c15dbb987e7086f6be5d3'></Image>
          <View className='text'>一只小狐狸</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img'src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0f9fac4-b62c-4d32-86c1-550ca0c5cb24%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701845155&t=7355cd24002c15dbb987e7086f6be5d3' ></Image>
          <View className='text'>头发稀疏眼神犀利的中年男子</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0f9fac4-b62c-4d32-86c1-550ca0c5cb24%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701845155&t=7355cd24002c15dbb987e7086f6be5d3'></Image>
          <View className='text'>像猪一样可爱的猫</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0f9fac4-b62c-4d32-86c1-550ca0c5cb24%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701845155&t=7355cd24002c15dbb987e7086f6be5d3'></Image>
          <View className='text'>一只机制的猫</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0f9fac4-b62c-4d32-86c1-550ca0c5cb24%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701845155&t=7355cd24002c15dbb987e7086f6be5d3'></Image>
          <View className='text'>一只机制的猫</View>
          <View className='num'>23人表态</View>
        </View>
        <View className='item'>
          <Image className='img' src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fb0f9fac4-b62c-4d32-86c1-550ca0c5cb24%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701845155&t=7355cd24002c15dbb987e7086f6be5d3'></Image>
          <View className='text'>一只机制的猫</View>
          <View className='num'>23人表态</View>
        </View>
      </View>
    
    )
  }
}
