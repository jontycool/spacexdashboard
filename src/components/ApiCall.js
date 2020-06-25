import Axios from 'axios';

async function ApiCall({ query }) {
  let resp = {};
  try {
    resp = await Axios.get(`https://api.spacexdata.com/v3/${query}`);
  } catch (error) {
    console.log('Error Occured !');
    console.log(error);
    window.alert('Something Went Wrong!');
  }
  console.log(resp);
  return resp;
}

export default ApiCall;
