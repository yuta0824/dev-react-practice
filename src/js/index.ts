type UserInfo = {
  id: number;
  name: string;
  email?: string;
  isAdmin: boolean;
};

const createUser = ({ id, name, email = "no email", isAdmin = false }: UserInfo): void => {
  console.log({ id, name, email, isAdmin });
};
createUser({ id: 1, name: "Taro", isAdmin: true });
// { id: 1, name: 'Taro', email: 'no email', isAdmin: true }

// createUser({ id: 1, name: "Taro" });
// // { id: 1, name: 'Taro' } false

// createUser({ id: 2, name: "Yamada", email: "yamada@gmail.com" }, true);
// // { id: 2, name: 'Yamada', email: 'yamada@gmail.com' } true
