import db from '../../models';

export default async function Sync(req,res) {

    await db.sequelize.sync();
    res.end()
}