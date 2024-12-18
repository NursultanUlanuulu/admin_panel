import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { App } from "./app/App"
import "./app/styles/index.css"
import "react-toastify/dist/ReactToastify.css"
import { store } from "./app/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
)
