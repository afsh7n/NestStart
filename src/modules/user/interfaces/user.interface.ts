export interface User {
  id: string; // Unique identifier
  username: string; // Username
  email: string; // Email address
  password: string; // Encrypted password
  isActive: boolean; // Whether the user is active or not
  createdAt: Date; // Creation timestamp
  updatedAt: Date; // Last update timestamp
}
