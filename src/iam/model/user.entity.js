export class User {
    constructor(id, name, email, business_name, password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.business_name = business_name;
        this.password = password;
    }

    static fromDisplayableUser(displayableUser) {
        return new User(
            displayableUser.id,
            displayableUser.name,
            displayableUser.email,
            displayableUser.business_name,
            displayableUser.password)
    };

    static toDisplayableUser(user) {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            business_name: user.business_name,
            password: user.password
        };
    }
}