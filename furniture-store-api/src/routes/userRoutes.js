
class User {
    constructor(user_id, username, passwordHash, email, role) {
        this.user_id = user_id;
        this.username = username;
        this.passwordHash = passwordHash;
        this.email = email;
        this.role = role;
    }
}

export default User