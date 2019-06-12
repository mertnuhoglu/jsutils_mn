// import addListener, {addListenerStream} from 'jsutils_mn'
// addListener(actions)
// addListener({removeItem$: actions.removeItem$})
//
// {$ *} -> void
export default function addListener(streams) {
  Object.keys(streams).map( (key) =>
    streams[key].addListener({
      next: data => {
        console.log(key)
        console.log(data)
      }})
  )
}

// addListenerStream(actions.newItem$, "newItem$")
export function addListenerStream(stream$, key) {
  stream$.addListener({
    next: data => {
      key && console.log(key)
      console.log(data)
    }})
}

