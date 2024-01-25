import UserModal, { User } from "@/model/user.model";

export function createUser(input: Partial<User>) {
  return UserModal.create(input);
}
