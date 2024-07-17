import { ID, Query } from "node-appwrite";
import { databases, users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      return existingUser?.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log(error)
  }
}

export const registerClient = async ({...client}: RegisterUserParams) => {
  try {
    const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;
    const CLIENT_COLLECTION_ID = process.env.NEXT_PUBLIC_CLIENT_COLLECTION_ID;
    const newClient = await databases.createDocument(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      ID.unique(),
      {
        ...client
      }
    )

    return parseStringify(newClient);
  } catch (error) {
    console.error("An error occurred while registering a new client:", error);
  }
}