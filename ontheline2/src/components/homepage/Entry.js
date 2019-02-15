import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
    // display: 'flex', //added this may not work will try after second possible entry
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 34,
    color: '#3fdfca',
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
};

function Entry(props) {
  const { classes } = props;
  
 
  return (
    
    <Card className={classes.card} style={{width: '50%', margin: 'auto'}} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Daily Entry
        </Typography>

        
        {props.entries.map( entry => {
                return (
                <div> 
                  <p key={entry.id} > {entry.entry}</p> 
                <i onClick={() => props.editEntry(entry)}className="fas fa-user-edit"></i>
                 <i onClick={e => props.deleteEntry(e, entry.id)} className="fas fa-trash-alt"></i>  
                  </div>
        )})}
        
      </CardContent>
    </Card>
  );
}

// Entry.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(Entry);


 