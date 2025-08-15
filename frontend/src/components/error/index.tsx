import type { FC } from "react";

interface Props {
    message: string;
    onRetry: () => void;
}


const Error: FC<Props> = ({message, onRetry}) => {
  return (
    <div>
        <div className="mt-20 bg-red-400 text-white rounded-lg p-4 font-semibold text-center">
        <h1 >Üzgünüz bir sorun oluştu</h1>
        <p>{message} </p>

        <div className="flex justify-center mt-4">
        <button className="border rounded-lg p-2 border-zinc-100 hover:bg-zinc-200 cursor-pointer hover:text-black" onClick={onRetry}>Tekrar Dene</button>
        </div>
      </div>
    </div>
  )
}

export default Error;