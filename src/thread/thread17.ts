/* 
	Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  return new Promise<User>((resolve, reject) => {
    let attempts = 0;
    const attemptFetch = () => {
      fetchUser(id)
        .then(resolve)
        .catch((error) => {
          attempts++;
          if (attempts >= maxAttempts) {
            reject(error);
          } else {
            attemptFetch();
          }
        });
    };
    attemptFetch();
  });
}
