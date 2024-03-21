function Registrasi(){
    return(
        <div>
            <h1 className="text-center text-5xl p-5">Registrasi</h1>
            <div className="createNote w-[400px] mx-auto m-10">
          <div className='flex flex-col'>
            <input type="text" placeholder='nama' name='nama' className='border-2 border-blue-200 p-2 mb-2' />
            <input type="text" placeholder='email' name='email' className='border-2 border-blue-200 p-2 mb-2' />
            <input type="text" placeholder='password' name='password' className='border-2 border-blue-200 p-2 mb-2' />
            
            <button type='submit' className='bg-blue-500 px-5 py-3 text-white mt-4' >Submit</button>
          </div>
        </div>
        </div>
    )
}

export default Registrasi