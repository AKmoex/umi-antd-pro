export async function get(params) {
  let res = await fetch(
    'https://easy-mock.com/mock/5f61c1ce97c6bf17e3acc0fd/example/upload',
    {
      method: 'POST',
      body: JSON.stringify(params),
    },
  ).then(data => data.json());
  return res;
}
