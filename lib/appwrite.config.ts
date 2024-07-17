import * as sdk from "node-appwrite";

const client = new sdk.Client();
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
const project = process.env.NEXT_PUBLIC_PROJECT_ID;
const api = process.env.NEXT_PUBLIC_API_KEY;

if (!endpoint || !project || !api) {
    throw new Error("Missing environment variables: Please ensure NEXT_PUBLIC_ENDPOINT, NEXT_PUBLIC_PROJECT_ID, and NEXT_PUBLIC_API_KEY are set in your .env.local file.");
}

client.setEndpoint(endpoint).setProject(project).setKey(api);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
