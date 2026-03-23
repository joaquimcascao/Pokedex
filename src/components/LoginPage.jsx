export const LoginPage = () => {
    return (
        <div className=" bg-zinc-900 min-h-screen flex items-center justify-center">
            <div className="bg-zinc-800 flex flex-col justify-center gap-2 p-4 rounded-md text-zinc-50">
                <div className="flex justify-center text-zinc-50">
                    <h1 className="text-3xl font-bold">LOGIN</h1>
                </div>
                <input rows={1} placeholder="Username" className="outline-0 resize-none bg-zinc-900 p-2 rounded-md" />
                <input rows={1} placeholder="Password" className="outline-0 resize-none bg-zinc-900 p-2 rounded-md" />
                <div className="flex flex-col justify-center">
                    <button className="cursor-pointer bg-red-600 text-zinc-50 p-2 rounded-md">Login</button>
                </div>
            </div>
        </div>
    )
}