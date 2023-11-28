import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// type UserSchema = Omit<User, "id">;

export class UserState {
  state: User[];
  constructor(initialState = []) {
    this.state = initialState;
  }
  get() {
    return Promise.resolve(this.state);
  }
  getById(id: string) {
    return Promise.resolve(this.state.find((user) => user.id === id));
  }
  getByEmail(email: string) {
    return Promise.resolve(this.state.find((user) => user.email === email));
  }
  async create(user: User) {
    // to bypasse the init state we pass the id
    const id = user.id ? user.id : uuidv4();
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = { ...user, id, password: hashedPassword };
    this.state = [...this.state, newUser];
    return Promise.resolve();
  }
  update(id: string, updatedUser: User) {
    this.state = this.state.map((User) => {
      if (User.id === id) {
        return updatedUser;
      }
      return User;
    });
    return Promise.resolve();
  }
  delete(id: string) {
    this.state = this.state.filter((User) => User.id === id);
    return Promise.resolve();
  }
}
