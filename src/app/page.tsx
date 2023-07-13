import OurServices from "@zenversee/components/home/OurServices";
import FadeinText from "@zenversee/components/home/fadeinText";
import Hero from "@zenversee/components/home/hero";
import OurClient from "@zenversee/components/home/ourClient";
export default function Home() {
    return (
        <main>
            <Hero />
            <FadeinText />
            <OurServices />
            <OurClient />
        </main>
    );
}
