import { Component, PropsWithChildren } from 'react'
import { View } from '@tarojs/components'

import './index.scss'



export default class Index extends Component<PropsWithChildren> {


  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='gallery'>
       创作
      </View>
    )
  }
}
