import jwt from 'jsonwebtoken';
import db from '../../../models';
const env = process.env.NODE_ENV || 'development';

export default async function (req, res) {
    
    try{
        
        let userdata = [];
        
        const token = req.headers.authorization.split(' ')[1];
        const result = jwt.verify(token, process.env.secret_key);
        // console.log(result);

       userdata[0] = result;

        await db.userinfos.findOne({
            where: {
                userID: result.id
            }
        }).then((res) => userdata[1]=res.dataValues);        

        res.send(userdata)
    } catch(e) {
        res.status(401).send('You are not authorized to view this page');
    }
    
}