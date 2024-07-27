import Appbar from "@/components/appbar";


export default function Dashboard({children}:Readonly<{
    children: React.ReactNode;
  }>) {
    return <div>
        <Appbar/>
        {children}
    </div>

}