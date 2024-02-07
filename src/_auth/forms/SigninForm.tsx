import { Input } from "@/components/ui/input"
import features from "../../../public/assets/features.png"
import { Button } from "@/components/ui/button"
// import logo from "../../../public/assets/logo.png"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { SignInValidation } from "@/lib/validation/SignUpValidation"
import {z} from "zod";
import Loader from "@/components/shared/Loader.tsx";
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "@/components/ui/use-toast"
import { useSignInAccount,  } from "@/lib/react-query/queriesAndMutations"
import { useUserContext } from "@/context/AuthContext"


const SigninForm = () => {
  const { toast } = useToast();
  const { checkAuthUser, isLoading: isUserloading } = useUserContext();
  const navigate = useNavigate();

  const { mutateAsync: signInAccount} = 
  useSignInAccount()

  const form = useForm<z.infer<typeof SignInValidation>>({
    resolver: zodResolver(SignInValidation),
    defaultValues: {
        email: '',
        password: '',
    },
})


async function onSubmit(values: z.infer<typeof SignInValidation>){
    const session = await signInAccount({
        email: values.email,
        password: values.password,
    })

    if(!session) {
        navigate('/')
    }

    const isLoggedIn = await checkAuthUser();

    if(isLoggedIn){
        form.reset();

        navigate('/')
    } else {
        navigate('/')
    }
}

  return (
    <div className="xl:mx-[100px] grid xl:grid-cols-2 max-sm:grid-cols-1 md:mx-[20px] my-auto xl: mt-[100px] ">
      <img src={features} alt="image" className="max-sm:mt-10 m-auto md:mt-[100px]"/>
      <div className="mx-auto my-auto">
      <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <img src="/public/assets/logo.png" alt='logo'/>
                <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Log in to your account</h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">Welcome back!</p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' className="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' className="" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <a href="/"><Button type="submit" className='bg-[#FF733B]'>
                        {isUserloading ? (
                            <div className="flex-center gap-2">
                                <Loader/> Loading...
                            </div>
                        ):"Sign In"}
                    </Button></a>
                    <p className='text-center mt-2'>
		                 Don't have an account? 
		                  <Link to='/sign-up' className='text-primary-500 text-small-semibold ml-1'>Sign up</Link>
                    </p>
                </form>
            </div>
        </Form>
        </div>
      </div> 
  )
}

export default SigninForm