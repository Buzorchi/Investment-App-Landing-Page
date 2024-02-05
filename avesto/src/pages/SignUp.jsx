import React from 'react'
import backdrop from '../assets/background-backdrop.svg'
import Form from '../component/Form'

const SignUp = () => {
  return (
    <div>

      <div className='w-full  relative bg-white'>
    <div class="w-[650px] mx-auto my-20">
        <div>
            <img src={backdrop} alt="side-backdrop" className='absolute w-[379px] h-[386px] right-0 top-0' />
        </div>
        <div class="flex-col justify-start items-center gap-10 flex">
            <div class="flex-col justify-start items-center gap-4 flex">
                {/* add logo */}
                <img class="w-[100px] h-[100px] bg-zinc-300" alt=""/>
                
                <div class="text-stone-950 text-2xl font-bold ">Create an account</div>
                <div class="text-stone-950 text-base font-normal ">Sign up to ---</div>
            </div>
            {/* form */}
            <Form/>
        </div>
    </div>

      </div>
    </div>
  )
}

export default SignUp
