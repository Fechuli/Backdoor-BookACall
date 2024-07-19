"use server"
import { ID, Query } from "node-appwrite";
import { CLIENT_COLLECTION_ID, DATABASE_ID, databases, users } from "../appwrite.config";
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

export const getClient = async (userId: string) => {

  try {


    const query = [Query.equal("userId", [userId])];

    const clients = await databases.listDocuments(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      query
    )

    if (!clients.documents || clients.documents.length === 0) {
      throw new Error("No client found for the given userId");
    }

    const client = clients.documents[0];

    return parseStringify(client)

  }  catch (error) {
    console.error(
      "An error occurred while retrieving the client details:",
      error
    );
  }
}