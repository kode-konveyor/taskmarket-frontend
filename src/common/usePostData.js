import apiBaseRoot from '../config/apiBaseRoot'

const usePostData = (dataTarget) => (data) => {

  global.fetch(new URL(dataTarget, apiBaseRoot),
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
}

export { usePostData }
