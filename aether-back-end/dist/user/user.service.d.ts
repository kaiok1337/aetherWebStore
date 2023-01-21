import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDTO } from './dto/create-user-dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    addUser(createUserDTO: CreateUserDTO): Promise<User>;
    findUser(username: string): Promise<User | undefined>;
}
