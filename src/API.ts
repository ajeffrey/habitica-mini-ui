import axios from 'axios';

export function getHeaders(userId: string, userToken: string) {
  return {
    'x-api-user': userId,
    'x-api-key': userToken,
  };
}

export async function getUser(userId: string, userToken: string) {
  const { data } = await axios.get('http://habitica.com/api/v4/user', {
    headers: getHeaders(userId, userToken),
  });

  if(data && data.success) {
    return data.data;

  } else {
    throw new Error('Failed to retrieve user');
  }
}