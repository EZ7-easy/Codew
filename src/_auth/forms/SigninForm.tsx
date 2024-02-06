import { Input } from "@/components/ui/input"
import features from "../../../public/assets/feature1.png"
import { Button } from "@/components/ui/button"
import logo from "../../../public/assets/logo.png"

const SigninForm = () => {
  return (
    <div className="xl:mx-[100px] grid grid-cols-2 max-sm:grid-cols-1 md:mx-[20px] my-auto mt-[100px]">
        <div className="max-sm:mx-4 mx-auto my-auto">
            <img src={logo} alt="image" className="m-auto mb-11 w-[200px"/>
            <h1 className="text-4xl font-bold">
                <span className="underline decoration-[#F4D3A1]">Sign in to your account</span>
            </h1>
            <div className="mt-10">
                <p className="text-lg font-bold">Your Email</p>
                <Input type="email" placeholder="name@company.com" className="w-[395px] p-5 border-[#F4D3A1] mt-2 rounded-[10px]"/>
            </div>
            <div className="mt-4">
                <p className="text-lg font-bold">Password</p>
                <Input type="password" placeholder="••••••••" className="w-[395px] p-5 border-[#F4D3A1] mt-2 rounded-[10px]"/>
            </div>
            <div className="flex items-center justify-between mt-4">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
            <div>
                <a href="/"><Button className="bg-[#F4D3A1] w-[395px] rounded-[10px] p-6 text-[#FF733B] mt-10">Sign in</Button></a>
            </div>         
        </div>
        <img src={features} alt="image" className="max-sm:mt-10 m-auto"/>
    </div> 
  )
}

export default SigninForm