import './Index.css';

const RightSideBar = () => {
  return (
    <>
      <div className=''>
        <p className='poppins-semibold  text-lg'>Inbox</p>


        <InboxMessages name="Rizwan Sabir" image="p1" time="01:20 PM" message="Hi how are u" unread={2} />
        <InboxMessages name="Rizwan Sabir" image="p2" time="Yesterday" message="Nice..." />
        <InboxMessages name="Rizwan Sabir" image="p3" time="12:20 AM" message="I am here" />
        <InboxMessages name="Rizwan Sabir" image="p10" time="Yesterday" message="Where ?" unread={4} />
        <InboxMessages name="Rizwan Sabir" image="p9" time="09:20" message="Down here" />

      </div>


    </>


  )
}


const InboxMessages = ({ image, name, time, message, unread = 0 }) => {
  return (
    <>
      <div className=' flex  my-4'>

        <img className='size-[35px] Avatar' src={`Media/${image}.jpg`} alt="" />
        <div className=' flex flex-1 flex-col  ml-2'>
          <div className='flex flex-1 justify-between  items-center'>
            <p className='poppins-semibold text-sm'>{name}</p>
            <p className='text-xs poppins-medium '>{time}</p>
          </div>
          <div className='flex justify-between text-sm text-black/70 text-[12px]'>
            <p>{message}</p>
            {unread ? <p className='bg-primary/90 px-2 text-white  flex items-center rounded-full  text-[10px]'>{unread}</p> : ""}
          </div>
        </div>
      </div>

    </>
  )

}

export default RightSideBar