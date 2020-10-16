import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, AppThunkDispatch } from '../redux/store';

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
