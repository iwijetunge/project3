import React from 'react';
import API from '../../util/API';

submitClick: () => {
    const newPost = {
        name: this.state.//_insert_//
        imageUrl: this.state.imageUrl,
        //stat: this.state.//______
        //stat: this.state.//______
        //stat: this.state.//______
    }
    API.getAllSightings(newPost)
        .then(sightings => {
            console.log(sightings);
            this.clearForm()
        })
}

