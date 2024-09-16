import Homepage from '@/app/layouts/Homepage';
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
    return (
        <Homepage>
            <header className="bg-sky-600 text-white p-4 text-right">
                <nav>
                    <a className="mx-4 hover:underline" href="/register">Register</a>
                    <a className="mx-4 hover:underline" href="/login">Login</a>
                </nav>
            </header>
            <div className="flex flex-col justify-center items-center p-20">
                <Image src={"/assets/solara.png"} width={250} height={250} alt={"logo"} className={"pb-5"}/>
                <Image src={"/assets/solara-letters.png"} width={265} height={100} alt={""}/>
            </div>
            <h2 className="text-2xl font-bold text-center">Welcome to <strong
                className={"text-yellow-500"}>Solara</strong>!</h2>
            <p className="text-center text-gray-700 mt-4">Connect and share happy moments with friends.</p>
            <div className="flex justify-center mt-6">
                <Link href={"/login"}>
                    <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded hover:bg-amber-600">Login
                    </button>
                </Link>
            </div>
        </Homepage>
    );
};

export default Home;