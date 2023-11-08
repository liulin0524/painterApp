import { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

interface Props {
}

interface State {
	tableData: Array<any>
}

class Index extends Component<Props, State> {
	readonly state: Readonly<State> = {
		tableData: [
			{title:'注册',time:'2023-06-17 10:20:34',num:'+5'},
			{title:'分享好友',time:'2023-06-17 10:20:34',num:'+10'},
			{title:'创作',time:'2023-06-17 10:20:34',num:'-5'}
		],
	}

	componentDidShow() {
	}


	render() {
		const { tableData } = this.state
		return (
			<View className='log-wrap'>
				<View className='log-content'>
				{tableData.map((item, index) => (
					<View key={index} className='list-items'>
						<View key={index} className=''>
							<View className='title'>{item.title}</View>
							<View className='time'>{item.time}</View>
						</View>
						
						<View className='num'>{item.num}</View>
					</View>
				))}
				</View>
				
			</View>
		)
	}
}

export default Index
