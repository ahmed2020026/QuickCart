import { PropagateLoader } from 'react-spinners'

export const Spinner = () => {
    return (
        <section style={{ height: 'calc(100vh - 75px)' }} className='flex justify-center items-center'>
            <PropagateLoader color="#f54a00" />
        </section>
    )
}