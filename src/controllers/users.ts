import {BodyProp, Controller, Get, Post, Route} from 'tsoa';
import {db} from '../db/mysql';
import User from '../models/user'

@Route('/users')
export class UsersController extends Controller {
    @Get()
    public async getAll(): Promise<User[]> {
        let allUsers: User[];
        let sql = 'SELECT * FROM users;';
        await new Promise((resolve, reject) => {
            db.query(sql, (err, result) => {
                if (err) return reject(err);
                resolve(result)
            })
        }).then((result: User[]) => allUsers = result)
            .catch(err => console.log(err));
        return allUsers;
    }

    // @Post()
    // public async create(@BodyProp() descr: string): Promise<void> {
    //
    // }
}


// todoRoutes.post('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.log(req.body);
//     res.end();
// });
//
// todoRoutes.put('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.log(req.body);
//     console.log(req.params.id);
//     res.end();
// });
//
// todoRoutes.delete('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
//     console.log(req.body);
//     console.log(req.params.id);
//     res.end();
// });


