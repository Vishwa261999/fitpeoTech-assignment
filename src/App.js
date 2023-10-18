import './App.css';
import { AiOutlineRight, AiOutlineDown, AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineBorder } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { PieChart } from 'react-minimal-pie-chart';
import { VscKey } from "react-icons/vsc"
import { BsBox, BsHandbag } from "react-icons/bs"
import { RiExchangeDollarLine } from "react-icons/ri"
import { MdOutlineLibraryBooks, MdOutlineAccountBalanceWallet } from "react-icons/md"
import Table from './components/Table';
import SimpleCharts from './components/SimpleCharts';


function App() {
  const data = [
    {
      title: "Earning",
      count: "$198k",
      percentage: "37.8%",
      icon: <AiOutlineArrowUp />,
      iconColor: "green",
      duration: "month",
      img: <RiExchangeDollarLine size={40} />
    },
    {
      title: "Orders",
      count: "$2.4k",
      percentage: "2%",
      icon: <AiOutlineArrowDown />,
      iconColor: "red",
      duration: "month",
      img: <MdOutlineLibraryBooks size={40} />
    },
    {
      title: "Balance",
      count: "$2.4k",
      percentage: "2%",
      icon: <AiOutlineArrowDown />,
      iconColor: "red",
      duration: "month",
      img: <MdOutlineAccountBalanceWallet size={40} />
    },
    {
      title: "Total Sales",
      count: "$89k",
      percentage: "11%",
      icon: <AiOutlineArrowUp />,
      iconColor: "green",
      duration: "week",
      img: <BsHandbag size={40} />
    },
  ];

  const pieData = [
    { title: 'Two', value: 35, color: '#5324f1', lineWidth: 20 },
    { title: 'Three', value: 20, color: '#e6e2f5', lineWidth: 30 },
    { title: 'One', value: 25, color: '#de0797', lineWidth: 40 },
  ];

  return (
    <>
      <main className='flex max-h-[100vh] overflow-y-hidden'>
        <div className='flex flex-col h-[100vh] pb-10 justify-between w-[15%] bg-[#170971] text-white'>
          <ul className='list-none flex px-9 flex-col gap-10 mt-10'>
            <li className='flex items-center gap-2'>
              <img src="/images/setting - Copy.png" alt="" className='h-8' />
              <p className='font-bold text-2xl'>Dashboard</p>
            </li>

            <li className='flex items-center gap-2'>
              <VscKey className='border border-white rounded-md w-6 h-5 p-[0.5px]' />
              <p>Dashboard</p>
            </li>

            <li className='flex items-center justify-between text-base'>
              <div className='flex items-center gap-2'>
                <BsBox className='border border-white rounded-md w-6 h-5 p-[1px]' />
                <p>Product</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className='flex items-center justify-between text-base'>

              <div className='flex items-center gap-2'>
                <img src="/images/account.png" alt="" className='h-7' />
                <p>Customers</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className='flex items-center justify-between text-base'>
              <div className='flex items-center gap-2'>
                <img src="/images/wallet.png" alt="" className='h-7' />
                <p className='text-start'>Income</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className='flex items-center justify-between text-base'>
              <div className='flex items-center gap-2'>
                <img src="/images/sale_6997762.png" alt="" className='h-7 ' style={{ filter: 'grayscale(100%) brightness(0) invert(100%)' }} />
                <p>Promote</p>
              </div>
              <AiOutlineRight />
            </li>
            <li className='flex items-center justify-between text-base'>
              <div className='flex items-center gap-2'>
                <img src="/images/question.png" alt="" className='h-7' />
                <p>Help</p>
              </div>
              <AiOutlineRight />
            </li>
          </ul>
          <div className=' flex flex-col px-9'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center justify-center gap-2'>
                <img src="/images/Screenshot 2023-10-18 231746.png" alt="" className='h-10 rounded-full' />
                <div className='flex flex-col'>
                  <p>Evano</p>
                  <p className='text-xs'>Project Manager</p>
                </div>
              </div>
              <div>
                <AiOutlineDown />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-[#e6edf2] flex flex-col gap-3'>
          <div className='flex items-center justify-between'>
            <div className='mx-16 font-bold'>
              Hello Sharukh,
            </div>
            <div className='flex items-center mx-16'>
              <div className='max-w-md mx-auto'>
                <div className='relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden'>
                  <div className='grid place-items-center h-full w-6 text-gray-300'>
                    <IoSearchOutline className='h-6 w-6 text-gray-300' />
                  </div>
                  <input
                    className='peer h-full w-full outline-none text-sm text-gray-700 pr-2'
                    type='text'
                    id='search'
                    placeholder='Search something..'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-12 gap-7 mx-9'>
            {data.map((item, index) => (
              <div key={index} className='bg-white rounded-lg flex items-center justify-center gap-6 col-span-3 w-72 h-40'>
                <div>
                  {item.img}
                </div>
                <div className='flex items-center justify-center flex-col'>
                  <h1>{item.title}</h1>
                  <h2 className='text-lg font-bold'>{item.count}</h2>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3px" }}>
                    <p style={{ color: item.iconColor }}>{item.icon}</p>
                    <p style={{ color: item.iconColor }}>{item.percentage}</p>
                    <p>this {item.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex items-center justify-between'>
            <SimpleCharts />
            <div className='flex items-center justify-end mx-9'>
              <div className='h-[21.2rem] w-[350px] flex items-center justify-center rounded-lg' style={{ position: 'relative', backgroundColor: 'white' }}>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-[90%] -translate-y-[230%]'>
                  <h2 className='font-bold text-start'>Customers</h2>
                  <p className='text-sm text-start'>Customers that buy Products</p>
                </div>
                <PieChart className='h-44' data={pieData} lineWidth={30} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                  <p className='font-extrabold'>65%</p>
                  <p className='font-bold'>Total new</p>
                  <p className='font-bold'>Customers</p>
                </div>
              </div>
            </div>
          </div>
          <Table />
        </div>
      </main >
    </>
  );
}

export default App;
