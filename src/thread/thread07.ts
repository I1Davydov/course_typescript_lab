/* 
	Допишите функцию валидации пользователя, которая проверяет несколько условий и бросает разные ошибки для разных случаев.
*/

export class UserValidationError extends Error {
  field?: string;
  constructor(message: string, field?: string) {
    super(message);
    this.name = 'UserValidationError';
    this.field = field;
  }
}

export interface User {
  name: string;
  age: number;
  email: string;
}

export function validateUser(user: User): void {
  // 1. Проверить, что имя не пустое
  if (!user.name || user.name.trim() === '') {
    throw new UserValidationError('Name is required', 'name');
  }
  
  // 2. Проверить, что возраст >= 18
  if (user.age < 18) {
    throw new UserValidationError('Age must be at least 18', 'age');
  }
  
  // 3. Проверить, что email содержит '@'
  if (!user.email || !user.email.includes('@')) {
    throw new UserValidationError('Invalid email format', 'email');
  }
}
