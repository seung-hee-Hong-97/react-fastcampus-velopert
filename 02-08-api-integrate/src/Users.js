import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setUsers(null);
                setError(null);
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users/');
                setUsers(response.data);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류가 발생했습니다.{JSON.stringify(error)}</div>;
    if (!users) return null;

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.username} ({user.name})
                </li>
            ))}
        </ul>
    );
}

export default Users;
