import { motion } from 'framer-motion'
import Image from 'next/image'
// import SliderBar from '../../components/SliderBar/SliderBar.jsx'

const Home = () => {
    return(
    <>
        <div className='flex h-screen'>
            {/* <SliderBar/> */}
            <main className='flex justify-center w-full mt-2'>
                <motion.h2
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <Image src="assets/img/LogoJRC.png" alt="Logo Ferreteria JRC CIA LTDA" />
                </motion.h2>
            </main>
        </div>
    </>)
}

export default Home