import {Controller, Get, Route} from 'tsoa';
import {getConnection} from 'typeorm';
import {User} from '../entity/User';

@Route('/users')
export class UsersController extends Controller {
    @Get()
    public async getAll(): Promise<User[]> {
        try {
            this.setStatus(202);
            return await getConnection().manager.find(User);
        } catch (e) {
            this.setStatus(500);
            console.error(e)
        }
    }
}



