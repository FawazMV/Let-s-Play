import React from 'react';

const UserList = ({ users }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <h2 className="font-bold text-2xl mb-4">User List</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id} className="mb-2">
                            <div className="flex items-center">
                                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full mr-4" />
                                <div className="text-sm">
                                    <h3 className="font-semibold">{user.name}</h3>
                                    <p className="text-gray-600">{user.email}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


import React from 'react';

const users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatar: 'https://via.placeholder.com/50',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        avatar: 'https://via.placeholder.com/50',
    },
];

const Users = () => {
    return (
        <div className="container mx-auto py-8">
            <UserList users={users} />
        </div>
    );
};

export default Users;
