import bcrypt from 'bcrypt';
const saltRounds = 10;
import db from '../../models';

export default function (req, res) {

    const password = req.body.password;

    bcrypt.hash(password, saltRounds, function (err, hash) {

            db.user.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
            });
    });

    res.end();

}