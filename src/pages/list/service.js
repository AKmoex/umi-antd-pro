import axios from 'axios';

export async function getInitValues() {
  let res = await axios.get(
    'https://proapi.azurewebsites.net/api/fake_list?count=5',
  );
  return res;
}
