import { Rings } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Rings
      height="80"
      width="80"
      color="#5736a3"
      radius="6"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};

export default Loader;