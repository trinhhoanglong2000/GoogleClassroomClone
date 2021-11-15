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
    <List sx={{ width: '100%'}}>
      {data.map((item, key) => {
        return (
          <>
            <ListItem key={key}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item}
              />
            </ListItem>
            <Divider sx={{width:'100%'}} />

          </>
        );
      })}

    </List>
  );
}