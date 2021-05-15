import axios from 'axios';
const fetchApi = {
  contact: {},
  id: 0,
  postContactToServer() {
    axios
      .post('http://localhost:4040/contacts', this.contact)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  },
  deleteContactFromServer() {
    axios
      .delete(`http://localhost:4040/contacts/${this.id}`)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  },
};
export default fetchApi;
