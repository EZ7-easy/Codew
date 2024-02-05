import { Input } from "@/components/ui/input"
import features from "../../../public/assets/features.png"
import { Button } from "@/components/ui/button"
import logo from "../../../public/assets/logo.png"



const SignupForm = () => {
  return (
    <div className="xl:mx-[100px] grid xl:grid-cols-2 max-sm:grid-cols-1 md:mx-[20px] my-auto xl: mt-[100px] ">
      <img src={features} alt="image" className="max-sm:mt-10 m-auto md:mt-[100px]"/>
        <div className="max-sm:mx-4 mx-auto my-auto">
          <img src={logo} alt="image" className="m-auto mb-11 w-[200px"/>
          <h1 className="text-4xl font-bold">
            <span className="underline decoration-[#F4D3A1]">Create an account</span>
          </h1>
              <div className="mt-10">
                <p className="text-lg font-bold">Your Name</p>
                <Input 
                type="text" placeholder="johnDoe" className="w-[395px] p-5 border-[#F4D3A1] mt-2 rounded-[10px]"/>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">Your Email</p>
                <Input 
                type="email" placeholder="name@company.com" className="w-[395px] p-5 border-[#F4D3A1] mt-2 rounded-[10px]"/>
              </div>
              <div className="mt-4">
                <p className="text-lg font-bold">Password</p>
                <Input
                type="password" placeholder="••••••••" className="w-[395px] p-5 border-[#F4D3A1] mt-2 rounded-[10px]"/>
              </div>
              <div className="flex items-center mt-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                    </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-md">I accept the <span className="text-blue-700">Terms and Conditions</span></label>
                      </div>
                  </div>
              </div>
            <div>
              <a href="/"><Button className="bg-[#F4D3A1] w-[395px] rounded-[10px] p-6 text-[#FF733B] mt-10">Create an account</Button></a>
            </div>     
              <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4 max-sm:mb-8">
                Already have an account? <a href="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </p>     
          </div>
      </div> 
  )
}

export default SignupForm
