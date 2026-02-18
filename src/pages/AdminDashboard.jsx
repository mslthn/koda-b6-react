import {FaHourglassEnd, FaPersonBooth, FaTruck} from 'react-icons/fa'
// import Chart from 'chart.js/auto'

const AdminDashboard = ()=>{

    return (
        <div className='m-5 flex flex-col gap-10'>
            <div className='flex gap-5'>
                <div className='bg-[#6FC276] w-1/3 p-5 text-white flex flex-col gap-3 rounded-lg'>
                    <div className='flex gap-10'>
                        <div className='bg-white flex justify-center items-center size-10 rounded-full'><FaHourglassEnd color='orange'/></div>
                        <div>Order On Progress</div>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-2xl font-medium'>200</p>
                        <p>+11.01%</p>
                    </div>
                </div>
                <div className='bg-[#6C69D4] w-1/3 p-5 text-white flex flex-col gap-3 rounded-lg'>
                    <div className='flex gap-10'>
                        <div className='bg-white flex justify-center items-center size-10 rounded-full'><FaTruck color='orange'/></div>
                        <div>On Shipping</div>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-2xl font-medium'>100</p>
                        <p>+4.01%</p>
                    </div>
                </div>
                <div className='bg-[#C56FBC] w-1/3 p-5 text-white flex flex-col gap-3 rounded-lg'>
                    <div className='flex gap-10'>
                        <div className='bg-white flex justify-center items-center size-10 rounded-full'><FaPersonBooth color='orange'/></div>
                        <div>Order Done</div>
                    </div>
                    <div className='flex gap-10'>
                        <p className='text-2xl font-medium'>50</p>
                        <p>+2.01%</p>
                    </div>
                </div>
            </div>
            <div>
                {/* <Chart
                  options={{
                    data,
                    primaryAxis,
                    secondaryAxes,
                  }}
                /> */}
            </div>
            <div></div>
        </div>
    )
}

export default AdminDashboard