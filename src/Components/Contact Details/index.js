import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '60ch',
      },
    },
  }));

export default function ContactDetails() {
    
    const classes = useStyles();

    return (
        <>
        <h3 className="dashTitle">Contact Details</h3>
        <form className={classes.root} noValidate autoComplete="off">
        <div className="dashDetail">
            <div className="dashContactInfo">
            <TextField label="First Name"/>
            <TextField label="Last Name"/>
            <TextField label="Email"/>
            <TextField label="Phone Number"/>
            <TextField label="Address 1"/>
            <TextField label="Address 2"/>
            <TextField className="cityField" label="City"/>
            <TextField label="State"/>
            <TextField label="Zip"/>
            </div>
        </div>
        </form>
        
        </>
    )
}