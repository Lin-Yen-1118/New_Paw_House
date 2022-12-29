import service from '@/utils/request';

export function getAdoptAnimalsData() {
  return service({
    url: `${import.meta.env.VITE_BASE_URL}/adoptAnimals`,
    method: 'get',
    // params: query,
  });
}
