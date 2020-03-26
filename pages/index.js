import Navbar from '../src/Components/Navbar/Navbar';
import db from '../models';

export default function Index() {

  db.sequelize.sync();
  
  return (
    <Navbar />
  )
}