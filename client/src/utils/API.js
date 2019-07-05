import axios from "axios";
export default {
    getAllSightings: var => axios.get("/api/allSightings")
            .then(response => response.data),
    getUserSightings: var => axios.get("/api/user/:id/sightings/")
            .then(response => response.data),
    getSightingsId: var => axios.get("/api/user/:id/sightings/:id")
            .then(response => response.data),
    getSearch: var => axios.get("/api/search")
            .then(response => response.data),
    getComments: var => axios.get("/api/sightings/:id/comments")
            .then(response.data),
    postSightings: var => axios.post("/api/user/:id/sightings")
            .then(response => response.data),
    postComments: var => axios.post("/api/user/:id/sightings")
            .then(response => response.data),
    postUser: var => axios.post("/api/user")
            .then(response => response.data),
    putSightings: var => axios.put("/api/user/:id/sightings/:id")
            .then(response => response.data),
    putComments: var => axios.put("/api/user/:id/comments/:id")
            .then(response => response.data)    
}