import { Component } from 'react'
import { View } from '@tarojs/components'
import ServiceList from './components/serviceList/index'
import UserInfo from './components/userInfo/index'

import './index.scss'

interface Props {
}

interface State {
}

class Index extends Component<Props, State> {

	onShareAppMessage() {
		return {
			title: '大画家分享',
			path: '/pages/index/index',
		}
	}

	componentDidShow() {
	}


	render() {
		return (
			<View className='mine-wrap'>
				<UserInfo />
				<ServiceList />
			</View>
		)
	}
}

export default Index
