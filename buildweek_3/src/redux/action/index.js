export const GET_PERSONAL_PROFILE = 'GET_PERSONAL_PROFILE'
export const GET_PROFILES = 'GET_PROFILES'

export const personalProfile = function (_payload) {
  return {
    type: GET_PERSONAL_PROFILE,
    payload: _payload,
  }
}

export const profiles = function (_payload) {
  return {
    type: GET_PROFILES,
    payload: _payload,
  }
}

export const getProfile = (params) => {
  return (dispatch, getState) => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/' + params, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore')
        }
      })
      .then((profile) => {
        console.log('profilo', profile)
        dispatch(personalProfile(profile))
      })

      .catch((err) => {
        console.log('errore', err)
      })
  }
}

export const getAllProfiles = () => {
  return (dispatch, getState) => {
    fetch('https://striveschool-api.herokuapp.com/api/profile/', {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM4M2Q1YjYwMWIzODAwMTU0Nzk1NzIiLCJpYXQiOjE3NjUyOTM0MDMsImV4cCI6MTc2NjUwMzAwM30.gvIHt1f99YwL5uN0bIJSuEL3vle2nXwlLPeXm0bNUzQ',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore')
        }
      })
      .then((profile) => {
        console.log('profiloiiiiiii', profile)
        dispatch(profiles(profile.slice(profile.length - 10, profile.length)))
      })

      .catch((err) => {
        console.log('errore', err)
      })
  }
}


