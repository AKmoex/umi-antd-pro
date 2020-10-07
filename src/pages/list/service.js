import axios from 'axios';

export async function getInitValues() {
  let res = await axios.get(
    'https://proapi.azurewebsites.net/api/fake_list?count=5',
  );
  return res;
}

export async function getTableValues() {
  let res = await axios.get(
    'https://proapi.azurewebsites.net//api/rule?current=1',
  );
  return res;
}
