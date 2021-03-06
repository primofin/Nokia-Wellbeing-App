

const apiUrl = ''

const fetchGET = async (endpoint = '', params = '', token = '') => {
  const fetchOptions = {
    headers: {
      'x-access-token': token,
    },
  }
  const response = await fetch(apiUrl + endpoint + '/' + params, fetchOptions)
  if (!response.ok) {
    throw new Error('fetchGET error: ' + response.status)
  }
  return await response.json()
}

const fetchPOST = async (endpoint = '', data = {}, token = '') => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(apiUrl + endpoint, fetchOptions)
  const json = await response.json()
  console.log(json)
  if (response.status === 400 || response.status === 401) {
    const message = Object.values(json).join()
    throw new Error(message)
  } else if (response.status > 299) {
    throw new Error('fetchPOST error: ' + response.status)
  }
  return json
}

const fetchPUT = async (endpoint = '', params = '', data = {}, token = '') => {
  const fetchOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(apiUrl + endpoint + '/' + params, fetchOptions)
  const json = await response.json()
  console.log(json)
  if (response.status === 400 || response.status === 401) {
    const message = Object.values(json).join()
    throw new Error(message)
  } else if (response.status > 299) {
    throw new Error('fetchPUT error: ' + response.status)
  }
  return json
}

const fetchDELETE = async (endpoint = '', params = '', token = '') => {
  const fetchOptions = {
    method: 'DELETE',
    headers: {
      'x-access-token': token,
    },
  }
  const response = await fetch(apiUrl + endpoint + '/' + params, fetchOptions)
  if (!response.ok) {
    throw new Error('fetchDELETE error: ' + response.status)
  }
  return await response.json()
}

const fetchFormData = async (
  endpoint = '',
  data = new FormData(),
  token = ''
) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'x-access-token': token,
    },
    body: data,
  }
  const response = await fetch(apiUrl + endpoint, fetchOptions)
  const json = await response.json()
  console.log(json)
  if (response.status === 400 || response.status === 401) {
    const message = Object.values(json).join()
    throw new Error(message)
  } else if (response.status > 299) {
    throw new Error('fetchPOST error: ' + response.status)
  }
  return json
}


// eslint-disable-next-line max-len
export {
  fetchGET,
  fetchPOST,
  fetchDELETE,
  fetchPUT,
  fetchFormData,
}
