import {memo} from 'react';

const Index = ({children,loader,isLoading}:Props) => <>{isLoading ? loader : children}</>

export default memo(Index);



interface Props {
    children:JSX.Element
    loader:JSX.Element
    isLoading:boolean
}
