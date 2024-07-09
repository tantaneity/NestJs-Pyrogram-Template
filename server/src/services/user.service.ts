import { Injectable, NotFoundException } from "@nestjs/common";

import { UserRepository } from "../repositories/user.repository";
import { CreateUserDto } from "../models/dto/user/create-user.dto";
import { PartialKeys } from "../../utils/types/partial-keys";
import { UserEntity } from "src/models/entities/user.entity";

@Injectable()
export class UserService {
    constructor(private repository: UserRepository) {}

    getUsers() {
        return this.repository.getUsers()
    }
    getUser(where: PartialKeys<UserEntity>) {
        const user = this.repository.getUser(where)
        if (!user) {
            throw new NotFoundException('User was not found by this param')
        }
        
        return user
    }

    create(input: CreateUserDto) {
        return this.repository.create(input)    
    }
}