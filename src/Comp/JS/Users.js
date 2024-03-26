import React ,{useState} from "react";
import '../CSS/Users.css';
import prof from '../profile.jpg';
function Users(){
	const [users, setUsers] = useState([
		{
			id: 1,
			username: 'user1',
			email: 'user1@example.com',
			profilePicture: prof,
		},
		{
			id: 2,
			username: 'user2',
			email: 'user2@example.com',
			profilePicture: prof,
		},
		{
			id: 3,
			username: 'user3',
			email: 'user3@example.com',
			profilePicture: prof,
		},
		{
			id: 4,
			username: 'user4',
			email: 'user4@example.com',
			profilePicture: prof,
		}
	]);
	
	const deleteUser = (userId) => {
		setUsers(users.filter((user) => user.id !== userId));
	};


	return(
		<div>
			<h2 style={{color:'white'}}>User List</h2>
			<table>
				<thead>
					<tr>
						<th>Profile</th>
						<th>User ID</th>
						<th>Username</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id} className="tr">
						<td>
							<img
							src={user.profilePicture}
							alt={`Profile of ${user.username}`}
							style={{ width: '50px', height: '50px', borderRadius: '50%' }}
							/>
						</td>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
						<td>
							<div id="delb" onClick={() => deleteUser(user.id)} >Delete
								<i id="deli" class="fa-solid fa-user-slash fa-beat"></i>
							</div>
						</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default Users;