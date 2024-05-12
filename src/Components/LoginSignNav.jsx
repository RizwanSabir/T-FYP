
const LoginSignNav = () => {
  return (
    <>

      <div className="flex flex-row justify-center mt-5">
        <div className="flex flex-row bgColor h-[45px] w-4/5 justify-around items-center rounded-3xl ">

          <WhiteBackground name="Brand" white={true} />
          <WhiteBackground name="Influencer" white={false} />
          <WhiteBackground name="User" white={false} />
        </div>
      </div>

      <div className=" mt-4  flex flex-row  justify-center border-1 BorderColor p-1 rounded-3xl h-8">

        <img src="Gmail.svg" alt="" />
        <button className="text-center ml-2 poppins-regular "> Continue with google </button>


      </div>
    </>
  )
}

const WhiteBackground = ({ name, white }) => {
  return (
    <button className={`poppins-regular px-2 py-1 rounded-xl ${white ? 'bg-white' : ''}`}>
      <h1>{name}</h1>
    </button>
  );
};

export default LoginSignNav