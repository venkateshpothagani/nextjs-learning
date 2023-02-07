export interface User {
    id: number;
    name: string;
    age: number;
    gender: "male" | "female";
}

const users: [User] = [{ id: 1, name: "Venkatesh", age: 20, gender: "male" }];

export default users;
