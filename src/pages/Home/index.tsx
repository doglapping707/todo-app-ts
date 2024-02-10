import Header from "./components/Header";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import List from "./components/List";

function Home() {
    return (
        <>
            <header>
                <div className="btn--logout m-4">
                    <div className="tooltip tooltip-left" data-tip="log out">
                        <button className="btn btn-outline btn-primary">
                            <span className="ico--logout"></span>
                        </button>
                    </div>
                </div>
            </header>
            <main>
                <div className="container">
                    {/* Header Area */}
                    <Header />

                    {/* Input Area */}
                    <Input />

                    {/* Buttons Area */}
                    <Buttons />

                    {/* List Area */}
                    <List />
                </div>
            </main>
            <footer>
                <div className="author-text">
                    <p>Made with ❤️ by <a href="https://github.com/doglapping707" target="_blank"><b>doglapping707</b></a></p>
                </div>
            </footer>
        </>
    );
}

export default Home;