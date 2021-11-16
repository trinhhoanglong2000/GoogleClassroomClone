import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';

export default function AlignItemsList({ data }) {
  
  return (
    <>
    {data? <List sx={{ width: '100%'}}>
      {data.map((item, key) => {
        
        return (
          <div key={key}>
         
            <ListItem >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.username}
              />
            </ListItem>
            <Divider sx={{width:'100%'}} />

          </div>
        );
      })}

    </List>:<></>}
    {/* <List sx={{ width: '100%'}}>
      {data.map((item, key) => {
        
        return (
          <>
         
            <ListItem key={item.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item.username}
              />
            </ListItem>
            <Divider sx={{width:'100%'}} />

          </>
        );
      })}

    </List> */}
    </>
  );
}