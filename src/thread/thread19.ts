/* 
	Дописать функцию fetchUserWithTimeout, которая отклоняет промис, если запрос занимает больше 100ms.
*/

import { fetchUser, type User } from "./promises";

export function fetchUserWithTimeout(id: number, timeout = 100): Promise<User> {
  let timeoutId: NodeJS.Timeout;
  const promise = new Promise<User>((resolve, reject) => {
    timeoutId = setTimeout(() => reject(new Error('Request timeout')), timeout);
    
    fetchUser(id)
      .then(result => {
        clearTimeout(timeoutId);
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timeoutId);
        reject(error);
      });
  });
  
  return promise;
}
