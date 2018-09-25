import axios from "axios";

export default {
  // Gets all hhs
  getHhs: function() {
    return axios.get("/api/hhs")
  },
  // Gets the Hh with the given id
  getHh: function(id) {
    return axios.get("/api/hhs/" + id);
  },
  // Deletes the Hh with the given id
  deleteHh: function(id) {
    return axios.delete("/api/hhs/" + id);
  },
  // Saves a Hh to the database
  saveHh: function(HhData) {
    return axios.post("/api/hhs", HhData);
  }
};