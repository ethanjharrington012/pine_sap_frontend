import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api'; 
import { useGetData } from '../../custom-hooks'; 
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@mui/material'; 
import { ArtistForm } from '../../components/ArtistForm'; 


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'your_name',
    headerName: 'Your Name',
    width: 150,
    editable: true,
  },
  {
    field: 'artist_name',
    headerName: 'Artist Name',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'description',
    width: 110,
    editable: true,
  },
  {
    field: 'artist_rating',
    headerName: 'Artist Rating',
    type:'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fav_song',
    headerName: 'favortie song',
    width: 110,
    editable: true,
  }
];

interface gridData{
    data:{
      id?:string;
    }
  }

export const DataTable = () => {

    let { artistData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridRowSelectionModel>([])
    let handleOpen = () => {
        setOpen(true)
      }
    
    let handleClose = () => {
        setOpen(false)
    }
    
    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }
    console.log(gridData)

        return (
            <Box sx={{ height: 400, width: '100%' }}>
            <h2>Artist in inventory</h2>
            <DataGrid
                rows={artistData}
                columns={columns}
                initialState={{
                    pagination: {
                    paginationModel: {
                        pageSize: 5,
                    },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                onRowSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel)}}
                {...artistData}
            />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update Drone</DialogTitle>
                <DialogContent>
                    <DialogContentText>Drone id: {gridData[0]}</DialogContentText>
                    <ArtistForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                    <Button onClick={handleClose} color="secondary">Done</Button>
                </DialogActions>
            </Dialog>
        </Box>
        );
}