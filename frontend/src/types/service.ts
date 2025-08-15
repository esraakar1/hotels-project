import { useMutation, useQuery } from "@tanstack/react-query";
import { type PlaceData, type PlaceResponse, type PlacesResponse } from ".";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



export const usePlaces = (paramsObj?: any) => { 
    return useQuery({
        queryKey:["places", paramsObj],

        queryFn: () => 
          api.get<PlacesResponse>("/places", { params: paramsObj } ).then((res) => res.data.places),

        // eğer error gelirse geçici bir hata olmadıgından emin olmakiçin aynı adrese 3kere istek atılır
        retry: 3,
        // her istek arasında 1 saniye bekle
        retryDelay: 1000,
        // stale time : cache deki verinin "taze / geçerli" kalma süresi
        staleTime: 0,
        // cache deki verinin "bayat olma / temizlenme" süresi - garbage süresi
        gcTime: 300000,
      });
};

export const useCreatePlace = () => {
  const navigate = useNavigate();

  return useMutation({
    // mutation key (opsiyonel)
    mutationKey: ["create"],
    // api isteği atan fonksiyon
    mutationFn: (body: PlaceData) => api.post("/places", body),
    // istek başarılı oldugunda
    onSuccess: () => { 
      toast.success("Konaklama noktası oluşturuldu");
      navigate(`/`);
  },
    // istek başarısız oldugunda
    onError: () => {
      toast.error("bir hata oluştu");
  },
  });
};

export const usePlace = (id: string) => {
  return useQuery({
    queryKey: ["place"],
    queryFn: () => api.get<PlaceResponse>(`/place/${id}`).then((res) => res.data.place),
  });
};

export const useRemovePlace = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["remove"],
    mutationFn: (id: number) => api.delete(`/place/${id}`),

    onSuccess: () => {
      toast.success("Konaklama noktası Kaldırıldı");
      navigate("/");
    },

    onError: () => {
      toast.error("Bir hata oluştu");
    },
  });
};
