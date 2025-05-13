import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

function Page() {
    return (
        <ol> 
          <li>React is a popular library, so I will be able to
            fit in with all the coolest devs out there! 😎</li>
            <li>I am more likely to get a job as a front end developer
            if I know React</li>
        </ol>
    );
}
function Header() {
  return (
    <img src="src/assets/react.svg" width="40" alt="react logo"/>
  );
}
function Footer() {
  return (
    <footer> <small> 2024 copyright Fortnite Vbucks </small></footer>
  )
}
root.render(
  <main>
    <Header />
    <Page />
    <Footer />
  </main>
)