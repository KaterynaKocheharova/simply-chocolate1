export default function postReview(userData) {
  const BASE_URL = 'https://66360b09415f4e1a5e2617c4.mockapi.io';
  const endpoint = '/reviews';
  const url = BASE_URL + endpoint;
  fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(userData),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(error => {
      console.log(error);
    });
}
