/* 
	Реализовать функцию XXX
*/

export class NestedValidationError extends Error {
  public path: string[];
  constructor(message: string, path: string[]) {
    super(message);
    this.name = 'NestedValidationError';
    this.path = path;
  }
}

export interface Address {
  street: string;
  city: string;
}

export interface Person {
  name: string;
  age: number;
  address: Address;
}

export function validatePerson(person: Person): void {
  // Проверить name (не пустой)
  if (!person.name || person.name.trim() === '') {
    throw new NestedValidationError('Name is required', ['name']);
  }
  
  // Проверить age (>= 0)
  if (person.age < 0) {
    throw new NestedValidationError('Age must be non-negative', ['age']);
  }
  
  // Проверить address.street (не пустой)
  if (!person.address.street || person.address.street.trim() === '') {
    throw new NestedValidationError('Street is required', ['address', 'street']);
  }
  
  // Проверить address.city (не пустой)
  if (!person.address.city || person.address.city.trim() === '') {
    throw new NestedValidationError('City is required', ['address', 'city']);
  }
}
