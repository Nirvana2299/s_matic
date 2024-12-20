import ContactUs from "../components/contactUs";
import Hero from "../components/hero";
import Reveal from '../../utils/reveal'

export default function Page() {
    return <>
        <Reveal slideFromSide={true}>
            <Hero name='Contact Us' />
        </Reveal>
        <Reveal>
            <ContactUs />
        </Reveal>
        {/* <Reveal>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3768.3247558175544!2d73.0226015!3d19.1810129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEwJzUxLjciTiA3M8KwMDEnMjEuNCJF!5e0!3m2!1sen!2sin!4v1720268584680!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} loading="lazy"></iframe>
        </Reveal> */}
    </>
}