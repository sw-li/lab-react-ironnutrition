import { Alert } from 'antd';
import Marquee from 'react-fast-marquee';

function Warning() {
  return (
    <div className='emptyAlert'>
      <Alert
        banner
        message={
          <Marquee pauseOnHover gradient={false}>
            You have no more food left in this list!!!! Add some new ones right
            away!!!!!!!!!!!
          </Marquee>
        }
      ></Alert>
      <br />
      <img
        src="https://www.seekpng.com/png/detail/275-2759142_page-not-found-hungry-baby.png"
        alt="Crying face"
      />
    </div>
  );
}

export default Warning;
