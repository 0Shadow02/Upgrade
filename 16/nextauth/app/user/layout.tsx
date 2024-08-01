
import { Appbar } from "../component/Appbar";
import { Providers } from "../providers";

export default function Funlayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
          <Providers>
            {children} 
          </Providers>
    
    );
  }
  