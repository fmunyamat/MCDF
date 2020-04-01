import db from '../../models';

export default async function (req, res) {

    const users = db.user;
    let test;

    await users.findOne({
        where: {
            email: req.body.emailInput,
            password: req.body.passwordInput
        }
    }).then((e) => (e === null) ? test="DOESN'T EXIST" : test='EXISTS')

    res.json({res: test});
}