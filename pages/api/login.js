import db from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../config/config.json';
const env = process.env.NODE_ENV || 'development';

export default async function (req, res) {

    const user = await db.user.findOne({
        where: {
            email: req.body.email
        }
    })

    const result = await bcrypt.compare(req.body.password, user.password)

    if (result) {
        const token = jwt.sign({ id: user.id, firstName: user.first_name, lastName: user.last_name, email: user.email }, config[env].secret_key)
        res.json({ token });
    } else {
        res.end('Login Failed');
    }

}