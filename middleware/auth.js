export default function ({ store, redirect, route }) {
  if (route.name == 'login') {
    if (store.state.auth != false) {
      return redirect('/')
    }
  } else {
    if (store.state.auth == false) {
      return redirect('/login')
    }
  }
}
