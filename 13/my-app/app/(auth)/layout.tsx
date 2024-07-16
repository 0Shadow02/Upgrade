
export default function ({ children }:{
    children: React.ReactNode
}){

    return <div>
        <div className="border-b text-center">
        20% for everyone who signin now!
    </div>
      {children}
        </div>
}