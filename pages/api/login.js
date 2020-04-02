import db from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function (req, res) {

    const user = await db.user.findOne({
        where: {
            email: req.body.emailInput
        }
    })

    const result = bcrypt.compare(req.body.passwordInput, user.password)

    if (result) {
        const token = jwt.sign({ data: user }, "secret")
        res.json(token);

    } else {
        res.end('Login Failed');
    }

}