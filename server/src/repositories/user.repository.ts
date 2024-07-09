import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/models/dto/user/create-user.dto';
import { UserEntity } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';
import { PartialKeys } from 'utils/types/partial-keys';

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(UserEntity) private userRep: Repository<UserEntity>) {}
    
    async getUsers(): Promise<UserEntity[]> {
        const entities = await this.userRep.find()

        return entities
    }

    async getUser(where: PartialKeys<UserEntity>): Promise<UserEntity | null> {
        const entity = await this.userRep.findOneBy(where)
        return entity
    }

    async create(input: CreateUserDto): Promise<UserEntity> {
        const entity = this.userRep.create(input)
        await this.userRep.insert(entity)

        return this.getUser({ user_id: input.userId })
    }
}
