import store from '../store'

export const getLocalState = () => {
  return store.getState().data
}

export const getData = (state) => {
  return (state && state.data) || []
}

export const getOptions = (state) => {
  return (state && state.options) || []
}

export const getPlural = (state) => {
  return (state && state.plural) || []
}

