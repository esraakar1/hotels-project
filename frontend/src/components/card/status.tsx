import { MdEventAvailable as Ok } from "react-icons/md";
import { CgUnavailable as Fail } from "react-icons/cg";
import { type FC } from 'react';

interface Props {
    availability: boolean;
    expanded?: boolean;
}

const Status: FC<Props> = ({availability, expanded = false}) => {
  return (
    <div className={`flex items-center border gap-4 p-2 border-zinc-200 rounded-md ${availability ?  "bg-green-100" : "bg-red-100"}`} >

       {availability ? (<Ok className="text-xl text-green-700" /> ): (<Fail className="text-xl text-red-700" />
       )}

       {expanded && <p className="font-bold">{availability ? "Şuan Konaklanabilir" : "Konaklama içim müsait değil"} </p>}
    </div>
  )
}

export default Status;