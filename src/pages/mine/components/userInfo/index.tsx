import { Component } from 'react'
import { View, Image,Text } from '@tarojs/components'
import avatar from '@/assets/image/mine/default_avatar@2x.png'
import icon from '@/assets/image/mine/icon_goto@2x.png'

import './index.scss'

interface State {
}

class Index extends Component<State> {
	readonly state: Readonly<State> = {}

	handleLogin() {
		
	}

	handlePersonalData() {
		
	}

	render() {
		return (
			<View className='at-col'>
					<View className='logo-wrap'>
						<Image className='logo' src={avatar} />
						<View>
							<View className='mess login' onClick={this.handleLogin}>
								请注册/登录
							</View>
						</View>
					</View>
					<View className='intro'>
						剩余创作次数： <Text className='num'>10次</Text>
						<Image className='go' src={icon} />
					</View>
			</View>
		)
	}
}

export default Index
