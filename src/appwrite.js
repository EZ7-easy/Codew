import { Appwrite } from 'appwrite';

const appwrite = new Appwrite();
appwrite
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite API endpoint
  .setProject('65c1f49e88cd2940a3e5'); // Your Appwrite project ID

export default appwrite;
