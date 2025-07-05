import {CurrentUser} from './CurrentUser';
import {AddressType, UsersObjectType, UserType} from './HW2';

export type UsersPropsType= {
	id: number,
	name: string,
	age: number,
	myFriends:Array<UserType>
	address: AddressType
};


export type UserList2PropsType = {
	users: Array<UserType> // пропиши типизацию
	filterUsers: ()=> void// пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'}
					onClick={props.filterUsers}>
				SHOW ME FRIENDS FROM LA
			</button>

			<ul>
				{props.users.map((user) =>

					<CurrentUser user={user} key={user.id}/>
				)}
			</ul>
		</div>
	);
};

