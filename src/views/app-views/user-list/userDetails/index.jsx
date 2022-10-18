import React, { Component } from 'react'
import { UserOutlined, LockOutlined, CreditCardOutlined, BellOutlined } from '@ant-design/icons';
import {EditProfile} from './EditProfile'
import { Menu } from 'antd';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
 import axios from 'axios'
const SettingOption = () => {
	return (
		<Menu
			defaultSelectedKeys={`edit-profile`}
			mode="inline"
		>
			<Menu.Item key={`edit-profile`}>
				<UserOutlined />
				<span>Edit Profile</span>
			</Menu.Item>
		</Menu>
	);
};

const SettingContent = () => {
	 const url = window.location.pathname.replace([window.location.pathname.length - 1])
	return (
		<Switch>
			<Route path={url} component={EditProfile} />
		</Switch>
	)
}


export class userDetails extends Component {


	render() {
		return (
			<InnerAppLayout
				sideContentWidth={320}
				sideContent={<SettingOption />}
				mainContent={<SettingContent />}
			/>
    );
	}
}

export default userDetails
