import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {ROUTES} from "@/lib/const/routes";
import {Loader2} from "lucide-react";
import {GoogleIcon} from "@/components/shared/icons/GoogleIcon";


export type SignInInput = {
    email: string | undefined | null
    password: string | undefined | null
};

export type LoginViews = "magic_link_login" | "password_login" | "password_signup"
export type LoginCardProps = {
    title: string
    view: LoginViews
    onSubmit: (data: SignInInput) => void
    loading?: boolean | undefined
};


export const LoginCard = ({title, onSubmit, view, loading}: LoginCardProps) => {
    const {register,  handleSubmit, watch, formState: {errors}} = useForm<SignInInput>();

    const email = watch("email")
    const password = watch("password")

    const enablePasswordInput = view != "magic_link_login"

    const enableSubmitButton = (email && (!enablePasswordInput || password))
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-8 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {title}
                    </h2>

                    {view === "magic_link_login" && <div className={"mt-2 text-center text-xs text-gray-500"}>
                        If you do not have an account - new account will be created.

                    </div>}
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <Input id={"email"} type={"email"} {...register("email")}/>
                                </div>
                            </div>

                            {enablePasswordInput && <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <Input id={"password"} type={"password"} {...register("password")}/>
                                </div>
                            </div>}



                            {/*<div className="flex items-center justify-between">*/}

                            {/*    <div className="text-sm leading-6">*/}
                            {/*        <a href="#" className="font-semibold text-primary hover:underline">*/}
                            {/*            Forgot password?*/}
                            {/*        </a>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            <div>
                                <Button disabled={loading || (!enableSubmitButton)} className={"w-full"}>
                                    {!loading && title}
                                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                                </Button>
                            </div>

                        </form>

                        <div>
                            <div className="relative mt-10">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-200"/>
                                </div>
                                <div className="relative flex justify-center text-sm font-medium leading-6">
                                    <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                </div>
                            </div>

                            <Button className={"mt-6 w-full"} variant={"outline"} disabled={true}>
                                <div className={"flex w-full items-center justify-center gap-3"}>
                                    <GoogleIcon/>
                                    <span className="text-sm font-semibold leading-6">Google</span>
                                </div>

                            </Button>

                            {view != "password_login" &&
                                <Button className={"mt-6 w-full"} variant={"outline"} asChild disabled={loading}>
                                    <Link href={ROUTES.PASSWORD_LOGIN}>
                                        Email and password
                                    </Link>
                                </Button>
                            }

                            {view != "magic_link_login" &&
                                <Button className={"mt-6 w-full"} variant={"outline"} asChild disabled={loading}>
                                    <Link href={ROUTES.MAGIC_LINK_LOGIN}>
                                        Magic Link Login
                                    </Link>
                                </Button>
                            }
                        </div>
                    </div>

                    <p className="mt-4 text-center">
                        <Button variant={"link"} asChild disabled={loading}>
                            <Link href={ROUTES.PASSWORD_SIGNUP}>
                                Register with password
                            </Link>
                        </Button>
                    </p>
                </div>
            </div>
        </>
    )
};
