import jwt from 'jsonwebtoken';
import config from '../../../config/config.json';
const env = process.env.NODE_ENV || 'development';

export default async function (req, res) {
    
    try{
        
        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        
        const result = jwt.verify(token, config[env].secret_key);
        console.log(result.id);
        

        res.json({ success: true})
    } catch(e) {
        res.status(401).send('You are not authorized to view this page');
    }
    
}