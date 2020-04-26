import db from '../../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const env = process.env.NODE_ENV || 'development';

export default async function (req, res) {

    const user = await db.users.findOne({
        where: {
            email: req.body.email
        }
    })

    const result = await bcrypt.compare(req.body.password, user.password)
    
    if (result) {
        const token = jwt.sign({ id: user.id, firstName: user.first_name, lastName: user.last_name, email: user.email }, process.env.secret_key,{ expiresIn: '1d' });

        let userinfo = {
            phone_number: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
            userId: user.id
        }

        let userinfoCheck = await db.userinfos.findOne({
            where: {
                userId: user.id
            }
        });

        if (!userinfoCheck) {
            db.userinfos.create(userinfo);
        };
        
        res.json({
            id: user.id,
            email: user.email,
            token });
    } else {
        res.status(401).send('Login Failed');
    }

}