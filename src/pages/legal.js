import circuit from "../assets/circuit.svg";
import circuit2 from "../assets/circuit2.svg";

const Legal = () => {
    return (
        <>
        <section className="my-10 space-y-2">
            <div className="sm:flex gap-5 mt-10 ml-24">
                <h1 className="text-2xl md:text-3xl">LEGAL</h1>
                <div className="flex flex-auto">
                    <img src={circuit2} className="w-full ml-4 -scale-y-100"/>
                </div>
            </div>
            <div className="m-4 md:m-24">
                <h2 className="text-xl md:text-2xl">About Boundless Gamers</h2>
                <p className="mb-4">Rusty Quill is limited liability company incorporated in the United Kingdom and subject to the laws of England and Wales.</p>
                <h2 className="text-xl md:text-2xl">Website</h2>
                <p className="mb-4">Rusty Quill is limited liability company incorporated in the United Kingdom and subject to the laws of England and Wales.</p>
                <h2 className="text-xl md:text-2xl">Disclaimer</h2>
                <p className="mb-4">Rusty Quill is limited liability company incorporated in the United Kingdom and subject to the laws of England and Wales.</p>
                <h2 className="text-xl md:text-2xl">Licenses</h2>
                <p className="mb-4">Rusty Quill is limited liability company incorporated in the United Kingdom and subject to the laws of England and Wales.</p>
                <h2 className="text-xl md:text-2xl">Privacy</h2>
                <p className="mb-4">Rusty Quill is limited liability company incorporated in the United Kingdom and subject to the laws of England and Wales.</p>
            </div>
        </section>
        </>
    );
}

export default Legal;