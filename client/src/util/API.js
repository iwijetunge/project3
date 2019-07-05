import axios from 'axios';



// axios.interceptors.request.use(function (config) {
//     const token = localStorage.getItem("token");
//     config.headers.Authorization = "Bearer " + token;
//     return config;
// });

export default {
    getAllSightings: () => axios.get('/api/sightings/')
        .then(response => response.data),
    getSighting: sightingId => axios.get('/api/sightings/' + sightingId)
        .then(response => response.data),
    createSighting: sighting => axios.post('/api/sightings/', sighting)
        .then(response => response.data),
    updateSighting: (sightingId, sighting) => axios.put('/api/sightings/' + sightingId, sighting)
        .then(response => response.data),
    deleteSighting: sightingId => axios.delete('/api/sightings/' + sightingId)
        .then(response => response.data),
    getUserSightings: userId => axios.get('/api/users/' + userId + '/sightings')
        .then(response => response.data),
    createUser: user => axios.post('/api/users/', user)
        .then(response => response.data),
    getUser: userId => axios.get('/api/users/', userId)
        .then(response => response.data),
    search: 
    // getSightingComments: sightingId => axios.get('/api/sighting/'+ sightingId + '/comments')
    //     .then(response => response.data),
    // getComment: commentId => axios.get('/api/comments/'+ commentId)
    //     .then(response => response.data),
    // editComment: commentId => axios.put('/api/comments/'+ commentId)
    //     .then(response => response.data),
    // // createComment: sightingId => axios.post('/api/comments/'+ sightingId)
    // //     .then(response => response.data)             
}

