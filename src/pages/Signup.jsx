import Logo from "../assets/images/Logo.png"

const Signup = () => {
  return (
    <aside className='bg-secondary grid justify-center place-items-center py-12 text-center gap-5'>
        <img src={Logo} alt="NadiiTech"  className='w-50'/>
        <div className='min-h-[500px] min-w-[500px] bg-white mx-auto p-10'>
          Signup
        </div>
    </aside>
  )
}

export default Signup