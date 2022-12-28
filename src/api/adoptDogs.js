import service from '@/utils/request';

export function getAdoptAnimalsData(value) {
  return service({
    url: `${import.meta.env.VITE_BASE_URL}/${value}`,
    method: 'get',
    // params: query,
  });
}
