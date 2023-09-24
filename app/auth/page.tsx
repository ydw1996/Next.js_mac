'use client';
import Input from "@/components/input";
import React, { useState } from 'react';


const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="relative h-full w-full bg-[url('/image/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="image/logo.png" alt="logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rouned-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        <div className="flex flex-col gap-2">
                            <Input
                            label="Username"
                            onchange={(ev: any) => setName(ev.target.value)}
                            id="name"
                            type="name"
                            value={name}
                            />
                            <Input
                            label="Email"
                            onchange={(ev: any) => setEmail(ev.target.value)}
                            id="email"
                            type="email"
                            value={email}
                            />
                            <Input
                            label="Password"
                            onchange={(ev: any) => setPassword(ev.target.value)}
                            id="password"
                            type="password"
                            value={password}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;