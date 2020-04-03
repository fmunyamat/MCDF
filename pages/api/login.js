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

    console.log('THIS IS A STRING!!!!!!!!!!!!!!!',result);
    
    if (result) {
        const token = jwt.sign({ id: user.id, firstName: user.first_name, lastName: user.last_name, email: user.email }, config[env].secret_key)
        res.json({
            id: user.id,
            email: user.email,
            token });
    } else {
        console.log('WALT NEEDS TO REPAY ME FOR GETTING MY NAME WRONG THIS ENTIRE TIME');
        
        res.status(401).send('Login Failed');
    }

}