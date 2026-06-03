/* 
	Дописать функцию getUserProfile, которая параллельно получает пользователя, его данные и настройки.
*/

import { fetchUser, fetchUserData, fetchUserSettings } from "./promises";
import type { User } from "./promises";

export function getUserProfile(id: number): Promise<{
  user: User;
  data: User;
  settings: { theme: string };
}> {
  return Promise.all([
    fetchUser(id),
    fetchUserData(id),
    fetchUserSettings(id)
  ]).then(([user, data, settings]) => ({
    user,
    data,
    settings
  }));
}