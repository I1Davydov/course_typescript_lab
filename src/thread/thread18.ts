/* 
	Дописать функцию getUserWithFallback, которая пытается получить пользователя с помощью fetchUser, а при ошибке пробует получить данные пользователя c помощью fetchUserData.
*/

import { fetchUser, fetchUserData, type User } from "./promises";

export function getUserWithFallback(id: number): Promise<User> {
  return fetchUser(id).catch(() => fetchUserData(id));
}
