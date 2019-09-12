import {Body, BodyProp, Controller, Get, Post, Route} from 'tsoa';
import {getConnection} from 'typeorm';
import {User} from '../entity/User';

@Route('/users')
export class UsersController extends Controller {
    @Get()
    public async getAll(): Promise<User[]> {
        try {
            return await getConnection().manager.find(User);
        } catch (e) {
            this.setStatus(500);
            console.error(e.message)
        }
    }

    @Post()
    public async create(@Body() {email, password}): Promise<void> {
        let user = new User(email, password);
        await getConnection().manager.save(user);
    }
}



