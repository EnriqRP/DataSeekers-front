const API_URL = "http://127.0.0.1:8000/api/users/";

export const listUsers = async () => {
    return await fetch(API_URL);
};

// Get METHOD
export const getUsers = async (usersId) => {
    return await fetch(`${API_URL}${usersId}`);
};

// Add User METHOD
export const registerUser = async (newUser) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(newUser.name).trim(),
            "connections": String(newUser.connections).trim(),
        })
    });
};

// Update User METHOD
export const updateUser = async (userId, updatedUser) => {
    return await fetch(`${API_URL}${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": String(updatedUser.name).trim(),
            "connections": String(updatedUser.connections).trim(),
        })
    });
};

// Delete user - METHOD
export const deleteUser = async (userId) => {
    return await fetch(`${API_URL}${userId}`, {
        method: 'DELETE'
    });
};