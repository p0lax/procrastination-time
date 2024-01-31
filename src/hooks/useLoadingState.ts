import { signal } from '@preact/signals';

const loadingSignal = signal(false);

export const useLoadingState = () => {
  const setLoading = (value: boolean) => {
    loadingSignal.value = value;
  };
  return {
    loading: loadingSignal.value,
    setLoading,
  };
};
