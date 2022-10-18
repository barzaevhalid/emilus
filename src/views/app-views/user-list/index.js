import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import {connect} from "react-redux";
import {AsyncUsersList, removeUser} from "../../../redux/actions/UsersList";
import preloader  from '../../../assets/index.svg'
import Loading from "../../../components/shared-components/Loading";
import {Link} from "react-router-dom";

export class UserList extends Component {

	state = {
		users: userData,
		userProfileVisible: false,
		selectedUser: null
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};

	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}
	componentDidMount() {
		const { AsyncUsersList} = this.props
		AsyncUsersList()
	}

	render() {
		const {userProfileVisible, selectedUser } = this.state;
		const {users, removeUser, loading}  = this.props
		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<Link to={'edit-profile/'+ record.id}>
					  <div className="d-flex">
						<AvatarStatus src="https://funart.pro/uploads/posts/2021-04/1618264191_8-p-lapki-kotyat-zhivotnie-krasivo-foto-8.jpg" name={record.name} subTitle={record.email}/>
					  </div>
					</Link>


				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (_, data) => (
					<>
					<div>{data.company.name} </div>
					<div>{data.company.catchPhrase} </div>
					<div>{data.company.bs} </div>
						</>
				),
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: (_ ,date) => (
					<span>{date.website}</span>
				),
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {removeUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<>
				{loading ? <Loading align={'center'} cover={'content'}/> :
					<Card bodyStyle={{'padding': '0px'}}>
						<Table columns={tableColumns} dataSource={users} rowKey='id'/>
						<UserView data={selectedUser} visible={userProfileVisible} close={() => {
							this.closeUserProfile()
						}}/>
					</Card>
				}
			</>
		)
	}
}

export default connect((state) => {
	return {
		users:state.usersList.users,
		loading: state.usersList.loading,
	}
},{AsyncUsersList, removeUser,})(UserList)
