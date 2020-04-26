import bcrypt from 'bcrypt';
import db from '../../models';

export default async function (req, res) {

    const password = req.body.password;
    const hash = await bcrypt.hash(password, 10);
    
    const user = db.users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
            });

    

    res.end(JSON.stringify(user));

}