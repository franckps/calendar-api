import { Injectable } from '@nestjs/common';
const createId = (): string => Date.now() + Math.random().toString()
const users = [
  {id: createId(), name: 'Francisco', active: true},
  {id: createId(), name: 'Antonio', active: true},
  {id: createId(), name: 'Pedro', active: true},
  {id: createId(), name: 'João', active: true}
]
@Injectable()
export class AppService {
  findAll(): {id: string, name: string}[] {
    return users.filter(element => element.active);
  }
  findById(id: string): {id: string, name: string} {
    return users.find(element => (element.id === id && element.active));
  }
  create({name}:{name: string}): {id: string, name: string} {
    const user = {id: createId(), name, active: true}
    users.push(user)
    return user
  }
  deleteById(id: string): void {
    users.forEach((element, key, arr) => {
      if(element.id === id)
        arr[key].active = false
    })
    return
  }
}
