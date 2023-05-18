import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseArtist, chooseDescription, chooseName, chooseRating, chooseSong } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface ArtistFormProps {
    id?:string;
    data?:{}
}

interface ArtistState {
    name: string;
}

export const ArtistForm = (props:ArtistFormProps) => {

    const dispatch = useDispatch();
    let { artistData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<ArtistState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.current.reset();
        } else {
            dispatch(chooseName(data.your_name))
            dispatch(chooseArtist(data.artist_name))
            dispatch(chooseDescription(data.description))
            dispatch(chooseRating(data.artist_rating))
            dispatch(chooseSong(data.fav_song))
            console.log(store.getState())
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="your_name">Your Name</label>
                    <Input {...register('your_name')} name="your_name" placeholder='Your Name' />
                </div>
                <div>
                    <label htmlFor="artist_name">Artist Name</label>
                    <Input {...register('artist_name')} name="artist_name" placeholder="Artist Name"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="artist_rating">Artist Rating</label>
                    <Input {...register('artist_rating')} name="artist_rating" placeholder="Artist Rating"/>
                </div>
                <div>
                    <label htmlFor="fav_song">Favorite Song</label>
                    <Input {...register('fav_song')} name="fav_song" placeholder="Favorite Song"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}