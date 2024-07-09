import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../models/dto/user/create-user.dto";
import { Public } from "utils/decorators/public.decorator";
import { UserEntity } from "src/models/entities/user.entity";

@Controller('users')
export class UserController {
    constructor(private service: UserService) {}

    @Public()
    @Get()
    getUsers() {
        return this.service.getUsers();
    }

    @Public()
    @Get(':id')
    getUser(@Param('id') id: number) {
        const user = this.service.getUser({ user_id: id });
        return user;
    }

    @Post('create')
    create(@Body() user: CreateUserDto) {
        this.service.create(user);
        return { message: 'User was successfully created' };
    }
}
