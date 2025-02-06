import { userI } from "@/types/users";
import { randomUUID } from "node:crypto";

const usersEmails: Map<string, string> = new Map()
const usersPhone: Map<string, string> = new Map()
const users: Map<string, userI> = new Map();

export function addUser(user: userI): string {
  const id = randomUUID()
  users.set(id, {...user, verified: false});
  usersEmails.set(user.email, id);
  usersPhone.set(user.phoneNumber, id);

  return id
}

export function getUserById(id: string): userI | undefined {
  return users.get(id);
}

export function getUserByEmail(email: string): userI | undefined {
  const id = usersEmails.get(email);
  if (id) {
    return users.get(id);
  }
}

export function getUserByPhoneNumber(phoneNumber: string): userI | undefined {
  const id = usersEmails.get(phoneNumber);
  if (id) {
    return users.get(id);
  }
}

export function verifyUser(id: string): boolean {
  const user = users.get(id);
  if (user) {
    user.verified = true;
    return true;
  }
  return false;
}

