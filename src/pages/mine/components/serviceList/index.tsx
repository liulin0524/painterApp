import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtButton , AtIcon,AtMessage } from 'taro-ui'
import icon from '@/assets/image/mine/icon_goto@2x.png'
import Taro from '@tarojs/taro'

import './index.scss'


interface State {
	
}


class serviceList extends Component<State> {
	readonly state: Readonly<State> = {
		
	}


	// 点击
	handleClick(type) {
		switch (type) {
			case 'buy':
				Taro.navigateTo({ url: '/pages/buy/index' })
				break
			case 'record':
				Taro.navigateTo({ url: '/pages/record/index' })
				break
			case 'log':
				Taro.navigateTo({ url: '/pages/log/index' })
				break
			default:
				Taro.atMessage({
					'message': '正在开发中',
				})
			
		}
	}

	render() {
		return (
			<View className='mine-service-list'>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'buy')}>
						<AtIcon prefixClass='icon' value='msg' size='30' className='icon'></AtIcon>
						<View className='item-text'>
						订购
						</View>
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'record')}>
						<AtIcon prefixClass='icon' value='item' size='30' className='icon'></AtIcon>
						<View className='item-text'>记录</View>
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'log')}>
						<AtIcon prefixClass='icon' value='item' size='30' className='icon'></AtIcon>
						<View className='item-text'>创作记录</View>
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'identity')}>
						<AtIcon prefixClass='icon' value='vip' size='30' className='icon'></AtIcon>
						<View className='item-text'>
							常见问题
						</View>
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'feedback')}>
						<AtIcon prefixClass='icon' value='list' size='30' className='icon'></AtIcon>
						意见反馈
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'coupon')}>
						<AtIcon prefixClass='icon' value='list' size='30' className='icon'></AtIcon>
						联系客服
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item' onClick={this.handleClick.bind(this, 'coupon')}>
						<AtIcon prefixClass='icon' value='list' size='30' className='icon'></AtIcon>
						关于
						<Image className='go' src={icon} />
					</View>
				</View>
				<View className='list-item'>
					<View className='handle-item'>
						<AtIcon prefixClass='icon' value='share' size='30' className='icon'></AtIcon>
						分享好友
						<Image className='go' src={icon} />
						<AtButton className='share-button' openType='share'></AtButton>
					</View>
				</View>
				<AtMessage />
			</View>
		)
	}
}

export default serviceList
