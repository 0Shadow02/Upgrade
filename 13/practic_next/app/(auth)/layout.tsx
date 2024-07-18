export default function authLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <div >
        <div className="bg-red-200 text-slate-700 flex justify-center">
        20% discount for this week grab your fav products now !!!
        </div>
       {children}
    </div>
  } 