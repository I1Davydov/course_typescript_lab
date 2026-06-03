/* 
	Дописать функцию getSafeUserSettings, которая возвращает настройки по умолчанию { theme: "light" } при ошибке.
*/

import { fetchUserSettings } from "./promises";

export function getSafeUserSettings(id: number): Promise<{ theme: string }> {
  return fetchUserSettings(id).catch(() => ({ theme: 'light' }));
}
