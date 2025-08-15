import { type FC } from "react";
import { sortOptions } from "../../utils/constants";
import { usePlaces } from "../../types/service";
import { useSearchParams } from "react-router-dom";


const Filter: FC = () => {
  const { data } = usePlaces();
  const [searchParams, setSearchParams] = useSearchParams();

  const locations = [...new Set(data?.map((i) => i.location))];

  // url e parametre ekleyelim
  const handleChange = (name: string, value: string): void => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-20">
      <div className="field">
        <label htmlFor="">Nereye Gitmek İstiyorsunuz?</label>
        <select className="input" onChange={(e) => handleChange("location",e.target.value)} value={searchParams.get("location") || ""}>

          <option value={""}>Seçiniz</option>

         {locations?.map((i, key: number) => (<option key={key} value={i}>{i}</option>))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="">Konaklama yeri adına göre ara?</label>
        <input type="text" placeholder="örn:Seaside Villa" className="input" onChange={(e) => handleChange("title",e.target.value)} value={searchParams.get("title") || ""}/>
      </div>

      <div className="field">
        <label htmlFor="">Sıralama Ölçütü</label>
        <select className="input" onChange={(e) => handleChange("order",e.target.value)} value={searchParams.get("order") || ""}>
         {sortOptions.map((i, key: number) => (
          <option key={key} value={i.value}>{i.label} </option>
         ))}
        </select> 
      </div>
        
       <div className="flex justify-end">
         <button onClick={() => setSearchParams({})} type="reset" className="bg-blue-500 cursor-pointer p-1 px-4 text-white rounded-md w-fit">Filtreleri Temizle</button> 
       </div> 
    </form>
  )
}

export default Filter;