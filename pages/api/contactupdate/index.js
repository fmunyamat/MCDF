import db from '../../../models';

export default async function (req, res) {

    db.users.update({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email
    },{
        where: {
            id: req.body.userid
        }
    });

    db.userinfos.update({
        phone_number: req.body.phone,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    },{
        where: {
            userid: req.body.userid
        }
    });

    res.end();

}