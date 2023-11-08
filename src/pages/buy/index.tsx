import { Component } from 'react'
import { View,Text } from '@tarojs/components'
import { AtTabs, AtTabsPane,AtButton } from 'taro-ui'

import './index.scss'

interface Props {
}

interface State {
	current: number
}

class Index extends Component<Props, State> {
	readonly state: Readonly<State> = {
		current: 0,
	}

	componentDidShow() {
	}
	handleClick (value) {
    this.setState({
      current: value
    })
  }


	render() {
		const tabList = [{ title: '按次购买' }, { title: '按年月购买' }]
		return (
			<View className='buy-wrap'>
				<AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane current={this.state.current} index={0} >
          <View className='buy-content'>
						<View>
							<View className='item'>
								<View className='buy-time'>10次</View>
								<View className='buy-price'>
									<Text className='buy-current'>￥5</Text>
									<Text className='buy-old'>￥5</Text>
								</View>
							</View>
							<View className='item item-active'>
								<View className='buy-time'>20次</View>
								<View className='buy-price'>
									<Text className='buy-current'>￥8</Text>
									<Text className='buy-old'>￥10</Text>
								</View>
							</View>
						</View>
						
						<View className='buy-bottom'>
							<View className='buy-agreement'>开通前请阅读<Text className='blue'> 会员服务协议 </Text></View>
							<AtButton className='buy-button' type='primary'>￥8 立即购买</AtButton>
						</View>
					</View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
				<View className='buy-content'>
						<View className='item item-active'>
							<View className='buy-time'>一个月</View>
							<View className='buy-price'>
								<Text className='buy-current'>￥18</Text>
								<Text className='buy-old'>￥38</Text>
							</View>
						</View>
						<View className='buy-bottom'>
							<View className='buy-agreement'>开通前请阅读<Text className='blue'> 会员服务协议 </Text></View>
							<AtButton className='buy-button' type='primary'>￥18 立即购买</AtButton>
						</View>
					</View>
        </AtTabsPane>
      </AtTabs>
			</View>
		)
	}
}

export default Index
